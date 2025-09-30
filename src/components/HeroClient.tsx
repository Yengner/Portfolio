"use client";

import HeroNameParticlesR3F from "./HeroNameParticleR3F";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

export default function HeroClient() {
    return (
        <section
            id="hero"
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(5rem, 11vw, 9rem) 1.5rem",
                gap: "clamp(1.4rem, 2.8vw, 2.6rem)",
                color: "#e8f0ff",
                textAlign: "center",
                zIndex: 1,
            }}
        >
            <style>{`
                @keyframes nav-fade { 0% { opacity: 0; transform: translate(-50%, -12px); } 100% { opacity: 1; transform: translate(-50%, 0); } }
                @keyframes hero-belt { 0% { opacity: 0; transform: translateY(16px) scale(0.96); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
                @keyframes hero-cta { 0% { opacity: 0; transform: translateY(18px); } 100% { opacity: 1; transform: translateY(0); } }
                .hero-nav a:hover { color: #ffffff; }
            `}</style>
            <Nav />


            <div
                style={{
                    position: "relative",
                    width: "min(92vw, 1180px)",
                    height: "clamp(260px, 44vw, 520px)",
                    marginTop: "-15vh",
                }}
            >
                <HeroNameParticlesR3F
                    textScale={0.0102}
                    count={26000}
                    bgScatterRadius={125}
                    revealDelayMs={820}
                    revealDurationMs={3700}
                    freeWanderAmp={0.18}
                    freeWanderSpeed={0.22}
                    color="#7C717E"
                />
            </div>

            <div
                style={{
                    marginTop: "-15rem",
                    padding: "0.85rem 1.6rem 0.85rem 1.2rem",
                    background: "transparent",
                    boxShadow: "none",
                    backdropFilter: "none",
                    color: "#7C717E",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    opacity: 0,
                    animation: "hero-belt 1.6s ease 4.6s forwards",
                }}
            >
                {[
                    "Software Engineer",
                    "Student",
                    "Backend Development",
                    "Cloud Operations",
                ].map((label, idx, arr) => (
                    <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem" }}>
                        {idx === 0 && (
                            <span
                                style={{
                                    display: "inline-flex",
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#38bdf8",
                                    boxShadow: "0 0 12px rgba(56, 189, 248, 0.75)",
                                }}
                                aria-hidden="true"
                            />
                        )}
                        <span style={{ whiteSpace: "nowrap" }}>{label}</span>
                        {idx < arr.length - 1 && (
                            <span
                                aria-hidden="true"
                                style={{ fontWeight: 600 }}
                            >
                                /
                            </span>
                        )}
                    </span>
                ))}
            </div>
            {/* 
            <p
                style={{
                    margin: "0 auto",
                    maxWidth: "640px",
                    color: "rgba(227, 235, 255, 0.86)",
                    fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
                    lineHeight: 1.65,
                    textShadow: "0 10px 32px rgba(15, 23, 42, 0.55)",
                }}
            >
                Crafting interactive front-end experiences with React, TypeScript, and cinematic particle systems.
            </p> */}

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.9rem",
                    justifyContent: "center",
                    marginTop: "0.5rem",
                }}
            >
                <a
                    href="/resume.pdf"
                    style={{
                        padding: "0.75rem 1.9rem",
                        borderRadius: 999,
                        // background: "linear-gradient(120deg, #667bff, #22d3ee)",
                        background: "gray",
                        color: "#061024",
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: "0 20px 40px rgba(34, 211, 238, 0.15)",
                        opacity: 0,
                        animation: "hero-cta 1.4s ease 4.4s forwards",
                    }}
                >
                    View résumé
                </a>
                <a
                    href="#projects"
                    style={{
                        padding: "0.75rem 1.9rem",
                        borderRadius: 999,
                        border: "1px solid rgba(102, 212, 255, 0.45)",
                        color: "rgba(212, 232, 255, 0.9)",
                        fontWeight: 500,
                        textDecoration: "none",
                        backdropFilter: "blur(6px)",
                        background: "rgba(9, 17, 36, 0.42)",
                        opacity: 0,
                        animation: "hero-cta 1.4s ease 4.6s forwards",
                    }}
                >
                    Projects
                </a>
            </div>

            <SocialLinks />


        </section>
    );
}
