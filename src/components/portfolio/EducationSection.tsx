"use client";

import { Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";

const education = [
    {
        school: "University of South Florida",
        degree: "B.S. Computer Science",
        period: "2018 – 2022",
        highlights: [
            "Graduated magna cum laude",
            "President · ACM Student Chapter",
            "Capstone: Real-time campus transit tracker",
        ],
    },
];

export default function EducationSection() {
    return (
        <Section
            id="education"
            title="Education"
            description="Academic foundation and campus leadership."
        >
            <Stack gap="1.2rem">
                {education.map((item) => (
                    <Stack key={item.school} gap="sm" style={{ ...glassCardStyle, padding: "1.6rem" }}>
                        <Text fw={600} style={{ color: "#dceafe", fontSize: "1.15rem" }}>
                            {item.school}
                        </Text>
                        <Text style={{ color: "rgba(208, 225, 255, 0.78)" }}>{item.degree}</Text>
                        <Text style={{ color: "rgba(196, 214, 255, 0.7)", letterSpacing: "0.08em", fontSize: "0.85rem" }}>
                            {item.period}
                        </Text>
                        <Stack gap="xs" style={{ marginTop: "0.5rem" }}>
                            {item.highlights.map((highlight) => (
                                <Text key={highlight} style={{ color: "rgba(224, 235, 255, 0.82)" }}>
                                    • {highlight}
                                </Text>
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Section>
    );
}
