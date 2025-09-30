"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type SocialLink = {
    label: string;
    href: string;
    icon: typeof SiGithub | typeof FaLinkedin;
    color: string;
    openModal?: boolean;
};

type SocialLinksProps = {
    orientation?: "horizontal" | "vertical";
    compact?: boolean;
};

const socialLinks: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/Yengner",
        icon: SiGithub,
        color: "#0f172a",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yengner-bermudez",
        icon: FaLinkedin,
        color: "#0a3871",
    },
    {
        label: "Email",
        href: "mailto:yengnerb475@gmail.com",
        icon: SiGmail,
        color: "#0b1d34",
        openModal: true,
    },
];

export default function SocialLinks({ orientation = "horizontal", compact = false }: SocialLinksProps) {
    const dirStyle: CSSProperties =
        orientation === "vertical"
            ? { display: "grid", gap: "0.7rem" }
            : { display: "flex", flexWrap: "wrap", gap: "0.7rem", justifyContent: "center" };
    const [emailModalOpen, emailModal] = useDisclosure(false);
    return (
        <div style={dirStyle}>
            {socialLinks.map((social, index) => {
                const sharedStyle: CSSProperties = {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: compact ? "0.4rem" : "0.65rem",
                    padding: 0,
                    color: "rgba(227, 239, 255, 0.86)",
                    fontWeight: 600,
                    textDecoration: "none",
                };

                if (social.openModal) {
                    return (
                        <motion.button
                            key={social.label}
                            type="button"
                            onClick={emailModal.open}
                            style={{
                                ...sharedStyle,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                            }}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 0.8, y: -5 }}
                            transition={{ delay: 2 * index, duration: 5, ease: "easeOut" }}
                            whileHover={{ y: -2, scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label="Email"
                        >
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                                <social.icon size={compact ? 18 : 35} color={social.color} />
                            </span>
                        </motion.button>
                    );
                }

                return (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={sharedStyle}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 0.8, y: -5 }}
                        transition={{ delay: 2 * index, duration: 5, ease: "easeOut" }}
                        whileHover={{ y: -2, scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <social.icon size={compact ? 18 : 35} color={social.color} />
                        </span>
                    </motion.a>
                );
            })}
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
        </div>
    );
}
