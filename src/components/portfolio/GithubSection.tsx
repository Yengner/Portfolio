"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import ParticlesComponent from "../ParticlesComponent";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";

const stats = [
    { label: "Public repositories", value: "42" },
    { label: "Contributions (last year)", value: "1,136" },
    { label: "Followers", value: "320" },
];

const spotlightRepos = [
    {
        name: "r3f-particle-lab",
        description: "React Three Fibre sandbox with modular particle systems for hero animations.",
        link: "https://github.com/yourname/r3f-particle-lab",
    },
    {
        name: "ignite-ci",
        description: "Reusable GitHub Action workflows for monorepo linting, testing, and preview deployments.",
        link: "https://github.com/yourname/ignite-ci",
    },
];

export default function GithubSection() {
    return (
        <Section
            id="github"
            title="GitHub"
            description="Open-source experiments and contributions."
        >
            <div style={{ position: "relative" }}>
                {/* <ParticlesComponent
                    svg="/words/ENGINEER2.svg"
                    scale={0.3}
                    style={{
                        position: "absolute",
                        width: 210,
                        height: 210,
                        left: "50%",
                        top: -40,
                        transform: "translateX(-50%)",
                        opacity: 0.18,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                /> */}
                <Stack gap="1.6rem" style={{ position: "relative", zIndex: 1 }}>
                    <Group justify="center" gap="xl">
                        {stats.map((stat) => (
                            <Stack key={stat.label} gap={4} style={{ alignItems: "center" }}>
                                <Text fw={700} style={{ fontSize: "1.6rem", color: "#dceafe" }}>
                                    {stat.value}
                                </Text>
                                <Text style={{ color: "rgba(205, 225, 255, 0.65)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                                    {stat.label}
                                </Text>
                            </Stack>
                        ))}
                    </Group>

                    <Stack gap="sm" style={{ ...glassCardStyle, padding: "1.6rem" }}>
                        <Text fw={600} style={{ color: "#dceafe" }}>
                            Spotlight repositories
                        </Text>
                        {spotlightRepos.map((repo) => (
                            <Stack key={repo.name} gap={2}>
                                <Text fw={600} style={{ color: "rgba(223, 237, 255, 0.92)" }}>
                                    {repo.name}
                                </Text>
                                <Text style={{ color: "rgba(208, 222, 255, 0.78)", lineHeight: 1.5 }}>
                                    {repo.description}
                                </Text>
                                <Button
                                    component="a"
                                    href={repo.link}
                                    variant="subtle"
                                    color="cyan"
                                    size="xs"
                                    style={{ alignSelf: "flex-start" }}
                                >
                                    View on GitHub
                                </Button>
                            </Stack>
                        ))}
                    </Stack>

                    <Group justify="center">
                        <Button
                            component="a"
                            href="https://github.com/yourname"
                            variant="gradient"
                            gradient={{ from: "#60a5fa", to: "#22d3ee", deg: 125 }}
                        >
                            Visit GitHub profile
                        </Button>
                    </Group>
                </Stack>
            </div>
        </Section>
    );
}
