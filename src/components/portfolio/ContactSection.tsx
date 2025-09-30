"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Section } from "../utils";
import { softCardStyle } from "./styles";
import SocialLinks from "../SocialLinks";

export default function ContactSection() {
    const [emailModalOpen, emailModal] = useDisclosure(false);

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
                            onClick={emailModal.open}
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

            <Modal
                opened={emailModalOpen}
                onClose={emailModal.close}
                title="Reach out"
                centered
                radius="lg"
                overlayProps={{ blur: 6, opacity: 0.35 }}
                styles={{
                    header: { borderBottom: "1px solid var(--text-subtle)" },
                    title: { color: "var(--text-strong)", fontWeight: 600 },
                    content: {
                        background: "var(--grad-mauve-mist)",
                        border: "1px solid var(--text-subtle)",
                        boxShadow: "0 24px 48px rgba(60, 50, 66, 0.18)",
                    },
                }}
            >
                <Stack gap="sm" maw={360}>
                    <Text style={{ color: "var(--text)" }}>
                        Personal: <strong>yengnerb475@gmail.com</strong>
                    </Text>
                    <Text style={{ color: "var(--text)" }}>
                        School: <strong>yengnerb@usf.edu</strong>
                    </Text>
                </Stack>
            </Modal>
        </Section>
    );
}
