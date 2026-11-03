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

The hero keeps a subtle star field alongside an interactive personal-orbit canvas. Switch between a stylized black hole, particle candlesticks, and an illustrative probability chart. The pause button freezes the scene; chart data is deliberately illustrative rather than live market data.

`ParticlesComponent.tsx` restores the SVG-shaped USF mark and the particle name signature. Hover or tap to scatter the dots and watch them gather back into place. The USF mark uses the original `public/words/USF.svg` asset. Both effects use bounded 2D canvases, approximately 30fps updates, capped mobile particle counts and pixel ratios, and pause when offscreen or the tab is hidden. Reduced-motion users get static particle compositions and can still switch the scene views. The original Three.js name component remains in the repo for reference.

## Content and assets

- `src/components/portfolio/ExperienceSection.tsx`: Citi narrative and accessible conceptual architecture diagram; no internal screenshots, hostnames, or production metrics.
- `src/components/portfolio/FeaturedProjects.tsx`: featured and secondary projects, source/demo links, and DeepVisor gallery.
- `src/components/StackBadges.tsx`: grouped skills. Kafka is listed as a general skill, separate from Citi.
- `src/components/portfolio/EducationSection.tsx`: degree and current coursework.
- `src/components/CosmicPlayground.tsx`: personal space, markets, and probability views.
- `src/components/ParticlesComponent.tsx`: interactive particle logo and name.
- `src/lib/particleCanvas.ts`: shared canvas lifecycle, visibility, and reduced-motion handling.
- `src/app/globals.css`: shared spacing, responsive layouts, theme tokens, and reduced-motion styles.
- `public/DeepVisor/`: existing product screenshots.
- `public/MarketPulse/walkthrough.jpg`: thumbnail from the supplied public YouTube walkthrough, `https://youtu.be/XREwYePKlpA`.
- `public/Yengner_Bermudez_Resume.pdf`: existing resume PDF, preserved as supplied. Update this file separately when the PDF's content changes.

No deployment configuration or hosted site was changed. Review the working tree before committing or deploying.
