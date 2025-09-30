import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { Box, Button, Group, Modal, Stack, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Section } from "../utils";
import { projectCardStyle } from "./styles";
import { useState } from 'react';

type ProjectLink = {
    label: string;
    href: string;
    variant?: "light" | "subtle" | "outline";
    color?: string;
};

type FeaturedImage = {
    src: string;
    alt?: string;
    /** New: detail line to show in the modal under the image */
    detail?: string;
};


type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    highlights?: string[];
    links: ProjectLink[];
    images?: FeaturedImage[];

};

const featuredProjects: FeaturedProject[] = [
    {
        title: "DeepVisor",
        description:
            "SaaS analytics toolkit in development with typed Next.js 15 APIs, Supabase/Postgres persistence, and OCI-hosted Docker infra.",
        tech: [
            "Next.js 15 (App Router, React 19)",
            "TypeScript",
            "Tailwind CSS",
            "Mantine UI",
            "Supabase (Postgres, RLS, Edge Functions, Storage)",
            "Supabase Queues",
            "n8n (workflows)",
            "Cloudflare Tunnel",
            "OCI (Compute VM)",
            "Docker Compose",
            "Meta Marketing API",
            "Recharts"
        ],

        links: [
            { label: "GitHub", href: "https://github.com/Yengner/DeepVisor", variant: "light", color: "cyan" },
            { label: "Live demo", href: "https://www.deepvisor.com", variant: "subtle", color: "blue.3" },
        ],
        images: [
            {
                src: '/DeepVisor/DeepVisor.png',
                alt: 'DeepVisor dashboard with cross-account KPIs and Meta campaigns grid',
                detail:
                    'Next.js 15 command center showing live KPIs (leads, spend, CTR, CPL) and a filtered grid of active Meta campaigns. Data is fetched server-side from Supabase (Postgres + RLS) and the Meta Marketing API, with date presets and account selectors synchronized via global app state.'
            },
            {
                src: '/DeepVisor/DeepVisor-2.png',
                alt: 'DeepVisor automation planner with queued scans and playbook actions',
                detail:
                    'Automation Planner orchestrated via Supabase Queues and n8n: schedules KPI scans, triggers Edge Functions, and dispatches playbook actions (optimize budget, rotate creatives, re-rank top posts). Jobs carry status/progress metadata for each step in the optimizer pipeline.'
            },
            {
                src: '/DeepVisor/DeepVisor-4.png',
                alt: 'Agency operations dashboard with daily optimizer runs and job history',
                detail:
                    'Operations view for the Daily Optimizer: cron-driven runs, per-job timelines, and retry controls backed by the campaign_job_progress table. Surfaces run outcomes, errors, and execution latencies so the team can audit and re-run individual steps across campaigns/ad sets/ads.'
            },
            {
                src: '/DeepVisor/DeepVisor-5.png',
                alt: 'Account performance analytics with trends and campaign heatmap',
                detail:
                    'Analytics module with time-series spend and leads plus a campaign heatmap (day/week/month granularity). Shows blended CPM/CPC, lead rate, and per-campaign deltas to quickly spot under/over-performers. Charts rendered in the app with client-safe data hydrated from Supabase.'
            },
            {
                src: '/DeepVisor/DeepVisor-6.png',
                alt: 'Meta integration settings with connection health and sync controls',
                detail:
                    'Meta (Facebook & Instagram) integration settings: Business Login/OAuth status, stored page and ad-account IDs, token freshness, and manual re-sync buttons. Ties into Supabase records and n8n webhooks to pull posts, campaigns, ad sets, and ads on demand or via scheduled syncs.'
            },
            {
                src: '/DeepVisor/DeepVisor-7.png',
                alt: 'n8n on Oracle Cloud VM with Cloudflare tunnel and webhook endpoints',
                detail:
                    'n8n deployed on an Oracle Cloud VM at n8n.deepvisor.com, exposed through a Cloudflare tunnel. Webhook endpoints feed the DeepVisor Optimizer (scan → plan → act) and call back into Supabase Edge Functions/Queues for campaign updates and audit-safe job logging.'
            }
        ]

    },
    {
        title: "FloorPlan Project",
        description:
            "Flask + Detectron2 app that auto-detects and segments architectural elements in floor-plan images. Users upload a plan, the model runs instance predictions, and the app returns an annotated image with boxes/masks and confidence scores—great for rapid takeoffs and digital plan QA.",
        tech: ["Python", "Flask", "Detectron2", "OpenCV", "Pillow", "Jupyter"],
        links: [
            { label: "GitHub", href: "https://github.com/Yengner/FloorPlan-Project", variant: "light", color: "cyan" },
        ],

        images: [
            {
                src: "/FloorPlan_AI/floorplan-2.jpg",
                alt: "Annotated floor plan with dense detections across multiple rooms",
                detail:
                    "Auto-annotated, multi-room floor plan with colored detection overlays and confidence labels across walls, doors, windows, bathrooms, bedrooms, kitchen, and circulation. Useful for rapid takeoffs and plan QA—shows per-element scores and tight bounding geometry."
            },
            {
                src: "/FloorPlan_AI/floorplan-1.jpg",
                alt: "Apartment-style floor plan with balcony and origin point markers",
                detail:
                    "Apartment layout labeled 'FLOOR PLAN' featuring balcony, living/dining, kitchen, M. Bed Room, G. Bed Room, passages, and an open-to-sky court. Detection overlays frame structural and MEP openings; origin point noted on the left margin for coordinate-aware measurements."
            },
            {
                src: "/FloorPlan_AI/floorplan-3.jpg",
                alt: "Multi-unit residential level with stair core, terraces, and repeated room blocks",
                detail:
                    "Level plan for a multi-unit residence: repeated bedroom/bath clusters, stair core and landing, terraces/balconies, and service areas. Overlays show near-100% confidence on perimeter segments and openings, aiding cross-unit consistency checks and quantity extraction."
            }
        ]
    },
    {
        title: "CodeAtlas",
        description:
            "Agent-powered project manager that turns repo context and commits into tasks, keeps boards in sync from GitHub activity, and visualizes project structure with React Flow. Frontend is Next.js 15 + TypeScript + Mantine; backend is FastAPI with Google Gemini ADK; data/auth via Supabase; GitHub App webhooks drive updates.", // Devpost describes auto task creation, progress from commits, and visualizations, plus FastAPI + ADK + webhooks + Supabase. :contentReference[oaicite:0]{index=0}
        tech: ["Next.js 15", "TypeScript", "Mantine", "Supabase", "Gemini ADK", "GitHub App", "Webhooks"],
        links: [
            { label: "GitHub", href: "https://github.com/vidhimudaliar/CodeAtlas", variant: "light", color: "cyan" },
            { label: "Devpost", href: "https://devpost.com/software/codeatlas", variant: "subtle", color: "blue.3" }
        ],
        images: [
            {
                src: "/CodeAtlas/codeatlas.png",
                alt: "React Flow graph of project structure",
                detail:
                    "Overview graph rendered with React Flow that lays out nodes for major areas (frontend, routes, components, app) and their relationships—giving a quick mental model of the codebase alongside the task board."
            },
            {
                src: "/CodeAtlas/CodeAtlas-3.png",
                alt: "Kanban board with To Do, In Progress, Testing, and Done columns",
                detail:
                    "Auto-generated task board that stays in sync with commits and PRs (agent updates statuses as work lands). Columns reflect the project pipeline and let you drill into tasks/subtasks created from repository context." // Devpost “The Project Board” & auto task/status behavior. :contentReference[oaicite:2]{index=2}
            },
            {
                src: "/CodeAtlas/CodeAtlas-4.png",
                alt: "Task details drawer with nested subtasks and code panel",
                detail:
                    "Task detail modal shows description, nested subtasks, and a contextual code panel. Items are created by the FastAPI + Gemini ADK agent from webhook payloads (commits, PRs, issues) and tied to Supabase records for hierarchy and progress tracking." // Devpost “Every Subtask with Description” and agent/webhook/ADK details. :contentReference[oaicite:3]{index=3}
            },
            {
                src: "/CodeAtlas/CodeAtlas-2.png",
                alt: "Projects list with GitHub connection and visibility badges",

                detail:
                    "Workspace home showing connected GitHub projects with PUBLIC/PRIVATE badges and last-updated timestamps. This view reflects repos linked via the GitHub App and is the entry point for CodeAtlas’s agent to ingest repo context before task generation and visualization." // Devpost “The Projects”. :contentReference[oaicite:1]{index=1}
            }
        ]
    }

];

