import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { API_URL } from '../../lib/api';
import { useLanguage } from '../../i18n/LanguageContext';

interface ChatMsg {
  role: 'user' | 'assistant';
  content: string;
}

const LEAD_TOKEN = '[LEAD_FORM]';

function getSessionId(): string {
  const existing = localStorage.getItem('mgx-chat-session');
  if (existing) return existing;
  const id = crypto.randomUUID();
  localStorage.setItem('mgx-chat-session', id);
  return id;
}

export function ChatLauncher() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'assistant', content: t.chat.greeting },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadIdea, setLeadIdea] = useState('');
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionRef = useRef<string>('');
  const historyLoaded = useRef(false);

  useEffect(() => {
    sessionRef.current = getSessionId();
    fetch(`${API_URL}/api/chat/${sessionRef.current}/history`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { messages?: ChatMsg[] } | null) => {
        if (data?.messages?.length && !historyLoaded.current) {
          historyLoaded.current = true;
          setMessages((prev) => [...prev, ...data.messages!]);
        }
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open, leadStatus]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const leadOffered =
    leadStatus !== 'sent' &&
    messages.some((m) => m.role === 'assistant' && m.content.includes(LEAD_TOKEN));

  const patchLast = (content: string) =>
    setMessages((prev) => {
      const next = [...prev];
      next[next.length - 1] = { role: 'assistant', content };
      return next;
    });

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;
    const nextMessages: ChatMsg[] = [...messages, { role: 'user', content: text }];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionRef.current, messages: nextMessages }),
      });
      if (!res.ok || !res.body) throw new Error('chat request failed');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split('\n\n');
        buffer = chunks.pop() ?? '';
        for (const chunk of chunks) {
          const line = chunk.trim();
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (payload === '[DONE]') break;
          try {
            const parsed = JSON.parse(payload) as { delta?: string; error?: string };
            if (parsed.error) patchLast(parsed.error);
            if (parsed.delta) {
              setMessages((prev) => {
                const next = [...prev];
                next[next.length - 1] = {
                  role: 'assistant',
                  content: next[next.length - 1].content + parsed.delta,
                };
                return next;
              });
            }
          } catch {
            // incomplete JSON chunk — ignored, stream continues
          }
        }
      }
      setMessages((prev) => {
        const next = [...prev];
        if (!next[next.length - 1].content) {
          next[next.length - 1] = {
            role: 'assistant',
            content: 'No answer came through — please try again or email contact@mgx-tech.com.',
          };
        }
        return next;
      });
    } catch {
      patchLast('Something went wrong — reach me directly at contact@mgx-tech.com.');
    } finally {
      setBusy(false);
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadStatus === 'sending') return;
    setLeadStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionRef.current,
          email: leadEmail,
          idea: leadIdea,
        }),
      });
      if (!res.ok) throw new Error('lead failed');
      setLeadStatus('sent');
      setMessages((prev) => [...prev, { role: 'assistant', content: t.chat.leadConfirm }]);
    } catch {
      setLeadStatus('error');
    }
  };

  return (
    <>
      <div
        className={`chat-panel ${open ? 'chat-panel--open' : ''}`}
        role="dialog"
        aria-label={t.chat.openLabel}
        aria-hidden={!open}
        data-testid="chat-panel"
      >
        <div className="chat-panel-header">
          <div className="flex items-center gap-3">
            <span className="chat-status-dot" aria-hidden="true" />
            <p className="font-mono text-xs tracking-[0.25em] text-ink">{t.chat.title}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.chat.closePanelLabel}
            className="p-1 text-mute transition-colors hover:text-ink"
            data-testid="chat-close-button"
            tabIndex={open ? 0 : -1}
          >
            <X size={16} />
          </button>
        </div>

        <div
          ref={listRef}
          className="chat-messages"
          aria-live="polite"
          data-lenis-prevent
          data-testid="chat-messages"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.role === 'user' ? 'chat-msg chat-msg--user' : 'chat-msg chat-msg--assistant'}
            >
              {msg.role === 'assistant' && msg.content === '' ? (
                <span className="chat-typing" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </span>
              ) : (
                msg.content.replace(LEAD_TOKEN, '').trim()
              )}
            </div>
          ))}

          {leadOffered && (
            <form className="chat-lead-form" onSubmit={submitLead} data-testid="chat-lead-form">
              <p className="font-mono text-[10px] tracking-[0.2em] text-cyan">{t.chat.leadKicker}</p>
              <input
                type="email"
                required
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder={t.chat.leadEmailPlaceholder}
                aria-label="Email"
                className="chat-input w-full"
                maxLength={320}
                data-testid="lead-email-input"
                tabIndex={open ? 0 : -1}
              />
              <textarea
                value={leadIdea}
                onChange={(e) => setLeadIdea(e.target.value)}
                placeholder={t.chat.leadIdeaPlaceholder}
                aria-label="Project idea"
                rows={3}
                className="chat-textarea"
                maxLength={4000}
                data-testid="lead-idea-input"
                tabIndex={open ? 0 : -1}
              />
              <button
                type="submit"
                className="lead-submit"
                disabled={leadStatus === 'sending'}
                data-testid="lead-submit-button"
                tabIndex={open ? 0 : -1}
              >
                {leadStatus === 'sending' ? t.chat.leadSending : t.chat.leadSubmit}
              </button>
              {leadStatus === 'error' && (
                <p className="font-mono text-xs text-red" data-testid="lead-error">
                  {t.chat.leadError}
                </p>
              )}
            </form>
          )}

          {messages.length === 1 && (
            <div className="mt-3 flex flex-col items-start gap-2" data-testid="chat-suggestions">
              {t.chat.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chip cursor-pointer"
                  onClick={() => send(s)}
                  data-testid={`chat-suggestion-${s.slice(0, 12).toLowerCase().replace(/[^a-z]/g, '-')}`}
                  tabIndex={open ? 0 : -1}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="chat-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chat.inputPlaceholder}
            aria-label="Chat message"
            className="chat-input"
            maxLength={2000}
            disabled={busy}
            data-testid="chat-input"
            tabIndex={open ? 0 : -1}
          />
          <button
            type="submit"
            aria-label="Send message"
            className="chat-send"
            disabled={busy || !input.trim()}
            data-testid="chat-send-button"
            tabIndex={open ? 0 : -1}
          >
            <Send size={15} />
          </button>
        </form>
      </div>

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.chat.closeLabel : t.chat.openLabel}
        aria-expanded={open}
        data-testid="chat-launcher-button"
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
    </>
  );
}
