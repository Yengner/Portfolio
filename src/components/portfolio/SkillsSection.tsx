"use client";

import { Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { badgeChipStyle, cardTextStyle, glassCardStyle, skillCardStyle } from "./styles";

const skillBuckets = [
    {
        title: "Languages",
        items: ["TypeScript", "Python", "Go", "SQL", "Rust (learning)"]
    },
    {
        title: "Frameworks",
        items: ["React", "Next.js", "Mantine", "Express", "FastAPI"]
    },
    {
        title: "Tooling",
        items: ["GitHub Actions", "Docker", "Prisma", "Nx", "Vite"]
    },
];

const focusAreas = [
    "Design system implementation",
    "Distributed systems basics",
    "Real-time collaboration",
    "DX and automation",
];

export default function SkillsSection() {
    return (
        <Section
            id="skills"
            title="Skills"
            description="Balanced engineering foundation with emphasis on delightful interfaces."
        >
            <Stack gap="1.6rem">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1.3rem",
                    }}
                >
                    {skillBuckets.map((bucket) => (
                        <div key={bucket.title} style={skillCardStyle}>
                            <Text fw={600} style={{ color: "#dceafe", fontSize: "1.05rem" }}>
                                {bucket.title}
                            </Text>
                            <Stack gap="xs">
                                {bucket.items.map((item) => (
                                    <Group key={item} gap="xs">
                                        <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa" }} />
                                        <Text style={cardTextStyle}>{item}</Text>
                                    </Group>
                                ))}
                            </Stack>
                        </div>
                    ))}
                </div>

                <Stack gap="sm" style={{ ...glassCardStyle, padding: "1.4rem" }}>
                    <Text fw={600} style={{ color: "#dceafe" }}>
                        Focus Areas
                    </Text>
                    <Group gap="sm">
                        {focusAreas.map((area) => (
                            <span key={area} style={badgeChipStyle}>
                                {area}
                            </span>
                        ))}
                    </Group>
                </Stack>
            </Stack>
        </Section>
    );
}
