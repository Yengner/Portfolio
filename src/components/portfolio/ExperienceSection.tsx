"use client";

import { Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { timelineItemStyle } from "./styles";

const timeline = [
    {
        range: "2023 – Present",
        role: "Senior Software Engineer · Nimbus Labs",
        summary:
            "Lead platform efforts for data infrastructure and developer experience, focussing on real-time analytics and distributed tracing.",
    },
    {
        range: "2021 – 2023",
        role: "Full-stack Engineer · Atlas Cloud",
        summary:
            "Shipped onboarding flows, hardened API gateways, and pioneered a shared design system across multi-disciplinary teams.",
    },
    {
        range: "2019 – 2021",
        role: "Software Engineer Co-op · South Florida Tech",
        summary:
            "Built internal dashboards, automated runbooks, and delivered ML-assisted forecasting pilots while completing coursework.",
    },
];

export default function ExperienceSection() {
    return (
        <Section
            id="experience"
            title="Experience"
            description="A timeline of roles and focus areas."
        >
            <Stack gap="lg">
                {timeline.map((item) => (
                    <div key={item.role} style={timelineItemStyle}>
                        <Text fw={600} style={{ color: "#e3ecff", fontSize: "1.05rem" }}>
                            {item.role}
                        </Text>
                        <Text style={{ color: "rgba(196, 214, 255, 0.72)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
                            {item.range}
                        </Text>
                        <Text style={{ color: "rgba(224, 235, 255, 0.78)", lineHeight: 1.6, marginTop: "0.75rem" }}>
                            {item.summary}
                        </Text>
                    </div>
                ))}
            </Stack>
        </Section>
    );
}
