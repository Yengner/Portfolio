"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import type { CSSProperties } from "react";
import HeroClient from "../components/HeroClient";
import BackgroundParticles from "./BackgroundParticles";
import { Section } from "./utils";
import ParticlesComponent from "./ParticlesComponent";

const glassCardStyle: CSSProperties = {
    background: "linear-gradient(160deg, rgba(10,18,42,0.58) 0%, rgba(11,26,52,0.38) 100%)",
    border: "1px solid rgba(120, 198, 255, 0.26)",
    borderRadius: 20,
    padding: "1.8rem",
    backdropFilter: "blur(12px)",
    boxShadow: "0 32px 70px rgba(10, 22, 46, 0.45)",
};

const cardTextStyle: CSSProperties = {
    color: "rgba(228, 238, 255, 0.8)",
    fontWeight: 400,
};

const accentTextStyle: CSSProperties = {
    color: "rgba(205, 230, 255, 0.96)",
};

const projectCardStyle: CSSProperties = {
    background: "linear-gradient(180deg, rgba(15,23,42,0.82) 0%, rgba(17,33,60,0.65) 100%)",
    border: "1px solid rgba(122, 189, 255, 0.35)",
    borderRadius: 22,
    padding: "1.8rem",
    boxShadow: "0 26px 60px rgba(10, 18, 36, 0.45)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backdropFilter: "blur(10px)",
};

const badgeChipStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.65rem",
    borderRadius: 999,
    background: "rgba(37, 99, 235, 0.18)",
    color: "rgba(209, 233, 255, 0.85)",
    fontSize: "0.75rem",
    letterSpacing: "0.04em",
    border: "1px solid rgba(96, 165, 250, 0.35)",
};

const timelineItemStyle: CSSProperties = {
    background: "rgba(15, 23, 42, 0.55)",
    border: "1px solid rgba(148, 197, 255, 0.24)",
    borderRadius: 18,
    padding: "1.4rem 1.6rem",
    boxShadow: "0 20px 48px rgba(10, 18, 36, 0.38)",
};

const projects = [
    {
        title: "Observability Control Tower",
        description:
            "Unified metrics, logging, and alerting with custom visualisations, driving a 40% faster MTTR for core services.",
        badges: ["Next.js", "Grafana", "Temporal"],
        href: "#",
        secondary: "View dashboard",
    },
    {
        title: "Realtime Collaboration Canvas",
        description:
            "WebRTC-powered whiteboard with CRDT syncing and 3D particle accents rendering brand motifs in the background.",
        badges: ["React", "WebRTC", "Three.js"],
        href: "#",
        secondary: "Watch demo",
    },
    {
        title: "Intelligent Deployment Orchestrator",
        description:
            "Policy-aware deployment pipelines spanning AWS and GCP, featuring automated rollback heuristics and live health overlays.",
        badges: ["AWS", "GCP", "Terraform"],
        href: "#",
        secondary: "Read case study",
    },
];

const timeline = [
    {
        range: "2023 – Present",
        role: "Senior Software Engineer, Nimbus Labs",
        summary:
            "Leading platform efforts for data infrastructure and developer experience, with focus on real-time analytics and distributed tracing.",
    },
    {
        range: "2021 – 2023",
        role: "Full-stack Engineer, Atlas Cloud",
        summary:
            "Shipped customer onboarding journey, hardened API gateways, and pioneered design system adoption across squads.",
    },
    {
        range: "2019 – 2021",
        role: "Software Engineer (Co-op), South Florida Tech",
        summary:
            "Built internal dashboards, automated runbooks, and delivered ML-assisted forecasting pilots while completing coursework.",
    },
];

