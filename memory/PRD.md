# MGX-Tech Portfolio — PRD (agent memory)

## Original problem statement
Build the MGX-Tech marketing portfolio (freelance Software & AI engineering, Berlin — owner Mahmoud Amrous).
Stack: React + TypeScript + Vite + Tailwind + shadcn/ui, GSAP + ScrollTrigger, Lenis, lucide-react. Dark
tech-noir aesthetic: base #05080D, surfaces #0B111A/#111A26, text #E8F1F8/#8FA3B8, cyan #22D3EE + red #FF2D46
accents, diagonal cyan→red split motif. Fonts: Space Grotesk / Inter / JetBrains Mono, self-hosted. No emoji,
no purple gradients, no stock photos, no light mode.

## Content source
Client PRD.md never arrived; instead the user uploaded Mahmoud_Amrous_CV_EN.pdf (2026-08-28) — all data files
now populated from it. Remaining placeholder: bookingUrl (no calendar link in CV) → CTAs use mailto/tel.

## Implemented
2026-08-27:
- Vite + TypeScript conversion (CRA removed; vite@6 + @vitejs/plugin-react@^4; rollup 2 resolution removed;
  visual-edits vite plugin wired; HMR wss/443 via WDS_SOCKET_PORT).
- Design tokens as CSS vars + tailwind extension; self-hosted fonts via @fontsource.
- Layout: skip link, slim navbar (transparent over hero → blur + small logo after hero unpins), footer with
  contact row, Impressum/Datenschutz links, socials, © MGX-Tech.
- Hero: pin + scrub logo flight into #nav-logo-slot, circuit SVG draw, red diagonal wipe exit, blur-in intro,
  masked line-by-line headline reveal, reduced-motion fade-only fallback.
- Reusable <Reveal> (gsap.context, ScrollTrigger, y:34, autoAlpha:0, stagger .07, start 'top 82%', once).
- Lenis synced to ScrollTrigger via gsap.ticker; lagSmoothing(0).
- Logo asset: white background removed programmatically → public/brand/mgx-logo.png.

2026-08-28:
- Data files populated from CV: site (contact@mgx-tech.com, +49 177 5478441, github.com/mgx-tech-de,
  linkedin.com/in/mgx-tech), services (4), projects (4: Alzheimer Detector, Orientstation, Stampwich, Nitrex),
  experience (4 roles w/ bullets), skills (7 groups + marquee list), education (3 entries).
- Sections: Services (numbered rows, gradient accent bar hover), Projects (chamfered cards, outlined monogram
  tiles, diagonal slash, tile parallax scrub), Experience (timeline with gradient progress spine + diamond dots,
  education cards), Skills (slow editorial marquee w/ outlined alternating words + chip grid), Contact
  (circuit bg, mailto/tel CTAs). All use <Reveal>, semantic section ids, aria-labelledby.
- Navbar scrollspy: active link gets diagonal gradient underline (aria-current).
- Footer: real contact info; placeholder booking row removed.

2026-08-28 (chat):
- AI chat assistant: POST /api/chat (SSE streaming via emergentintegrations LlmChat, openai/gpt-5.4,
  EMERGENT_LLM_KEY in backend/.env, X-Accel-Buffering:no), GET /api/chat/{session}/history; messages
  persisted to Mongo chat_messages; system prompt built from CV facts; history replayed via transcript
  in prompt (library manages no history).
- ChatLauncher UI: diagonal cyan/red split chamfered launcher (ping animation), chamfered panel with
  greeting, suggestion chips, streaming render, typing dots, Escape close, data-lenis-prevent on
  message list; session id in localStorage (mgx-chat-session).
- vite.config define maps REACT_APP_BACKEND_URL into import.meta.env (Vite exposes only VITE_*).
- Verified: curl SSE stream ok; history endpoint returns persisted pair; live UI send/receive ok.

2026-08-29 (project screenshots):
- Real screenshots wired into Projects: Alzheimer (4, crossfade slideshow), AI New-Startup Scraper
  (new project; composite split into ai-scraper-1/2.png), Client Websites (new project; htv24.de,
  dilam-barbershop.de, dz-market-hanover.lovable.app captured with LOCAL Playwright + system Chrome —
  the screenshot_tool does NOT persist files to this filesystem), Orientstation (3), Nitrex (1).
  Stampwich still uses monogram tile — waiting for user screenshots.
- ProjectTile: crossfade slideshow (3.6s, opacity, reduced-motion off), dots indicator, spotlight
  vignette (.project-tile::after), parallax kept; lazy-loaded imgs; images?: string[] in Project.
- Client Websites shown WITHOUT urls per user request.
- Playwright pip package installed into /root/.venv (not a backend dep; screenshot tooling only).

## Bugs fixed during verification
- .hero-wipe CSS translateX double-counted by GSAP → GSAP owns xPercent (2026-08-27).
- Tailwind color token `base` collided with core `text-base` font-size → renamed to `night` (2026-08-28).

## Personas
- Potential freelance client (startup/SME/local business) evaluating MGX-Tech for web/mobile/AI work.
- Recruiter or partner scanning experience and skills.

## Backlog (prioritized)
- P1: Booking/calendar link from client → replace mailto CTA target (site.bookingUrl).
- P1: Impressum + Datenschutz pages (/impressum, /datenschutz) — legal requirement in Germany.
- P2: OG/social meta tags, sitemap, favicon variants.
- P2: Project detail pages or modals if client provides more material.
- P2: Stampwich screenshots (user will provide) → replace monogram tile.
- P2: Chat: German/English greeting based on browser locale; lead capture (ask for email on intent).

## Verified
- 2026-08-28: curl 200 local + preview; screenshots at 1440 for services/projects/experience/skills/contact;
  mobile 375 projects card; scrollspy underlines working; services description color bug confirmed fixed
  (rgb(143,163,184)); no console errors.
