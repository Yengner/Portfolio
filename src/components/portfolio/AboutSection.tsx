"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { accentTextStyle, cardTextStyle, glassCardStyle } from "./styles";
import USFParticles from "../ParticlesComponent";

const universityInfo = {
    name: "University of South Florida",
    subtitle: "B.C.S. Computer Science · Class of 2026 · GPA 3.6/4.0",
};

// Incase i want to add more columns later
const academicColumns = [
    {
        items: [
            { label: "Focus", value: "Backend • Data/ML • Cloud" },
            { label: "Leadership", value: "SHPE External Director" },
        ],
    },
];

export default function AboutSection() {
    return (
        <>
            <Section
                id="about"
                title="Education"
            // description="Interactive front-end developer blending design and code."
            >
                {/* <USFParticles
                    svg="/words/USF.svg"
                    scale={0.5}
                    width={640}
                    height={500}
                    style={{
                        pointerEvents: "none",
                        zIndex: 0,
                        width: "100%",
                        maxWidth: 520,
                    }}
                    color="#006747"
                /> */}
                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            ...glassCardStyle,
                            // background: "rgba(186, 186, 186, 0.55)",
                            position: "relative",
                            zIndex: 1,
                            display: "grid",
                            gap: "1.8rem",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0.5rem",
                                minHeight: 200,
                            }}
                        >
                            <USFParticles
                                svg="/words/USF.svg"
                                scale={0.7}
                                width={540}
                                height={200}
                                style={{
                                    pointerEvents: "none",
                                    zIndex: 0,
                                    width: "100%",
                                    maxWidth: 520,
                                }}
                                color="#006747"
                            />
                        </div>

                        <Stack gap="lg">
                            <Stack gap="xs">
                                <Text style={{ color: "rgba(220, 234, 254, 0.92)", fontSize: "1.1rem", fontWeight: 600 }}>
                                    {universityInfo.name}
                                </Text>
                                <Text style={{ color: "rgba(204, 226, 255, 0.7)", letterSpacing: "0.06em", fontSize: "0.85rem" }}>
                                    {universityInfo.subtitle}
                                </Text>
                            </Stack>

                            <div
                                style={{
                                    display: "grid",
                                    gap: "1rem",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                }}
                            >
                                {academicColumns.map((column) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.6rem",
                                            background: "rgba(11, 24, 48, 0.45)",
                                            border: "1px solid rgba(120, 198, 255, 0.25)",
                                            borderRadius: 14,
                                            padding: "1rem 1.1rem",
                                        }}
                                    >
                                        {/* <Text style={{ color: "rgba(204, 226, 255, 0.72)", fontSize: "0.78rem", letterSpacing: "0.1em" }}>
                                            {column.title}
                                        </Text> */}
                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            {column.items.map((item) => (
                                                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                                                    <Text style={{ color: "rgba(197, 218, 255, 0.65)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                                        {item.label}
                                                    </Text>
                                                    <Text style={{ color: "rgba(227, 239, 255, 0.92)", fontWeight: 600 }}>
                                                        {item.value}
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

{/* 
                            <Group justify="flex-start" gap="md" mt="sm">
                                <Button
                                    component="a"
                                    href="#skills"
                                    variant="gradient"
                                    gradient={{ from: "#60a5fa", to: "#22d3ee", deg: 125 }}
                                >
                                    View skills
                                </Button>
                            </Group> */}
                        </Stack>
                    </div>
                </div>
            </Section>
        </>
    );
}
