import { CSSProperties } from "react";

const topLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#capabilities", label: "Capabilities" },
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
    gap: "1.8rem",
    padding: "0.65rem 1.6rem",
    borderRadius: 999,
    background: "rgba(9, 17, 36, 0.78)",
    border: "1px solid rgba(148, 197, 255, 0.35)",
    boxShadow: "0 24px 60px rgba(8, 16, 36, 0.45)",
    backdropFilter: "blur(10px)",
    opacity: 0,
    animation: "nav-fade 1.9s ease 1.2s forwards",
    zIndex: 5,
};

const TOP_NAV_LINK_STYLE: CSSProperties = {
    color: "rgba(219, 234, 254, 0.82)",
    fontSize: "0.85rem",
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