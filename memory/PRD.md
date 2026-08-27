# MGX-Tech Portfolio — PRD (agent memory)

## Original problem statement
Build the MGX-Tech marketing portfolio (freelance Software & AI engineering, Berlin) per the client's PRD.md
(referenced but NOT yet provided by the user). Stack: React + TypeScript + Vite + Tailwind + shadcn/ui, GSAP +
ScrollTrigger, Lenis, lucide-react. Dark tech-noir aesthetic: base #05080D, surfaces #0B111A/#111A26, text
#E8F1F8/#8FA3B8, cyan #22D3EE + red #FF2D46 accents, diagonal cyan→red split motif. Fonts: Space Grotesk
(display), Inter (body), JetBrains Mono (kickers) — self-hosted via @fontsource. No emoji, no purple gradients,
no stock photos, no light mode.

## Status of client PRD.md
User chose to upload PRD.md as an attachment but it has NOT arrived yet. All content facts not present in the
brief are marked `[PLACEHOLDER: … — see PRD §…]` in src/data/*.ts. Swap in real content when the PRD lands.

## Implemented (2026-08-27)
- Vite + TypeScript conversion (replaced CRA/craco; scripts: start=vite, build=vite build; rollup 2 resolution
  removed; @vitejs/plugin-react pinned ^4.3.4 for Vite 6; visual-edits vite plugin wired with graceful fallback;
  HMR via WDS_SOCKET_PORT wss/443).
- Tailwind theme: brand tokens as CSS vars in src/index.css + tailwind.config.js extension; shadcn hsl vars kept.
- Typed data files: src/data/site.ts, services.ts, projects.ts, experience.ts, skills.ts (placeholders marked).
- Layout: skip link, sticky slim navbar (transparent over hero → blur+small logo after hero unpins, diagonal
  gradient link underlines, mobile menu), footer with diagonal hairline, contact row, Impressum/Datenschutz
  links, socials, © MGX-Tech.
- Hero: pinned GSAP ScrollTrigger sequence — intro blur-in + masked line-by-line headline reveal ("Software.
  Web. Apps. AI." with cyan→red "AI."), scrub-linked logo flight into #nav-logo-slot, circuit SVG line draw
  (pathLength dash), red diagonal wipe on exit, scroll cue. prefers-reduced-motion: no pin/scrub, fade only.
- Reusable <Reveal> (gsap.context + ScrollTrigger, y:34, autoAlpha:0, stagger .07, start 'top 82%', once:true).
- Lenis synced to ScrollTrigger (lenis.on scroll → ScrollTrigger.update; gsap.ticker raf; lagSmoothing(0)).
- Logo asset processed: white background removed (alpha = 255-min, un-premultiplied) → public/brand/mgx-logo.png.

## Architecture
- src/lib/gsap-setup.ts — plugin registration (single module)
- src/lib/lenis.tsx — LenisProvider, useLenis, useScrollTo
- src/components/Reveal.tsx; layout/{SkipLink,Navbar,Footer}.tsx; hero/{Hero,CircuitField}.tsx
- All GSAP in useLayoutEffect with gsap.context + ctx.revert(); only transform/opacity/filter animated.

## Personas
- Potential freelance client (startup/SME) evaluating MGX-Tech for web/mobile/AI work.
- Recruiter/partner scanning experience and skills.

## Backlog (prioritized)
- P0: Populate data files from client's PRD.md once uploaded (email, booking link, socials, services, projects,
  experience, skills). Hero §7.1/§8 fine-tuning per PRD motion spec.
- P1: Sections using <Reveal>: Services (numbered chapters), Projects, Experience, Skills, Contact/booking.
- P1: Impressum + Datenschutz pages (legal requirement in Germany) — routes /impressum, /datenschutz.
- P2: Active-nav scrollspy underline, chat launcher with diagonal motif, OG meta tags, sitemap.

## Verification notes (2026-08-27)
- curl localhost:3000 → 200, title correct.
- Screenshots verified: 1440 hero intro, mid-pin (logo flight + circuit draw), past-hero (wipe cleared, navbar
  solid + small logo, footer), 375/768/1024 hero. No console errors.
- Bug fixed during verification: .hero-wipe CSS translateX double-counted by GSAP → removed, GSAP owns xPercent.
