"use client";

import { Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";

const pillars = [
    {
        title: "API Architecture",
        description: "Designing clean, typed APIs with clear contracts and strong security defaults.",
        bullets: ["REST + webhook handlers", "Auth flows with RLS policies", "Schema validation + rate limits"],
        tags: ["Next.js", "TypeScript", "Supabase", "Flask"],
    },
    {
        title: "Data & Pipelines",
        description: "Moving data from external sources into analytics-ready tables.",
        bullets: ["ETL jobs for ad + product data", "Queue-backed workflows", "Rollups for KPIs and reporting"],
        tags: ["Postgres", "Supabase", "n8n", "Python"],
    },
    {
        title: "Infra & Reliability",
        description: "Production-ready services with containerized deployments and resilient uptime.",
        bullets: ["Docker + OCI compute", "Cloudflare tunnels + SSL", "Observability for scheduled jobs"],
        tags: ["Docker", "OCI", "Cloudflare", "GitHub Actions"],
    },
    {
        title: "Automation & Integrations",
        description: "Connecting systems with workflows that keep teams in sync.",
        bullets: ["GitHub App webhooks", "Meta Marketing API syncs", "Scheduled tasks + retries"],
        tags: ["Webhooks", "Edge Functions", "Cron", "Integrations"],
    },
];

const backendSignals = [
    { label: "Auth", value: "RLS + JWT sessions" },
    { label: "Storage", value: "Supabase Storage + signed URLs" },
    { label: "Jobs", value: "Queues, cron, webhook workers" },
    { label: "Ops", value: "Dockerized services + CI/CD" },
];

export default function BackendSystemsSection() {
    return (
        <Section
            id="backend"
            title="Backend Systems"
            description="Backend craftsmanship focused on reliability, clean APIs, and data flows that scale."
        >
            <div style={{ display: "grid", gap: "1.6rem" }}>
                <div
                    style={{
                        display: "grid",
                        gap: "1.4rem",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    }}
                >
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            style={{
                                background: "var(--grad-plum-veil)",
                                border: "1px solid var(--card-border)",
                                borderRadius: 18,
                                padding: "1.4rem",
                                boxShadow: "var(--shadow-soft)",
                                display: "grid",
                                gap: "0.75rem",
                            }}
                        >
                            <Stack gap="xs">
                                <Text style={{ color: "var(--text-strong)", fontWeight: 700 }}>{pillar.title}</Text>
                                <Text style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                    {pillar.description}
                                </Text>
                            </Stack>
                            <ul style={{ margin: 0, paddingLeft: "1rem", color: "var(--text)" }}>
                                {pillar.bullets.map((bullet) => (
                                    <li key={bullet} style={{ marginBottom: "0.35rem", lineHeight: 1.5 }}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <Group gap="xs" style={{ flexWrap: "wrap" }}>
                                {pillar.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "0.25rem 0.6rem",
                                            borderRadius: 999,
                                            background: "var(--grad-lavender-drift)",
                                            border: "1px solid var(--card-border)",
                                            color: "var(--text-strong)",
                                            fontSize: "0.72rem",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </Group>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        display: "grid",
                        gap: "1rem",
                        padding: "1.4rem 1.6rem",
                        borderRadius: 20,
                        border: "1px solid var(--card-border)",
                        background: "var(--grad-mauve-mist)",
                        boxShadow: "var(--shadow-soft)",
                    }}
                >
                    <Text style={{ color: "var(--text-strong)", fontWeight: 700, letterSpacing: "0.06em" }}>
                        Backend focus signals
                    </Text>
                    <div
                        style={{
                            display: "grid",
                            gap: "0.8rem",
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        }}
                    >
                        {backendSignals.map((signal) => (
                            <div
                                key={signal.label}
                                style={{
                                    padding: "0.8rem 1rem",
                                    borderRadius: 14,
                                    border: "1px solid var(--card-border)",
                                    background: "var(--surface-1)",
                                    display: "grid",
                                    gap: "0.35rem",
                                }}
                            >
                                <Text style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.12em" }}>
                                    {signal.label}
                                </Text>
                                <Text style={{ color: "var(--text-strong)", fontWeight: 600 }}>{signal.value}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
