"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { softCardStyle } from "./styles";

const resumeLinks = {
    download: "/Yengner_Bermudez_Resume.pdf",
    view: "/Yengner_Bermudez_Resume.pdf",
};

const highlights = [
    "Shipped type-safe Next.js 15 APIs on OCI with CI/CD, validation, and rate-limiting",
    "Built ETL to normalize ads data (Meta Graph API) into Supabase with daily/weekly rollups",
    "Created CodeAtlas backend: GitHub App → ADK graph → React Flow visualization; led SHPE outreach & mentorship",
];


export default function ResumeSection() {
    return (
        <Section
            id="resume"
            title="Resume"
            description="Grab the latest copy or skim the highlights without leaving the page."
        >
            <div
                style={{
                    ...softCardStyle,
                    display: "grid",
                    gap: "1.6rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    alignItems: "center",
                }}
            >
                <Stack gap="md">
                    <Text style={{ color: "var(--text)", lineHeight: 1.6 }}>
                        I update my resume each sprint with the latest projects, leadership impact, and the stack shaping my work.
                        Download a PDF for quick sharing or open the live preview on your device.
                    </Text>
                    <div style={{ display: "grid", gap: "0.75rem" }}>
                        {highlights.map((point) => (
                            <div key={point} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                <span
                                    aria-hidden
                                    style={{
                                        marginTop: "0.45rem",
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "var(--grad-mauve-accent)",
                                        boxShadow: "0 0 12px rgba(14, 165, 233, 0.35)",
                                        flexShrink: 0,
                                    }}
                                />
                                <Text style={{ color: "var(--text)", lineHeight: 1.55 }}>{point}</Text>
                            </div>
                        ))}
                    </div>
                    <Group gap="md">
                        <Button
                            component="a"
                            href={resumeLinks.download}
                            download
                            radius="xl"
                            size="md"
                            variant="filled"
                            color="dark"
                            styles={{
                                root: {
                                    background: 'var(--grad-mauve-accent)',
                                    color: 'var(--foreground)',
                                    border: '1px solid var(--card-border)',
                                },
                            }}
                        >
                            Download PDF
                        </Button>
                        <Button
                            component="a"
                            href={resumeLinks.view}
                            target="_blank"
                            rel="noopener noreferrer"
                            radius="xl"
                            size="md"
                            variant="outline"
                            color="gray"
                            styles={{
                                root: {
                                    borderColor: 'var(--card-border)',
                                    color: 'var(--text-strong)',
                                    background: 'var(--surface-1)',
                                },
                            }}
                        >
                            View online
                        </Button>
                    </Group>
                </Stack>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "3 / 4",
                        borderRadius: 20,
                        border: "1px solid var(--card-border)",
                        background: "var(--grad-mauve-mist)",
                        boxShadow: "var(--shadow-strong)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.6rem",
                    }}
                >
                    <iframe
                        src="/Yengner_Bermudez_Resume.pdf#view=FitH"
                        title="Resume preview"
                        style={{ width: "100%", height: "100%", border: "none", borderRadius: 12, background: "var(--surface-1)" }}
                    />
                </div>
            </div>
        </Section>
    );
}
