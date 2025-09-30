"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { badgeChipStyle, glassCardStyle, projectCardStyle } from "./styles";
import { GitHubStatsCard } from "../GitHubStatsCards";
import StackBadges from "../StackBadges";
import ProjectForceGraph2D from "../ProjectForceGraph2D";
import GitHubRightRail from "../GitHubRightRail";



export default function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects & GitHub"
        >
            <Stack gap="8rem">
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.4rem",
                        alignItems: "stretch",
                    }}
                >
                    <div
                        style={{
                            flex: "1 1 360px",
                            minWidth: 280,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <StackBadges />


                    </div>

                    <div
                        style={{
                            flex: "1 1 400px",
                            minWidth: 260,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <GitHubRightRail />
                    </div>
                </div>

            </Stack>
        </Section>
    );
}
