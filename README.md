# Aerocinema — Drone Cinematography Landing Page

Landing page for a professional drone cinematography service, built with Next.js 15, React, Tailwind CSS and shadcn/ui. High-end dark visual design with motion effects (framer-motion), custom lamp lighting effects, and an integrated contact form powered by Resend.

## Features

- Cinematic dark UI with custom lighting effects (`LampContainer`)
- Sections: hero, DJI 5 Pro showcase, services, color-grading reel, FAQ (accordion), contact
- Contact form wired to Resend (email delivery)
- Motion design with framer-motion (scroll reveals, animated reels)
- SEO-friendly Next.js App Router structure
- Biome for linting/formatting, generated project map script (`npm run map`)
- Codebase knowledge graph with Graphify (see `graphify-out/`)

## Tech Stack

- Next.js 15 (App Router) + React 18
- TypeScript
- Tailwind CSS + shadcn/ui components
- framer-motion, lucide-react, clsx, tailwind-merge, tw-animate-css
- Resend (email)
- Biome (lint/format)

## Getting Started

```bash
npm install
npm run dev      # starts dev server (regenerates project map first)
npm run build    # production build
npm run lint     # biome check
npm run format   # biome format --write
```

Requires Node 18.17+ (Next.js 15). Environment variables: `RESEND_API_KEY` (contact form), `CONTACT_EMAIL` (recipient).

## Project Structure

- `src/app` — App Router pages and routes
- `src/components` — UI sections and shadcn components
- `scripts/generate-map.js` — project map generator
- `graphify-out/` — codebase knowledge graph data
- `progress.md` — session progress log

## License

MIT
