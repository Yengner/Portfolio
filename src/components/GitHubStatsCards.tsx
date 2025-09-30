import type { ComponentProps } from "react";

type GitHubStatsVariant = "stats" | "top-langs";

type GitHubStatsCardProps = ComponentProps<"img"> & {
    username?: string;
    variant?: GitHubStatsVariant;
};

const variantConfig: Record<GitHubStatsVariant, { path?: string; defaultWidth: number; defaultHeight: number; params: Record<string, string>; alt: string; }> = {
    stats: {
        defaultWidth: 520,
        defaultHeight: 200,
        params: {
            show_icons: "true",
            hide_border: "true",
            bg_color: "00000000",
            rank_icon: "github",
            hide: "contribs",
        },
        alt: "GitHub stats",
    },
    "top-langs": {
        path: "/top-langs",
        defaultWidth: 440,
        defaultHeight: 220,
        params: {
            layout: "compact",
            hide_border: "true",
            langs_count: "8",
        },
        alt: "Top languages",
    },
};

export function GitHubStatsCard({
    username = "Yengner",
    variant = "stats",
    style,
    ...imgProps
}: GitHubStatsCardProps) {
    const config = variantConfig[variant];
    const searchParams = new URLSearchParams({ username, ...config.params });
    const src = `https://portfolio-graphics-wine.vercel.app/api${config.path ?? ""}?${searchParams.toString()}`;

    return (
        <img
            src={src}
            alt={`${username}'s ${config.alt}`}
            width={config.defaultWidth}
            height={config.defaultHeight}
            style={{
                width: "100%",
                height: "auto",
                ...style,
            }}
            loading="lazy"
            {...imgProps}
        />
    );
}
