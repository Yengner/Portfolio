"use client";

import { GitHubStatsCard } from "./GitHubStatsCards";
import { Text } from "@mantine/core";

export default function GitHubRightRail() {
    return (
        <div
            style={{
                display: "grid",
                gap: "1.6rem",
                color: "var(--text)",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gap: "0.65rem",
                    padding: "1.25rem",
                    borderRadius: 18,
                    border: "1px solid var(--card-border)",
                    background: "var(--grad-mauve-mist)",
                    boxShadow: "var(--shadow-soft)",
                }}
            >
                <Text style={{ color: "var(--text-strong)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    GitHub snapshot
                </Text>
                <Text style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Quick glance at stats and language mix across recent work.
                </Text>
                <GitHubStatsCard variant="stats" style={{ width: "100%" }} />
            </div>
            <div
                style={{
                    display: "grid",
                    gap: "0.65rem",
                    padding: "1.25rem",
                    borderRadius: 18,
                    border: "1px solid var(--card-border)",
                    background: "var(--grad-plum-veil)",
                    boxShadow: "var(--shadow-soft)",
                }}
            >
                <Text style={{ color: "var(--text-strong)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    Languages
                </Text>
                <GitHubStatsCard variant="top-langs" style={{ width: "100%" }} />
            </div>
        </div>
    );
}
