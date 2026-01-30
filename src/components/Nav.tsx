import { CSSProperties } from "react";

const topLinks = [
    { href: "#me", label: "Stack" },
    { href: "#backend", label: "Backend" },
    { href: "#featured-projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
];

const TOP_NAV_STYLE: CSSProperties = {
    position: "absolute",
    top: "2.5rem",
    left: "50%",
    transform: "translate(-50%, -12px)",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1.2rem",
    padding: "0.6rem 1.2rem",
    borderRadius: 999,
    background: "var(--grad-mauve-mist)",
    border: "1px solid var(--card-border)",
    boxShadow: "var(--shadow-strong)",
    backdropFilter: "blur(10px)",
    opacity: 0,
    animation: "nav-fade 1.9s ease 1.2s forwards",
    zIndex: 5,
};

const TOP_NAV_LINK_STYLE: CSSProperties = {
    color: "var(--text-strong)",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "color 0.25s ease",
};

export default function Nav() {
    return (
        <nav style={TOP_NAV_STYLE} className="hero-nav" aria-label="Primary">
            {topLinks.map((link) => (
                <a key={link.href} href={link.href} style={TOP_NAV_LINK_STYLE}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
}
