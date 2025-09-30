import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { Button, Group, Stack, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Section } from "../utils";
import { projectCardStyle } from "./styles";

type ProjectLink = {
    label: string;
    href: string;
    variant?: "light" | "subtle" | "outline";
    color?: string;
};

type FeaturedProject = {
    title: string;
    description: string;
    tech: string[];
    highlights?: string[];
    links: ProjectLink[];
    image?: {
        alt?: string;
        light?: string;
        dark?: string;
        src?: string;
    };
};

const featuredProjects: FeaturedProject[] = [
    {
        title: "DeepVisor",
        description:
            "SaaS analytics toolkit in development with typed Next.js 15 APIs, Supabase/Postgres persistence, and OCI-hosted Docker infra.",
        tech: ["Next.js 15", "TypeScript", "Supabase", "Docker Compose", "OCI"],
        links: [
            { label: "GitHub", href: "https://github.com/Yengner/DeepVisor", variant: "light", color: "cyan" },
            { label: "Live demo", href: "https://www.deepvisor.com", variant: "subtle", color: "blue.3" },
        ],
        image: {
            alt: "DeepVisor dashboard preview",
            // Use whichever you have:
            light: "/DeepVisor.png",
            dark: "/DeepVisor.png",
            // or just: src: "/images/deepvisor.jpg"
        },
    },
    {
        title: "FloorPlan Project",
        description:
            ".NET WinForms tool that visualises Tampa market data with interactive overlays and agent-ready exports.",
        tech: ["C#", ".NET", "WinForms", "SQL", "CSV", "API"],
        // highlights: [
        //     "Custom layout engine renders multi-level floor plans",
        //     "Local caching keeps listings available offline in class",
        //     "CSV import/export flow for rapid scenario planning",
        // ],
        links: [
            { label: "GitHub", href: "https://github.com/Yengner/FloorPlan-Project", variant: "light", color: "cyan" },
            { label: "Live demo", href: "https://www.deepvisor.com", variant: "subtle", color: "blue.3" },

        ],

        image: {
            alt: "DeepVisor dashboard preview",
            // Use whichever you have:
            light: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
            dark: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
            // or just: src: "/images/deepvisor.jpg"
        },
    },
    {
        title: "Portfolio v4",
        description:
            "This interactive Next.js portfolio pairs Mantine UI with framer-motion and particle backdrops for a responsive showcase.",
        tech: ["Next.js 15", "Mantine", "TypeScript", "Framer Motion"],
        // highlights: [
        //     "Server components + client transitions for snappy UX",
        //     "Reusable design tokens keep sections visually consistent",
        //     "GitHub integrations stream live stats, stack shields, and CTAs",
        // ],
        links: [{ label: "Source", href: "https://github.com/Yengner/my-portfolio", variant: "light", color: "cyan" }],
        image: {
            alt: "DeepVisor dashboard preview",
            // Use whichever you have:
            light: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
            dark: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
            // or just: src: "/images/deepvisor.jpg"
        },
    },
];


export default function FeaturedProjects() {
    return (
        <Section
            id="featured-projects"
            title="Featured Projects"
        >
            <Carousel
                withIndicators
                controlSize={46}
                height="100%"
                slideSize="100%"
                styles={{
                    indicator: {
                        width: 12,
                        height: 12,
                        borderRadius: 12,
                        border: "1px solid rgba(120, 198, 255, 0.45)",
                        background: "rgba(17, 30, 55, 0.6)",
                        transition: "all 160ms ease",
                    },
                    // indicatorActive: {
                    //     background: "linear-gradient(135deg, #7dd3fc, #22d3ee)",
                    //     width: 28,
                    //     border: "none",
                    // },
                    control: {
                        color: "#0b172f",
                        background: "rgba(224, 244, 255, 0.92)",
                        borderRadius: 999,
                        border: "1px solid rgba(148, 198, 255, 0.3)",
                    },
                }}
            >
                {featuredProjects.map((project) => (
                    <Carousel.Slide key={project.title}>
                        <div
                            style={{
                                ...projectCardStyle,
                                padding: "2.6rem",
                                borderRadius: 26,
                                display: "grid",
                                gridTemplateColumns: "minmax(280px, 1fr) minmax(280px, 1fr)",
                                gap: "1.8rem",
                                alignItems: "center",
                            }}
                        >
                            {project.image && (
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        aspectRatio: "14 / 8",
                                        overflow: "hidden",
                                        borderRadius: 18,
                                        border: "1px solid rgba(96,165,250,0.32)",
                                        background: "linear-gradient(90deg, rgba(14,24,46,0.6), rgba(12,22,44,0.4))",
                                    }}
                                >
                                    <picture>
                                        {project.image.dark && (
                                            <source srcSet={project.image.dark} media="(prefers-color-scheme: dark)" />
                                        )}
                                        {project.image.light && (
                                            <source
                                                srcSet={project.image.light}
                                                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                                            />
                                        )}
                                        <img
                                            src={
                                                project.image.src ||
                                                project.image.light ||
                                                project.image.dark ||
                                                ""
                                            }
                                            alt={project.image.alt ?? `${project.title} preview`}
                                            loading="lazy"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </picture>
                                </div>
                            )}

                            <Stack gap="1.2rem">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                    }}
                                >
                                    <Text fw={600} style={{ color: "black", fontSize: "1.25rem" }}>
                                        {project.title}
                                    </Text>
                                    <span
                                        aria-hidden
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #7dd3fc, #22d3ee)",
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                <Text style={{ color: "gray", lineHeight: 1.7, fontSize: "0.97rem" }}>
                                    {project.description}
                                </Text>

                                <Group gap="xs" style={{ flexWrap: "wrap" }}>
                                    {project.tech.map((badge) => (
                                        <span
                                            key={badge}
                                            style={{
                                                padding: "0.35rem 0.6rem",
                                                borderRadius: 10,
                                                background: "rgba(16,34,64,0.55)",
                                                border: "1px solid rgba(100,200,255,0.25)",
                                                color: "rgba(220,236,255,0.92)",
                                                fontSize: "0.75rem",
                                                letterSpacing: "0.02em",
                                            }}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </Group>

                                <Group gap="xs" style={{ flexWrap: "wrap" }}>
                                    {project.links.map((link) => (
                                        <Button
                                            key={link.href}
                                            component="a"
                                            href={link.href}
                                            size="sm"
                                            radius="xl"
                                            variant={link.variant ?? "light"}
                                            color={link.color ?? "cyan"}
                                            styles={{
                                                root: {
                                                    background:
                                                        link.variant === "subtle"
                                                            ? "transparent"
                                                            : "linear-gradient(135deg, #7dd3fc, #22d3ee)",
                                                    color:
                                                        link.variant === "subtle"
                                                            ? "rgba(214,231,255,0.92)"
                                                            : "#031326",
                                                    border:
                                                        link.variant === "subtle"
                                                            ? "1px solid rgba(120,198,255,0.22)"
                                                            : "none",
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
        </Section>
    );
}
