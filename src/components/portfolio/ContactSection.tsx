"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import ParticlesComponent from "../ParticlesComponent";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";

export default function ContactSection() {
    return (
        <Section
            id="contact"
            title="Let’s work together"
            description="Available for internships, freelance collaborations, and full-time roles."
        >
            <div style={{ position: "relative" }}>
                {/* <ParticlesComponent
                    svg="/words/ENGINEER2.svg"
                    scale={0.3}
                    style={{
                        position: "absolute",
                        width: 200,
                        height: 200,
                        left: -80,
                        bottom: -60,
                        opacity: 0.2,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                /> */}
                <Stack gap="md" style={{ ...glassCardStyle, position: "relative", zIndex: 1, textAlign: "center" }}>
                    <Text style={{ color: "rgba(223, 236, 255, 0.84)", lineHeight: 1.6 }}>
                        Drop a note about your next project or feel free to reach out for coffee chats.
                        I enjoy pairing programming, design systems, and data to craft thoughtful products.
                    </Text>
                    <Group justify="center" gap="md">
                        <Button component="a" href="mailto:hello@yengner.dev" size="md" radius="xl" variant="gradient"
                            gradient={{ from: "#22d3ee", to: "#60a5fa", deg: 135 }}
                        >
                            Email me
                        </Button>
                        <Button component="a" href="https://cal.com/yourname/30min" size="md" radius="xl" variant="outline" color="blue.2"
                            style={{ borderColor: "rgba(96, 165, 250, 0.45)", color: "rgba(192, 224, 255, 0.92)" }}
                        >
                            Book a call
                        </Button>
                    </Group>
                </Stack>
            </div>
        </Section>
    );
}
