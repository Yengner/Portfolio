"use client";

import { Stack, Text } from "@mantine/core";
import ParticlesComponent from "../ParticlesComponent";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";

export default function PlaygroundSection() {
    return (
        <Section
            id="playground"
            title="Particle Playground"
            description="Interactive wordmarks rendered with polygon masks. Swap the SVG to experiment with brand treatments."
        >
            <div
                style={{
                    position: "relative",
                    minHeight: 340,
                    borderRadius: 26,
                    border: "1px solid rgba(120, 198, 255, 0.28)",
                    background: "linear-gradient(180deg, rgba(8,14,34,0.65) 0%, rgba(9,18,36,0.85) 100%)",
                    boxShadow: "0 32px 70px rgba(7, 15, 30, 0.6)",
                    overflow: "hidden",
                }}
            >
                <Stack
                    gap="sm"
                    style={{
                        ...glassCardStyle,
                        position: "relative",
                        width: "min(420px, 90%)",
                        margin: "auto",
                        marginTop: "4rem",
                        textAlign: "center",
                        background: "rgba(9, 17, 36, 0.68)",
                    }}
                >
                    <Text fw={600} style={{ color: "#dceafe" }}>
                        Tweak the SVG
                    </Text>
                    <Text style={{ color: "rgba(208, 222, 255, 0.78)", lineHeight: 1.6 }}>
                        Replace the `/words/ENGINEER2.svg` asset with your brand mark or wordmark to morph the particle swarm. Great for hero backdrops, section dividers, or interactive props layered beneath cards.
                    </Text>
                </Stack>
            </div>
        </Section>
    );
}
