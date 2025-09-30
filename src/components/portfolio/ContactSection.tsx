"use client";

import { Button, Group, Stack, Text } from "@mantine/core";
import { Section } from "../utils";
import { softCardStyle } from "./styles";
import SocialLinks from "../SocialLinks";

export default function ContactSection() {
    return (
        <Section
            id="contact"
            title="Let's work together"
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
                <Stack gap="md" style={{ ...softCardStyle, position: "relative", zIndex: 1, textAlign: "center" }}>
                    <Stack gap="md" align="center">
                        <Text style={{ color: "var(--text)", lineHeight: 1.6 }}>
                            Drop a note about your next project or reach out for coffee chats. I enjoy pairing typed APIs,
                            data, and resilient infra to craft thoughtful products.
                        </Text>
                        <SocialLinks compact orientation="horizontal" />
                    </Stack>
                    <Group justify="center" gap="md">
                        <Button
                            component="a"
                            href="mailto:yengnerb475@gmail.com"
                            size="md"
                            radius="xl"
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
                            Email me
                        </Button>
                        <Button
                            component="a"
                            href="https://calendly.com/yengnerb-usf/30min"
                            size="md"
                            radius="xl"
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
                            Book a call
                        </Button>
                    </Group>
                </Stack>
            </div>
        </Section>
    );
}