export default function FeaturedProjects() {
    // Viewer state for the modal lightbox
    const [viewer, setViewer] = useState<{ open: boolean; projIdx: number; imgIdx: number }>({
        open: false,
        projIdx: 0,
        imgIdx: 0,
    });

    const openViewer = (projIdx: number, imgIdx: number) => setViewer({ open: true, projIdx, imgIdx });
    const closeViewer = () => setViewer((v) => ({ ...v, open: false }));

    return (
        <Section id="featured-projects" title="Featured Projects">
            {/* OUTER carousel (unchanged except for controls offset) */}
            <Carousel
                withIndicators
                controlSize={46}
                height="100%"
                slideSize="100%"
                emblaOptions={{ containScroll: 'trimSnaps', dragFree: false, loop: true }}
                styles={{
                    root: { overflow: 'visible' },
                    controls: { left: '-28px', right: '-28px' },
                    indicator: {
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        border: '1px solid rgba(120, 198, 255, 0.45)',
                        background: 'rgba(17, 30, 55, 0.6)',
                        transition: 'all 160ms ease',
                    },
                    control: {
                        color: '#0b172f',
                        background: 'rgba(224, 244, 255, 0.92)',
                        borderRadius: 999,
                        border: '1px solid rgba(148, 198, 255, 0.3)',
                    },
                }}
            >
                {featuredProjects.map((project, pIdx) => (
                    <Carousel.Slide key={project.title}>
                        <div
                            style={{
                                ...projectCardStyle,
                                padding: '2.6rem',
                                borderRadius: 26,
                                display: 'grid',
                                gridTemplateColumns: 'minmax(280px, 1fr) minmax(280px, 1fr)',
                                gap: '1.8rem',
                                alignItems: 'center',
                            }}
                        >
                            {/* INNER screenshots carousel */}
                            <div style={{ position: 'relative' }}>
                                <Carousel
                                    withIndicators
                                    height="100%"
                                    slideGap="sm"
                                    styles={{ container: { aspectRatio: '15 / 8' } }}
                                    emblaOptions={{ containScroll: 'trimSnaps', dragFree: true, loop: true, }}
                                    onPointerDownCapture={(e) => e.stopPropagation()}
                                    onTouchStartCapture={(e) => e.stopPropagation()}
                                    onWheelCapture={(e) => e.stopPropagation()}
                                >
                                    {(project.images ?? []).map((img, i) => (
                                        <Carousel.Slide key={i}>
                                            <button
                                                onClick={() => openViewer(pIdx, i)}
                                                style={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    overflow: 'hidden',
                                                    borderRadius: 18,
                                                    border: '1px solid rgba(96,165,250,0.32)',
                                                    background: 'linear-gradient(90deg, rgba(14,24,46,0.6), rgba(12,22,44,0.4))',
                                                    aspectRatio: '14 / 8',
                                                    padding: 0,
                                                    cursor: 'zoom-in',
                                                }}
                                                aria-label={`Open ${img.alt ?? `${project.title} screenshot`} in viewer`}
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt ?? `${project.title} screenshot`}
                                                    loading="lazy"
                                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </button>
                                        </Carousel.Slide>
                                    ))}
                                </Carousel>
                            </div>

                            {/* Right column */}
                            <Stack gap="1.2rem">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.6rem' }}>
                                    <Text fw={600} style={{ color: 'black', fontSize: '1.25rem' }}>
                                        {project.title}
                                    </Text>
                                    <span
                                        aria-hidden
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #7dd3fc, #22d3ee)',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                <Text style={{ color: 'gray', lineHeight: 1.7, fontSize: '0.97rem' }}>{project.description}</Text>

                                <Group gap="xs" style={{ flexWrap: 'wrap' }}>
                                    {project.tech.map((badge) => (
                                        <span
                                            key={badge}
                                            style={{
                                                padding: '0.35rem 0.6rem',
                                                borderRadius: 10,
                                                background: 'rgba(16,34,64,0.55)',
                                                border: '1px solid rgba(100,200,255,0.25)',
                                                color: 'rgba(220,236,255,0.92)',
                                                fontSize: '0.75rem',
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </Group>

                                <Group gap="xs" style={{ flexWrap: 'wrap' }}>
                                    {project.links.map((link) => (
                                        <Button
                                            key={link.href}
                                            component="a"
                                            href={link.href}
                                            size="sm"
                                            radius="xl"
                                            variant={link.variant ?? 'light'}
                                            color={link.color ?? 'grape'}
                                            styles={{
                                                root: {
                                                    background:
                                                        link.variant === 'subtle'
                                                            ? 'transparent'
                                                            // soft pastel gradients (blue, mint, peach, lavender)
                                                            : 'linear-gradient(135deg, #E6F0FF, #D6E6FF)',
                                                    color:
                                                        link.variant === 'subtle'
                                                            ? 'rgba(40, 52, 71, 0.85)'
                                                            : '#14223A',
                                                    border:
                                                        link.variant === 'subtle'
                                                            ? '1px solid rgba(40, 52, 71, 0.15)'
                                                            : 'none',
                                                },
                                            }}
                                        >
                                            {link.label}
                                        </Button>
                                    ))}
                                </Group>

                            </Stack>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* MODAL lightbox with the same carousel */}
            <Modal
                opened={viewer.open}
                onClose={closeViewer}
                fullScreen
                withCloseButton
                overlayProps={{ opacity: 0.35, blur: 2 }}
                styles={{
                    content: { background: "rgba(5,10,20,0.9)", padding: "1.25rem" },
                    header: { background: "transparent", borderBottom: "none" },
                    body: { paddingTop: 0 },
                }}
            >
                {viewer.open && (
                    <Box
                        style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(0, 10fr) minmax(200px, 1fr)",
                            gap: "1.25rem",
                            alignItems: "stretch",
                        }}
                        data-modal-grid
                    >
                        {/* LEFT: Carousel with CONTAIN (no cropping) */}
                        <Box>
                            <Text fw={600} size="lg" c="white" mb="sm">
                                {featuredProjects[viewer.projIdx].title}
                            </Text>

                            <Carousel
                                withIndicators
                                initialSlide={viewer.imgIdx}
                                styles={{
                                    root: { overflow: "visible" },
                                    controls: { left: "-36px", right: "-36px" },
                                    indicator: {
                                        width: 12,
                                        height: 12,
                                        borderRadius: 12,
                                        border: "1px solid rgba(120, 198, 255, 0.45)",
                                        background: "rgba(17, 30, 55, 0.6)",
                                        transition: "all 160ms ease",
                                    },
                                    control: {
                                        color: "#0b172f",
                                        background: "rgba(224, 244, 255, 0.92)",
                                        borderRadius: 999,
                                        border: "1px solid rgba(148, 198, 255, 0.3)",
                                        height: 50,
                                        width: 50,
                                    },
                                    container: { maxWidth: "1800px", margin: "0 auto" },
                                }}
                                emblaOptions={{ containScroll: "trimSnaps", dragFree: true, loop: true }}
                                onSlideChange={(index) => setViewer((v) => ({ ...v, imgIdx: index }))}
                            >
                                {(featuredProjects[viewer.projIdx].images ?? []).map((img, i) => (
                                    <Carousel.Slide key={i}>
                                        <div
                                            style={{
                                                display: 'grid',
                                                gap: '0.75rem',
                                                justifyItems: 'center',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'relative',
                                                    width: 'min(92vw, 1200px)',
                                                    aspectRatio: '16 / 9',
                                                    borderRadius: 18,
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(96,165,250,0.32)',
                                                    background:
                                                        'linear-gradient(90deg, rgba(14,24,46,0.6), rgba(12,22,44,0.4))',
                                                }}
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt ?? 'project image'}
                                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        </Box>

                        {/* RIGHT: Rich details panel */}
                        <Box
                            style={{
                                border: '1px solid rgba(148, 198, 255, 0.22)',
                                borderRadius: 16,
                                padding: '1rem',
                                background: 'linear-gradient(180deg, rgba(10,18,36,0.7), rgba(8,16,34,0.55))',
                                height: 'calc(100vh - 140px)',
                                overflow: 'auto',
                            }}
                        >
                            <Stack gap="md">
                                <div>
                                    <Text fw={700} size="lg" c="white">
                                        {featuredProjects[viewer.projIdx].title}
                                    </Text>
                                    {featuredProjects[viewer.projIdx].images?.[viewer.imgIdx]?.detail && (
                                        <Text size="sm" c="rgba(226,238,255,0.9)" mt="sm">
                                            {featuredProjects[viewer.projIdx].images?.[viewer.imgIdx]?.detail}
                                        </Text>
                                    )}
                                </div>


                            </Stack>
                        </Box>
                    </Box>
                )}

                <style>{`
                                        @media (max-width: 960px) {
                                            [data-modal-body] > div > div {
                                            grid-template-columns: 1fr !important;
                                            }
                                        }
                `}</style>
            </Modal>

        </Section>
    );
}
