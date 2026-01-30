import type { CSSProperties } from "react";

export const softCardStyle: React.CSSProperties = {
    background: "var(--grad-mauve-mist)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid var(--card-border)",
    borderRadius: 16,
    padding: "1.5rem",
    boxShadow: "var(--shadow-soft)",
};
export const softCardHover: React.CSSProperties = {
    boxShadow: "var(--shadow-strong)",
    transform: "translateY(-1px)",
};


export const cardTextStyle: CSSProperties = {
    color: "var(--text-muted)",
    fontWeight: 400,
};

export const accentTextStyle: CSSProperties = {
    color: "var(--text-strong)",
};

export const projectCardStyle: CSSProperties = {
    background: "var(--grad-mauve-mist)",
    border: "1px solid var(--card-border)",
    borderRadius: 22,
    padding: "1.8rem",
    boxShadow: "var(--shadow-soft)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

export const badgeChipStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.65rem",
    borderRadius: 999,
    background: "var(--grad-lavender-drift)",
    color: "var(--text-strong)",
    fontSize: "0.75rem",
    letterSpacing: "0.04em",
    border: "1px solid var(--card-border)",
};

export const timelineItemStyle: CSSProperties = {
    background: "var(--grad-plum-veil)",
    border: "1px solid var(--card-border)",
    borderRadius: 18,
    padding: "1.4rem 1.6rem",
    boxShadow: "var(--shadow-soft)",
};

export const processCardStyle: CSSProperties = {
    background: "var(--grad-plum-veil)",
    border: "1px solid var(--card-border)",
    borderRadius: 20,
    padding: "1.5rem",
    boxShadow: "var(--shadow-soft)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
};

export const skillCardStyle: CSSProperties = {
    background: "var(--grad-mauve-mist)",
    borderRadius: 18,
    border: "1px solid var(--card-border)",
    padding: "1.4rem",
    boxShadow: "var(--shadow-soft)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
};

export const sectionGridStyle: CSSProperties = {
    display: "grid",
    gap: "1.6rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};
