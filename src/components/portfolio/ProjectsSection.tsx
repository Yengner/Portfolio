"use client";

import { Stack } from "@mantine/core";
import { Section } from "../utils";
import StackBadges from "../StackBadges";
import GitHubRightRail from "../GitHubRightRail";



export default function ProjectsSection() {
    return (
        <Section
            id="me"
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
