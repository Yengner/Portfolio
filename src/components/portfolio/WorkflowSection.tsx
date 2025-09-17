"use client";

import { Text } from "@mantine/core";
import ParticlesComponent from "../ParticlesComponent";
import { Section } from "../utils";
import { processCardStyle } from "./styles";

const process = [
    {
        heading: "Discover & Align",
        body: "Product goals, user stories, and success metrics are captured early so every iteration solves a tangible need.",
    },
    {
        heading: "Build & Instrument",
        body: "Type-safe APIs, resilient pipelines, and end-to-end telemetry ensure releases are measurable and maintainable.",
    },
    {
        heading: "Evolve & Scale",
        body: "Experimentation, A/B testing, and progressive enhancement keep experiences fast and inclusive across devices.",
    },
];

export default function WorkflowSection() {
    return (
        <Section
            id="workflow"
            title="Workflow"
            description="A lifecycle that balances research, delivery, and iteration."
        >
            <div style={{ position: "relative", padding: "0.6rem 0" }}>
                {/* <ParticlesComponent
                    svg="/words/ENGINEER2.svg"
                    scale={0.28}
                    style={{
                        position: "absolute",
                        width: 220,
                        height: 220,
                        left: -120,
                        top: "50%",
                        transform: "translate(-10%, -50%)",
                        opacity: 0.18,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                /> */}
                {/* <ParticlesComponent
                    svg="/words/ENGINEER2.svg"
                    scale={0.24}
                    style={{
                        position: "absolute",
                        width: 160,
                        height: 160,
                        right: -90,
                        top: "30%",
                        transform: "translate(10%, -30%)",
                        opacity: 0.12,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                /> */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1.4rem",
                    }}
                >
                    {process.map((item) => (
                        <div key={item.heading} style={processCardStyle}>
                            <Text fw={600} style={{ color: "#dceafe", fontSize: "1.05rem" }}>
                                {item.heading}
                            </Text>
                            <Text style={{ color: "rgba(211, 228, 255, 0.78)", lineHeight: 1.6 }}>
                                {item.body}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
