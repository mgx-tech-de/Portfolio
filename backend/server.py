from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app

# ---------- AI chat assistant ----------
import json
from fastapi import HTTPException
from fastapi.responses import StreamingResponse
from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

CHAT_SYSTEM_PROMPT = """You are the MGX-Tech website assistant. MGX-Tech is the freelance practice of Mahmoud Amrous, a Software & AI engineer in Berlin, Germany, building web apps, mobile apps and AI systems since 2018.

Services:
1. Web applications for local businesses (driving schools, workshops, barbershops, cafes) with online booking, professional email and realtime features, built with Python/Flask.
2. Cross-platform mobile apps with Flutter/Dart and Firebase, incl. Play Store / App Store deployment and monetization (Stripe, PayPal, AdMob, AdSense).
3. AI systems: chatbots (OpenAI, Gemini) answering in 5+ languages, on-device ML with TFLite, predictive analytics, autonomous lead-prospecting agents.
4. Automation & data: web scraping (Selenium, Beautiful Soup, Scrapy), data pipelines exporting structured CSV, QR check-in systems with automated timesheet exports.

Selected projects: Alzheimer Detector & Analyzer (Flutter + Python, MobileNetV2 classification, MRI scan analysis, Gemini chatbot), Orientstation restaurant ordering (mobile + web, realtime management, PayPal), Stampwich loyalty app (QR stamps), Nitrex trading dashboard (Flutter, Syncfusion Charts).

Experience: 7+ years total; MGX-Tech freelance Berlin since 12/2025; Flutter/ML work for Nitrex (2020-present); Python development for Goldentech (2019-present); Android/web development (2016-2018). Education: Computer Science at University of Mohamed Khider (Biskra), ML & AI bootcamp at Spiced Academy Berlin (2024). Languages: Arabic (native), English and French (proficient), German (B2), Russian (advanced).

Contact: contact@mgx-tech.com, +49 177 5478441, Berlin, Germany. GitHub: github.com/mgx-tech-de. LinkedIn: linkedin.com/in/mgx-tech.

Rules: Answer visitor questions about MGX-Tech services, skills, projects, experience and contact. Never invent prices, timelines or facts not listed here - for pricing or scheduling, suggest booking a free 20-minute intro call via contact@mgx-tech.com or +49 177 5478441. Reply in the visitor's language (German or English by default). Keep answers short: 2-5 sentences, plain text, no markdown symbols like ** or #."""

class ChatMessageIn(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    session_id: str = Field(min_length=8, max_length=64)
    messages: List[ChatMessageIn] = Field(max_length=30)

@api_router.post("/chat")
async def chat_stream(req: ChatRequest):
    user_msgs = [m for m in req.messages if m.role == "user" and m.content.strip()]
    if not user_msgs:
        raise HTTPException(status_code=400, detail="No user message")
    last_user = user_msgs[-1].content.strip()[:2000]

    await db.chat_messages.insert_one({
        "session_id": req.session_id,
        "role": "user",
        "content": last_user,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    })

    history = req.messages[-13:-1]
    transcript = "\n".join(
        f"{'Visitor' if m.role == 'user' else 'Assistant'}: {m.content.strip()[:1000]}"
        for m in history if m.content.strip()
    )
    prompt = f"Conversation so far:\n{transcript}\n\nVisitor: {last_user}" if transcript else last_user

    async def event_generator():
        reply_parts: List[str] = []
        try:
            llm = LlmChat(
                api_key=os.environ["EMERGENT_LLM_KEY"],
                session_id=req.session_id,
                system_message=CHAT_SYSTEM_PROMPT,
            ).with_model("openai", "gpt-5.4")
            async for event in llm.stream_message(UserMessage(text=prompt)):
                if isinstance(event, TextDelta):
                    reply_parts.append(event.content)
                    yield f"data: {json.dumps({'delta': event.content})}\n\n"
                elif isinstance(event, StreamDone):
                    break
        except Exception:
            logger.exception("Chat stream failed")
            yield f"data: {json.dumps({'error': 'The assistant is unavailable right now - please email contact@mgx-tech.com or call +49 177 5478441.'})}\n\n"
        full_reply = "".join(reply_parts).strip()
        if full_reply:
            await db.chat_messages.insert_one({
                "session_id": req.session_id,
                "role": "assistant",
                "content": full_reply,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )

@api_router.get("/chat/{session_id}/history")
async def chat_history(session_id: str):
    docs = await db.chat_messages.find(
        {"session_id": session_id}, {"_id": 0, "role": 1, "content": 1}
    ).sort("timestamp", 1).to_list(50)
    return {"messages": docs}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()