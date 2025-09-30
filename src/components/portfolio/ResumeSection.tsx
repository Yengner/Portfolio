"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";

const resumeLinks = {
    download: "/resume.pdf",
    view: "/resume.pdf",
};

const highlights = [
    "Typed Next.js 15 APIs deployed on OCI",
    "Supabase/PostgreSQL analytics pipelines",
    "SHPE leadership and peer mentorship",
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
                    ...glassCardStyle,
                    display: "grid",
                    gap: "1.6rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    alignItems: "center",
                }}
            >
                <Stack gap="md">
                    <Text style={{ color: "rgba(223, 236, 255, 0.86)", lineHeight: 1.6 }}>
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
                                        background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                                        boxShadow: "0 0 12px rgba(96, 165, 250, 0.45)",
                                        flexShrink: 0,
                                    }}
                                />
                                <Text style={{ color: "rgba(206, 224, 255, 0.82)", lineHeight: 1.55 }}>{point}</Text>
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
                            variant="gradient"
                            gradient={{ from: "#22d3ee", to: "#60a5fa", deg: 135 }}
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
                            color="blue.2"
                            style={{ borderColor: "rgba(96, 165, 250, 0.45)", color: "rgba(192, 224, 255, 0.92)" }}
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
                        border: "1px solid rgba(126, 196, 255, 0.35)",
                        background: "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.32), transparent 55%), rgba(10, 18, 36, 0.65)",
                        boxShadow: "0 28px 54px rgba(10, 22, 46, 0.45)",
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
                        style={{ width: "100%", height: "100%", border: "none", borderRadius: 12, background: "rgba(8, 16, 32, 0.85)" }}
                    />
                </div>
            </div>
        </Section>
    );
}
