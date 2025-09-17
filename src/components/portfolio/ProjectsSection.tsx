"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { badgeChipStyle, glassCardStyle, projectCardStyle } from "./styles";

const githubStats = [
    { label: "Public repositories", value: "42" },
    { label: "Contributions (last year)", value: "1,136" },
    { label: "Followers", value: "320" },
];

const githubSummary = {
    username: "@yourname",
    profileUrl: "https://github.com/yourname",
    blurb: "Open-source experiments that blend creative coding, performance tooling, and developer experience.",
};

const featuredProjects = [
    {
        title: "Observability Control Tower",
        description:
            "Unified metrics, logging, and alerting with custom visualisations, driving a 40% faster MTTR across 12 product squads.",
        tech: ["Next.js", "Grafana", "Temporal"],
        metrics: [
            { label: "Impact", value: "40% faster MTTR" },
            { label: "Footprint", value: "12 squads onboarded" },
        ],
        primaryCta: { label: "View repository", href: "https://github.com/yourname/observability-tower" },
        secondaryCta: { label: "View dashboard", href: "https://observability.example.com" },
    },
    {
        title: "Realtime Collaboration Canvas",
        description:
            "WebRTC-powered whiteboard with CRDT syncing and 3D particles, keeping distributed design teams in flow with sub-100ms sync.",
        tech: ["React", "WebRTC", "Three.js"],
        metrics: [
            { label: "Latency", value: "<100ms global" },
            { label: "Teams", value: "8 orgs piloting" },
        ],
        primaryCta: { label: "View repository", href: "https://github.com/yourname/collab-canvas" },
        secondaryCta: { label: "Watch demo", href: "https://youtu.be/collab-canvas" },
    },
    {
        title: "Intelligent Deployment Orchestrator",
        description:
            "Policy-aware pipelines spanning AWS and GCP with automated rollback heuristics and live health overlays for release rooms.",
        tech: ["AWS", "GCP", "Terraform"],
        metrics: [
            { label: "Deploy cadence", value: "160+/month" },
            { label: "Rollback reduction", value: "-65% incidents" },
        ],
        primaryCta: { label: "View repository", href: "https://github.com/yourname/deploy-orchestrator" },
        secondaryCta: { label: "Read case study", href: "https://yourname.dev/case-study/deploy-orchestrator" },
    },
];

const statCardStyle = {
    ...glassCardStyle,
    padding: "1.6rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.6rem",
    alignItems: "flex-start",
};

export default function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects & GitHub"
            description="A snapshot of the GitHub momentum powering my favourite builds."
        >
            <Stack gap="2.4rem">
                <div
                    style={{
                        display: "grid",
                        gap: "1.2rem",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    }}
                >
                    <div style={statCardStyle}>
                        <Text style={{ color: "rgba(220, 234, 254, 0.92)", fontSize: "1rem", letterSpacing: "0.08em" }}>
                            GitHub snapshot
                        </Text>
                        <Stack gap="0.8rem">
                            {githubStats.map((stat) => (
                                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                                    <Text style={{ color: "#dceafe", fontSize: "1.45rem", fontWeight: 600 }}>
                                        {stat.value}
                                    </Text>
                                    <Text style={{ color: "rgba(205, 225, 255, 0.68)", fontSize: "0.82rem", letterSpacing: "0.06em" }}>
                                        {stat.label}
                                    </Text>
                                </div>
                            ))}
                        </Stack>
                    </div>

                    <div
                        style={{
                            ...glassCardStyle,
                            padding: "1.6rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.9rem",
                            justifyContent: "space-between",
                        }}
                    >
                        <Stack gap="0.4rem">
                            <Text style={{ color: "rgba(223, 238, 255, 0.92)", fontSize: "1.1rem", fontWeight: 600 }}>
                                Featured repos & builds
                            </Text>
                            <Text style={{ color: "rgba(205, 224, 255, 0.75)", lineHeight: 1.6 }}>
                                {githubSummary.blurb}
                            </Text>
                        </Stack>
                        <Group gap="0.6rem">
                            <Button
                                component="a"
                                href={githubSummary.profileUrl}
                                variant="gradient"
                                gradient={{ from: "#60a5fa", to: "#22d3ee", deg: 125 }}
                                size="sm"
                            >
                                Visit {githubSummary.username}
                            </Button>
                            <Button component="a" href="#contact" variant="subtle" color="blue.1" size="sm">
                                Start a project
                            </Button>
                        </Group>
                    </div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.8rem",
                    }}
                >
                    {featuredProjects.map((project) => (
                        <div key={project.title} style={projectCardStyle}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.6rem" }}>
                                <Text fw={600} style={{ color: "#dceafe", fontSize: "1.2rem" }}>
                                    {project.title}
                                </Text>
                                <span
                                    aria-hidden
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                                        boxShadow: "0 0 16px rgba(96, 165, 250, 0.55)",
                                    }}
                                />
                            </div>
                            <Text style={{ color: "rgba(220, 236, 255, 0.78)", lineHeight: 1.6 }}>
                                {project.description}
                            </Text>
                            <Group gap="xs">
                                {project.tech.map((badge) => (
                                    <span key={badge} style={badgeChipStyle}>
                                        {badge}
                                    </span>
                                ))}
                            </Group>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                                {project.metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        style={{
                                            padding: "0.45rem 0.75rem",
                                            borderRadius: 12,
                                            border: "1px solid rgba(96, 205, 255, 0.28)",
                                            background: "rgba(14, 24, 48, 0.55)",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.1rem",
                                        }}
                                    >
                                        <Text style={{ color: "rgba(197, 218, 255, 0.65)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                                            {metric.label}
                                        </Text>
                                        <Text style={{ color: "rgba(227, 239, 255, 0.9)", fontWeight: 600 }}>
                                            {metric.value}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                            <Group gap="xs">
                                <Button
                                    component="a"
                                    href={project.primaryCta.href}
                                    size="sm"
                                    radius="xl"
                                    variant="light"
                                    color="cyan"
                                >
                                    {project.primaryCta.label}
                                </Button>
                                {project.secondaryCta && (
                                    <Button
                                        component="a"
                                        href={project.secondaryCta.href}
                                        size="sm"
                                        variant="subtle"
                                        color="blue.1"
                                    >
                                        {project.secondaryCta.label}
                                    </Button>
                                )}
                            </Group>
                        </div>
                    ))}
                </div>
            </Stack>
        </Section>
    );
}
