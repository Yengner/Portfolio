"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { softCardStyle } from "./styles";

const resumeLinks = {
    download: "/Yengner_Bermudez_Resume.pdf",
    view: "/Yengner_Bermudez_Resume.pdf",
};

const highlights = [
    "Type-safe Next.js 15 APIs on OCI — CI/CD, input validation, rate limiting, structured logs",
    "Supabase/Postgres ETL with daily/weekly rollups powering real-time dashboards",
    "GitHub App backend → ADK (Gemini 2.0) graph; React Flow architecture visualization",
  ];

export default function ResumeSection() {
    return (
        <Section
            id="resume"
            title="Résumé"
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
                        I update my résumé each sprint with the latest projects, leadership impact, and the stack shaping my work.
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
                                        boxShadow: "0 0 10px rgba(60, 50, 66, 0.18)",
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
                                    border: '1px solid rgba(60, 50, 66, 0.18)',
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
                                    borderColor: 'var(--text-subtle)',
                                    color: 'var(--text-strong)',
                                    background: 'var(--background)',
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
                        border: "1px solid var(--text-subtle)",
                        background: "var(--grad-mauve-mist)",
                        boxShadow: "0 28px 54px rgba(60, 50, 66, 0.18)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.6rem",
                    }}
                >
                    <iframe
                        src="/Yengner_Bermudez_Resume.pdf#view=FitH"
                        title="Résumé preview"
                        style={{ width: "100%", height: "100%", border: "none", borderRadius: 12, background: "var(--background)" }}
                    />
                </div>
            </div>
        </Section>
    );
}
