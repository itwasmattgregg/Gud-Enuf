# Good Enough Software Co. — Marketing Website

This is the marketing website for **Good Enough Software Co.** (working name), a Minnesota Benefit Corporation built around one core belief:

> **Technology should solve human problems, then get out of the way.**

It is not here to replace people, and it is not here to hold anyone's attention all day "driving engagement." We are not trying to extract every ounce of value out of the universe — we are trying to build a world that is sustainable in every way: ecologically, economically, technically, and humanly.

That statement is the spine of the site. Every page should be traceable back to it; the full version lives on `/manifesto`.

---

## The Company

We are a sustainable software studio that builds tools, SaaS products, and consults for organizations tired of hustle culture, fragile codebases, and endless rewrites.

Our clients are nonprofits, cooperatives, small businesses, and mission-driven founders who want software that lasts — not software that sprints toward collapse.

We are also exploring a second brand, **Adequate Labs**, with the same principles and a more tongue-in-cheek voice aimed at engineers and founders who are burned out on startup culture.

### Our Philosophy

> "Good enough" is not mediocrity. It is restraint — the discipline to stop when something works well, and the wisdom to avoid complexity that adds no real value.

We optimize for:

- Clarity over cleverness
- Durability over speed
- Cooperation over extraction
- People over profit

### What We Build

- **Custom software** designed to remain maintainable for years, not sprints
- **System rescue and simplification** for teams drowning in legacy complexity
- **Fractional CTO and architecture guidance** for organizations that need long-term technical direction
- **SaaS products** that emerge from real pain points encountered in consulting work (e.g. Share Stuff, Fenceless)

### Values

- Minnesota Benefit Corporation
- Anti-hustle, sustainable working pace
- Environmental responsibility through building less and building better
- Community reinvestment and pro-bono client work
- Open source contribution

---

## This Codebase

This repo contains the marketing website — the public face of the company. It covers:

- Homepage (hero belief + core convictions)
- Manifesto (full statement of the belief)
- About
- Services
- Contact

Built with **React**, **Vite**, **Tailwind CSS**, and deployed to **Fly.io**.

---

## Getting Started

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

Output goes to the `dist/` directory.

### Deploy

Deployment is handled via [Fly.io](https://fly.io). The `Dockerfile` runs a two-stage build — Node compiles the app, then the static output is served from `dist/`.

```bash
fly deploy
```

---

## Site Structure

| Route | Component | Description |
|---|---|---|
| `/` | `Home.tsx` | Hero, core beliefs, client fit, philosophy, contact form |
| `/manifesto` | `Manifesto.tsx` | The core belief in full: tools over destinations, no engagement traps, no extraction, four kinds of sustainability |
| `/about` | `About.tsx` | Company story, benefit corp statement |
| `/services` | `Services.tsx` | Full service offerings |
| `/contact` | `Contact.tsx` | Contact form (Formspree) |
| `*` | `NotFound.tsx` | 404 page |

---

## Related Conversations

- Company naming, manifesto, and positioning
- Client fit filter and brand voice
- Engineering & environmental principles
- Adequate Labs (second brand exploration)
- Share Stuff and Fenceless (product ideas informed by cooperative/trust-based systems thinking)
