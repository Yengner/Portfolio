"use client";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
    const [ready, setReady] = useState(false);
    const [colors, setColors] = useState({ particle: "#0ea5e9", link: "#14b8a6" });

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    useEffect(() => {
        const updateColors = () => {
            const styles = getComputedStyle(document.documentElement);
            const particle = styles.getPropertyValue("--particles-color").trim();
            const link = styles.getPropertyValue("--particles-link-color").trim();
            setColors({
                particle: particle || "#0ea5e9",
                link: link || "#14b8a6",
            });
        };
        updateColors();
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        if (media.addEventListener) {
            media.addEventListener("change", updateColors);
            return () => media.removeEventListener("change", updateColors);
        }
        media.addListener(updateColors);
        return () => media.removeListener(updateColors);
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        fullScreen: { enable: true, zIndex: -5 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
            number: { value: 420, density: { enable: true, area: 900 } },
            size: { value: { min: 0.6, max: 1.8 } },
            opacity: { value: { min: 0.12, max: 0.42 } },
            move: { enable: true, speed: { min: 0.25, max: 0.85 }, outModes: { default: "out" } },
            color: { value: colors.particle },
            links: { enable: true, distance: 95, opacity: 0.22, width: 0.45, color: colors.link },
        },
        detectRetina: true,
    }), [colors]);

    if (!ready) return null;
    return <Particles id="bg-particles" options={options} style={{ pointerEvents: "none" }} />;
}
