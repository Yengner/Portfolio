"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

type SocialLink = {
    label: string;
    href: string;
    icon: typeof SiGithub | typeof FaLinkedin;
    color: string;
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
    },
];

export default function SocialLinks({ orientation = "horizontal", compact = false }: SocialLinksProps) {
    const dirStyle: CSSProperties =
        orientation === "vertical"
            ? { display: "grid", gap: "0.7rem" }
            : { display: "flex", flexWrap: "wrap", gap: "0.7rem", justifyContent: "center" };

    return (
        <div style={dirStyle}>
            {socialLinks.map((social, index) => (
                <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: compact ? "0.4rem" : "0.65rem",
                        padding: 0,
                        color: "rgba(227, 239, 255, 0.86)",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
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
            ))}
        </div>
    );
}
