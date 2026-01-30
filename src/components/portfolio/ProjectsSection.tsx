"use client";

import { Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import StackBadges from "../StackBadges";
import GitHubRightRail from "../GitHubRightRail";
import { softCardStyle } from "./styles";



export default function ProjectsSection() {
    return (
        <Section
            id="me"
            title="Stack & GitHub"
            description="Modern full-stack tooling with a backend-first mindset and polished UI delivery."
        >
            <Stack gap="3rem">
                <div
                    style={{
                        display: "grid",
                        gap: "1.6rem",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        alignItems: "start",
                    }}
                >
                    <div
                        style={{
                            ...softCardStyle,
                            display: "grid",
                            gap: "1rem",
                        }}
                    >
                        <div style={{ display: "grid", gap: "0.4rem" }}>
                            <Text style={{ color: "var(--text-strong)", fontWeight: 700, letterSpacing: "0.06em" }}>
                                Toolbox
                            </Text>
                            <Text style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                Type-safe APIs, orchestration, and data stacks that ship fast while staying reliable.
                            </Text>
                        </div>
                        <StackBadges />
                    </div>

                    <GitHubRightRail />
                </div>
            </Stack>
        </Section>
    );
}
