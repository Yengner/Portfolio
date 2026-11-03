# Yengner Bermudez — Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Mantine, and Tailwind CSS. The page highlights backend and infrastructure engineering, Citi experience, DeepVisor, and MarketPulse.

## Local development

Use Node **24.22.2** (pinned in `.nvmrc`) and npm **12.2.1**:

```sh
nvm install
nvm use
npm install --global npm@12.2.1
npm ci
npm run dev
```

Open http://localhost:3000. Install Node with your preferred version manager if you do not use nvm. The lockfile is tracked; use `npm ci` for reproducible installs.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
npm start
```

Check the hero, navigation, experience diagram, project gallery, and resume links at desktop, 390px, and 320px widths. Check light and dark system themes and `prefers-reduced-motion: reduce` in browser rendering emulation.

One shared, viewport-sized starfield continues through the homepage and the EdgeFoundry case study, with a quiet nebula backdrop and occasional comets. It is brighter in the hero and quieter around dense content; cards retain opaque surfaces. The primary navigation and case-study header include Pause/Resume stars controls. The pause choice persists across client-side navigation. Background density is capped at 96 points on desktop and 36 on mobile, with a 1.5 pixel-ratio limit and approximately 30fps updates. A ringed-planet interlude and an orbital star beside Contact add space details lower on the page.

The hero keeps its interactive personal-orbit canvas. Switch between a stylized black hole, particle candlesticks, and an illustrative probability chart. The pause button freezes the scene; chart data is deliberately illustrative rather than live market data.

`ParticlesComponent.tsx` restores the SVG-shaped USF mark and the particle name signature. Hover or tap to scatter the dots and watch them gather back into place. The USF mark uses the original `public/words/USF.svg` asset. Both effects use bounded 2D canvases, approximately 30fps updates, capped mobile particle counts and pixel ratios, and pause when offscreen or the tab is hidden. Reduced-motion users get static particle compositions and can still switch the scene views. The original Three.js name component remains in the repo for reference.

## Content and assets

- `src/components/portfolio/ExperienceSection.tsx`: Citi narrative and accessible conceptual architecture diagram; no internal screenshots, hostnames, or production metrics.
- `src/components/portfolio/FeaturedProjects.tsx`: EdgeFoundry spotlight, DeepVisor and MarketPulse project cards, source/demo links, and DeepVisor gallery.
- `src/components/portfolio/EdgeFoundryCard.tsx`: full-width featured spotlight with the author-provided $15k+ historical gains summary, reported eligible-session run, and link to `/edgefoundry`. FloorPlan and CapitalBlend are no longer shown in the project section.
- `src/app/edgefoundry/page.tsx` and `edgefoundry.module.css`: Gold-focused narrative, timeline, reported observations, September 17 milestone, architecture, and evidence notes. The dedicated case-study page omits monetary amounts and proprietary execution criteria.
- `src/components/edgefoundry/MarketGapChart.tsx`: explicitly synthetic, dimensionless chart with series toggles and a keyboard-accessible time scrubber. Futures observations are omitted during the illustrated 17:00–18:00 maintenance break; the contract boundary is 17:15 New York time.
- `src/components/SpaceObject.tsx` and `SpaceObject.module.css`: shared decorative particle planet and pulsar, used on the homepage and case study with the shared motion lifecycle.
- `src/components/SpaceInterlude.tsx`: a ringed world and career-focused engineering perspective between projects and skills.
- `src/components/edgefoundry/ResearchReveal.tsx`: progressive scroll reveals with visible server-rendered content and reduced-motion support.
- `src/components/StackBadges.tsx`: grouped skills. Kafka is listed as a general skill, separate from Citi.
- `src/components/portfolio/EducationSection.tsx`: degree and current coursework.
- `src/components/CosmicPlayground.tsx`: personal space, markets, and probability views.
- `src/components/ParticlesComponent.tsx`: interactive particle logo and name.
- `src/components/AmbientSpaceProvider.tsx`: shared starfield and pause state across routes.
- `src/components/BackgroundParticles.tsx`: persistent starfield, comets, and quieter content-region treatment.
- `src/lib/particleCanvas.ts`: shared canvas lifecycle, visibility, and reduced-motion handling.
- `src/app/globals.css`: shared spacing, responsive layouts, theme tokens, and reduced-motion styles.
- `public/DeepVisor/`: existing product screenshots.
- `public/MarketPulse/walkthrough.jpg`: thumbnail from the supplied public YouTube walkthrough, `https://youtu.be/XREwYePKlpA`.
- `public/Yengner_Bermudez_Resume.pdf`: existing resume PDF, preserved as supplied. Update this file separately when the PDF's content changes.

No hosting configuration was added or changed. Review the working tree before committing or deploying new case-study edits.

## EdgeFoundry evidence boundaries

The approximate 25 eligible-session run and its September 17, 2026 endpoint are the author’s reported personal observations, not independently audited results. They are separate from retrospective backtests and the later paper-only automation. Independent validation would require private eligible-session records and archived notices/rules. At the author’s explicit request, the homepage spotlight shows their provided $15k+ summary, attributed to personal historical trading. No additional amounts are inferred. Personal account records, balances, position sizing, individual trades, and detailed execution rules remain private. The dedicated case-study page focuses on the discovery and engineering without a monetary-results card. The exact internal market change and any publisher/feed handoff remain unverified. Public CME, Pyth, and Kalshi links provide general schedule and rule context only.

Implementation claims were checked against the private EdgeFoundry repository’s `bot.py`, `logic.py`, `store.py`, `Dockerfile`, and `compose.yaml`. The public page describes capabilities without publishing private code or datasets. OCI is described as documented deployment instructions, not verified active hosting.
