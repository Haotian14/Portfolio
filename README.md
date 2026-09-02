# Haotian Luo — Portfolio

A personal portfolio covering my path from Computer Science undergraduate study at
UNSW, through the Master of Information Technology, to frontend product engineering
and independent projects.

**Live:** https://haotian14.github.io/Portfolio/

---

## Stack

React 19 · TypeScript · Vite · plain CSS. No UI kit, no CSS framework, and no
animation library — the design system and the motion layer are both written by hand,
which is rather the point of a frontend portfolio.

## Design system

The palette is warm and paper-like: ivory grounds, a clay accent, and an editorial
serif for display type over a grotesk UI face.

| | |
| --- | --- |
| Display | Newsreader |
| UI | Inter |
| Labels | DM Mono |
| Accent | `#CC785C` clay, deepened to `#A8492A` for small text to hold contrast |

Everything is driven by custom properties in [`src/styles/tokens.css`](src/styles/tokens.css).
Light and dark are the same token names with different values, resolved before first
paint by an inline script in `index.html` so the page never flashes the wrong theme.

The "How I work" band uses the same trick locally: `.tone-invert` flips its own tokens
rather than hard-coding colours, so it reads as a dark band on the light theme and a
light band on the dark one, and every component inside it keeps working untouched.

## Motion

All of it is transform, opacity and filter only, so nothing triggers layout.

- **Scroll reveals** — one `IntersectionObserver` drives every `[data-reveal]` element,
  with rise / fade / scale variants and per-element stagger delays.
- **Masked headings** — display lines wipe up from their own clipped box.
- **Pointer spotlights, magnetic button, parallax portrait** — pointer and scroll
  listeners are `requestAnimationFrame`-throttled and write straight to CSS custom
  properties, so React never re-renders on scroll or pointer movement.
- **Scroll progress bar, active-section nav, skills marquee, drawn timeline rules.**

The hooks live in [`src/lib/motion.ts`](src/lib/motion.ts); the CSS contract they
drive is in [`src/styles/motion.css`](src/styles/motion.css).

## Accessibility

- `prefers-reduced-motion` disables every effect and leaves all content visible —
  not merely faded in faster.
- Reveal hidden states are gated behind a `.js` class on the root element, so a
  script that fails to run can never leave content invisible.
- Skip link, visible focus rings, semantic landmarks, and labelled controls.

## Structure

```
src/
├── App.tsx              page composition
├── data.ts              projects, milestones, principles, skills
├── lib/motion.ts        reveal, scroll, pointer and theme hooks
├── components/          one file per section, plus shared primitives
└── styles/              tokens, base, motion, one file per section, responsive
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build     # tsc -b && vite build
npm run preview
```

The Vite base path is set to `/Portfolio/` for GitHub Pages. Pushing to `main` builds
and deploys via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## License

The code is MIT licensed — see [LICENSE](LICENSE). Reuse the components, the token
system and the motion hooks freely.

The personal content is not: my name, likeness, biography, and the project write-ups
are mine. Please build your own portfolio on the code rather than republishing this
one with the text swapped.
