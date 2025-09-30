"use client";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        fullScreen: { enable: true, zIndex: -5 },
        // background: { color: "#ffffff" },
        fpsLimit: 60,
        particles: {
            number: { value: 420, density: { enable: true, area: 900 } },
            size: { value: { min: 0.6, max: 1.8 } },
            opacity: { value: { min: 0.12, max: 0.42 } },
            move: { enable: true, speed: { min: 0.25, max: 0.85 }, outModes: { default: "out" } },
            color: { value: "#7C717E" },
            links: { enable: true, distance: 95, opacity: 0.22, width: 0.45, color: "#4fb5ff" },
        },
        detectRetina: true,
    }), []);

    if (!ready) return null;
    return <Particles id="bg-particles" options={options} style={{ pointerEvents: "none" }} />;
}
