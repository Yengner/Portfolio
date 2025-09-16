"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { OutMode, type Container, type Engine, type ISourceOptions } from "@tsparticles/engine";

const DEFAULT_SVGS = ["/words/YENGNER.svg"];

type WordParticlesProps = {
    svgs?: string[];
    className?: string;
    style?: CSSProperties;
};

// timings
const SCATTER_MS = 800;
const HOLD_MS = 1800;

export default function WordParticles({ svgs = DEFAULT_SVGS, className, style }: WordParticlesProps) {
    const [engineReady, setEngineReady] = useState(false);
    const [containerReady, setContainerReady] = useState(false);
    const cRef = useRef<Container>(null);
    const [wordIdx, setWordIdx] = useState(0);

    const svgList = useMemo(() => (svgs && svgs.length ? svgs : DEFAULT_SVGS), [svgs]);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
            await loadPolygonMaskPlugin(engine);
        }).then(() => setEngineReady(true));
    }, []);

    const base: ISourceOptions = useMemo(() => ({
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
            modes: { bubble: { distance: 40, duration: 0.4, size: 6, speed: 3, opacity: 0.8 } },
        },
        particles: {
            number: { value: 220 },                       // fewer than background (subset!)
            size: { value: { min: 0.2, max: 1.6 } },
            opacity: { value: { min: 0.2, max: 0.9 }, animation: { enable: true, speed: 2 } },
            // move: { enable: true, speed: { min: 0.4, max: 1.2 } },
            color: { value: "#ffffff" },
            links: { enable: true, distance: 80, opacity: 0.22, width: 0.6, color: "#ffffff" },
            shape: { type: "circle" },
        },
        polygon: { enable: false },                     // start scattered
        detectRetina: true,
    }), []);

    const particlesLoaded = useCallback((container?: Container) => {
        if (!container) return;
        cRef.current = container;
        setContainerReady(true);
    }, []);

    // helpers
    async function scatter() {
        const c = cRef.current;
        if (!c) return;
        await c.reset(base);                             // reset to scattered config
    }

    async function gatherTo(url: string) {
        const c = cRef.current;
        if (!c) return;
        await c.reset({
            ...base,
            polygon: {
                enable: true,
                type: "inline",                              // trace the path
                inline: { arrangement: "equidistant" },
                move: { radius: 6 },                         // lower => tighter letters
                scale: 1,
                url,                                         // must be a real URL (e.g. /words/ENGINEER.svg)
                draw: { enable: false },
            },
        });
    }

    // loop
    useEffect(() => {
        if (!engineReady || !containerReady) return;
        let mounted = true;

        (async () => {
            await scatter();
            await new Promise(r => setTimeout(r, SCATTER_MS));
            const target = svgList[wordIdx % svgList.length];
            await gatherTo(target);
            await new Promise(r => setTimeout(r, HOLD_MS));
            if (mounted) setWordIdx(i => (i + 1) % svgList.length);
        })();

        return () => { mounted = false; };
    }, [engineReady, containerReady, wordIdx, svgList]);

    if (!engineReady) return null;

    return (
        <Particles
            id="word-particles"
            className={className}
            style={style}
            options={base}
            particlesLoaded={particlesLoaded}
        />
    );
}
