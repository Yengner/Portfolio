import type { CSSProperties } from "react";

export const softCardStyle: React.CSSProperties = {
    background: "linear-gradient(180deg, #FFFFFF 0%, #F6F4F8 100%)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.55)",
    outline: "1px solid rgba(15,23,42,0.08)",
    borderRadius: 16,
    padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
};
export const softCardHover: React.CSSProperties = {
    boxShadow:
        "0 2px 6px rgba(16, 24, 40, 0.08), 0 20px 40px rgba(16, 24, 40, 0.10)",
    transform: "translateY(-1px)",
};


export const cardTextStyle: CSSProperties = {
    color: "rgba(228, 238, 255, 0.8)",
    fontWeight: 400,
};

export const accentTextStyle: CSSProperties = {
    color: "rgba(205, 230, 255, 0.96)",
};

export const projectCardStyle: CSSProperties = {

    // border: "1px solid rgba(148, 208, 255, 0.45)",
    // borderRadius: 22,
    padding: "1.8rem",
    // boxShadow: "0 20px 48px rgba(13, 32, 64, 0.32)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // backdropFilter: "blur(2px)",
};

export const badgeChipStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.65rem",
    borderRadius: 999,
    background: "rgba(37, 99, 235, 0.18)",
    color: "rgba(209, 233, 255, 0.85)",
    fontSize: "0.75rem",
    letterSpacing: "0.04em",
    border: "1px solid rgba(96, 165, 250, 0.35)",
};

export const timelineItemStyle: CSSProperties = {
    background: "rgba(15, 23, 42, 0.55)",
    border: "1px solid rgba(148, 197, 255, 0.24)",
    borderRadius: 18,
    padding: "1.4rem 1.6rem",
    boxShadow: "0 20px 48px rgba(10, 18, 36, 0.38)",
};

export const processCardStyle: CSSProperties = {
    background: "linear-gradient(180deg, rgba(15,23,42,0.76) 0%, rgba(18,32,56,0.58) 100%)",
    border: "1px solid rgba(102, 212, 255, 0.28)",
    borderRadius: 20,
    padding: "1.5rem",
    boxShadow: "0 24px 56px rgba(9, 17, 34, 0.42)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
};

export const skillCardStyle: CSSProperties = {
    background: "rgba(10, 18, 36, 0.55)",
    borderRadius: 18,
    border: "1px solid rgba(118, 196, 255, 0.26)",
    padding: "1.4rem",
    boxShadow: "0 24px 52px rgba(8, 16, 32, 0.38)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
};

export const sectionGridStyle: CSSProperties = {
    display: "grid",
    gap: "1.6rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};
