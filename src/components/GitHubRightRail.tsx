"use client";

import React from "react";
import { GitHubStatsCard } from "./GitHubStatsCards";
import { Text } from "@mantine/core";

type PinProps = { username: string; repo: string };

function PinnedRepoCard({ username, repo }: PinProps) {
    const base = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&hide_border=true`;
    const light = `${base}`;
    const dark = `${base}&theme=tokyonight`;

    return (
        <a
            href={`https://github.com/${username}/${repo}`}
            target="_blank"
            rel="noreferrer"
            style={{
                display: "block",
                borderRadius: 14,
                border: "1px solid var(--text-subtle)",
                overflow: "hidden",
                boxShadow: "0 16px 38px rgba(60, 50, 66, 0.18)",
                background: "var(--grad-plum-veil)",
            }}
        >
            <picture>
                <source srcSet={dark} media="(prefers-color-scheme: dark)" />
                <img
                    src={light}
                    alt={`${repo} pinned card`}
                    style={{ width: "100%", display: "block" }}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 320px"
                />
            </picture>
        </a>
    );
}

export default function GitHubRightRail() {
    const username = "yengner";

    // Put the repos you want to showcase here (6–8 to fill 2x3 / 2x4 nicely)
    const pinned: string[] = [
        "DeepVisor",
        "FloorPlan-Project",
        "desi-discipline",
        "CIDB-Scraper",
        "CapitalBlend",
        "detectron2_cars",
        // "Another-Repo", "One-More-Repo"
    ];

    return (
        <div
            style={{
                display: "grid",
                gap: "2rem",
                color: "var(--text)",
            }}
        >
            {/* Stats at the top */}
            <GitHubStatsCard variant="stats" style={{ width: "100%" }} />
            <Text style={{ color: "var(--text-strong)" }}>
                <strong>Pinned Repositories</strong>
            </Text>
            {/* Pinned repo grid (2 columns on desktop, 1 on small screens) */}
            <div
                style={{

                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    color: "inherit",
                }}
            >

                {pinned.slice(0, 8).map((repo) => (
                    <PinnedRepoCard key={repo} username={username} repo={repo} />
                ))}
            </div>
        </div>
    );
}