export default function HomeClient() {
    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <BackgroundParticles />
            <main style={{ position: "relative", zIndex: 1 }}>
                <HeroClient />

                <Section
                    id="about"
                    title="About"
                    description="Interactive front-end developer blending design and code."
                >
                    <div style={{ position: "relative" }}>
                        <ParticlesComponent
                            svgs={["/words/ENGINEER2.svg"]}
                            style={{
                                position: "absolute",
                                inset: 10,
                                opacity: 1,
                                // filter: "blur(0.5px)",
                                pointerEvents: "none",
                                zIndex: 2,
                            }}
                        />
                        <Stack gap="md" style={{ ...glassCardStyle, position: "relative", zIndex: 5 }}>
                            <Text style={cardTextStyle}>
                                dknwlknqkldnwalkndwlknalkdnwaldnawdwdadawdawdawddwdwadawdawdawdawdawdawdawdawdawdawdawdawdawdaw
                            </Text>
                            <Text style={{ ...cardTextStyle, color: "rgba(214, 227, 255, 0.72)" }}>
                                My toolkit pairs React, TypeScript, Mantine, and Tailwind with creative coding tools such
                                as Three.js, Framer Motion, and tsParticles to craft accessible, immersive interfaces.
                            </Text>
                            <Group justify="center" gap="md" mt="sm">
                                <Button
                                    component="a"
                                    href="#capabilities"
                                    variant="gradient"
                                    gradient={{ from: "#60a5fa", to: "#22d3ee", deg: 125 }}
                                >
                                    View capabilities
                                </Button>
                                <Button
                                    component="a"
                                    href="mailto:hello@yengner.dev"
                                    variant="outline"
                                    color="blue.2"
                                    style={{
                                        borderColor: "rgba(94, 234, 212, 0.45)",
                                        color: "rgba(191, 219, 254, 0.95)",
                                    }}
                                    styles={() => ({
                                        label: accentTextStyle,
                                    })}
                                >
                                    Say hello
                                </Button>
                            </Group>
                        </Stack>
                    </div>
                </Section>

                <Section
                    id="capabilities"
                    title="Capabilities"
                    description="A snapshot of the areas I focus on."
                >
                    <Stack gap="sm" style={{ ...glassCardStyle, padding: "1.45rem 1.9rem" }}>
                        <Text style={cardTextStyle}>
                            • Design systems & component libraries that balance aesthetics with accessibility.
                        </Text>
                        <Text style={cardTextStyle}>
                            • Real-time interaction and data visualisation powered by React Three Fiber and charts.
                        </Text>
                        <Text style={cardTextStyle}>
                            • Production-grade Next.js apps with tight feedback loops, animation, and SEO.
                        </Text>
                    </Stack>
                </Section>

                <Section
                    id="projects"
                    title="Projects"
                    description="Selected work that blends robust engineering with expressive interfaces."
                >
                    <div
                        style={{
                            display: "grid",
                            gap: "1.6rem",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        }}
                    >
                        {projects.map((project) => (
                            <div key={project.title} style={projectCardStyle}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text fw={600} style={{ color: "#dceafe", fontSize: "1.2rem" }}>
                                        {project.title}
                                    </Text>
                                    <span
                                        aria-hidden
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                                            boxShadow: "0 0 12px rgba(96, 165, 250, 0.6)",
                                        }}
                                    />
                                </div>
                                <Text style={{ color: "rgba(220, 236, 255, 0.75)", lineHeight: 1.6 }}>
                                    {project.description}
                                </Text>
                                <Group gap="xs">
                                    {project.badges.map((badge) => (
                                        <span key={badge} style={badgeChipStyle}>
                                            {badge}
                                        </span>
                                    ))}
                                </Group>
                                <Group gap="xs">
                                    <Button
                                        component="a"
                                        href={project.href}
                                        size="sm"
                                        radius="xl"
                                        variant="light"
                                        color="cyan"
                                    >
                                        {project.secondary}
                                    </Button>
                                    <Button component="a" href={project.href} size="sm" variant="subtle" color="blue.1">
                                        Details
                                    </Button>
                                </Group>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section
                    id="experience"
                    title="Experience"
                    description="A brief timeline of roles and focus areas."
                >
                    <Stack gap="lg">
                        {timeline.map((item) => (
                            <div key={item.role} style={timelineItemStyle}>
                                <Text fw={600} style={{ color: "#e3ecff", fontSize: "1.05rem" }}>
                                    {item.role}
                                </Text>
                                <Text style={{ color: "rgba(196, 214, 255, 0.72)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                                    {item.range}
                                </Text>
                                <Text style={{ color: "rgba(224, 235, 255, 0.78)", lineHeight: 1.6, marginTop: "0.75rem" }}>
                                    {item.summary}
                                </Text>
                            </div>
                        ))}
                    </Stack>
                </Section>

                <Section
                    id="playground"
                    title="Particle Playground"
                    description="Interactive wordmarks rendered with polygon masks. Swap the SVG to experiment with brand treatments."
                >
                    <div
                        style={{
                            position: "relative",
                            minHeight: 360,
                            borderRadius: 26,
                            overflow: "hidden",
                            border: "1px solid rgba(120, 198, 255, 0.28)",
                            background: "linear-gradient(180deg, rgba(8,14,34,0.65) 0%, rgba(9,18,36,0.85) 100%)",
                            boxShadow: "0 32px 70px rgba(7, 15, 30, 0.6)",
                        }}
                    >
                        <ParticlesComponent
                            svgs={["/words/ENGINEER2.svg"]}
                            style={{
                                borderColor: "rgba(94, 234, 212, 0.45)",
                                color: "rgba(191, 219, 254, 0.95)"
                            }}
                        />
                        <div
                            style={{
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                padding: "1.5rem",
                                textAlign: "center",
                                color: "rgba(223, 236, 255, 0.88)",
                                backdropFilter: "blur(1px)",
                            }}
                        >
                        </div>
                    </div>
                </Section>
            </main>
        </div >
    );
}
