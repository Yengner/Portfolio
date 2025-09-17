"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import type { CSSProperties } from "react";
import { OutMode, type Engine, type ISourceOptions } from "@tsparticles/engine";

type Props = {
    svg: string;                    // e.g. "/usf.svg"
    width?: number;                 // px
    height?: number;                // px
    color?: string;
    scale?: number;                 // polygon scale relative to canvas
    mode?: "outline" | "filled";    // choose look
    className?: string;
    style?: CSSProperties;
};

export default function USFParticles({
    svg,
    width = 320,
    height = 140,
    color = "#8EDBFF",
    scale = 0.9,         // start near 0.9; adjust per logo aspect
    mode = "outline",
    className,
    style,
}: Props) {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        let mounted = true;
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
            await loadPolygonMaskPlugin(engine);
        }).then(() => mounted && setReady(true));
        return () => { mounted = false; };
    }, []);
    // const options: ISourceOptions = useMemo(() => ({
    //     fullScreen: false, detectRetina: true, fpsLimit: 60, interactivity:
    //     {
    //         modes: { bubble: { distance: 28, duration: 0.8, opacity: 0.6, size: 2.2, }, },
    //     }, particles: {
    //         number: { value: 650 }, size: { value: { min: 0.22, max: 0.4 } },
    //         color: { value: color }, opacity: { value: { min: 0.28, max: 0.72 }, animation: { enable: true, speed: 0.5, sync: true }, },
    //         links: {
    //             enable: true, distance: 50, opacity: 0.08, width: 0.05, color,

    //         },
    //         move: { enable: true, speed: { min: 0.22, max: 0.62 }, direction: "none", outModes: { default: OutMode.bounce }, },
    //         shape: { type: "circle" },
    //     }, polygon: {
    //         enable: true, type: "inline", inline: { arrangement: "equidistant" }, move:
    //             { radius: 1, type: "path" }, scale, url: svg, draw: { enable: false }, position: { x: 20, y: 10 },
    //     },
    // }), [color, scale, svg]);
    // if (!ready) return null;
    const options: ISourceOptions = useMemo(() => {
        const common: ISourceOptions = {
            fullScreen: false,
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "bubble" },
                },
                modes: {
                    bubble: { distance: 25, duration: 0.9, size: 2.5, opacity: 0.6 },
                },
            },
            particles: {
                number: { value: 2050 },
                size: { value: { min: 0.8, max: 1.1 } },
                // size: { value: { min: 0.48, max: 0.85 } },
                color: { value: color },
                opacity: { value: { min: 0.88, max: 0.95 } },
                // ✨ Turn OFF link lines to prevent cross-letter webs:
                links: { enable: false, distance: 11, opacity: 0.72, width: 0.72, color },
                move: {
                    enable: mode === "filled",      // outline static; outline gently alive
                    speed: mode === "filled" ? { min: 0.1, max: 0.35 } : 0,
                    outModes: { default: OutMode.bounce },
                },
                shape: { type: "polygon", },
                // number: { value: 650 }, size: { value: { min: 0.22, max: 0.4 } },
                // color: { value: color }, opacity: { value: { min: 0.28, max: 0.72 }, animation: { enable: true, speed: 0.5, sync: true }, },
                // links: {
                //     enable: true, distance: 50, opacity: 0.08, width: 0.05, color,
                // },

            },
            polygon: {
                enable: true,
                // Outline vs filled:
                type: mode === "outline" ? "inline" : "inside",
                inline: { arrangement: "equidistant" },   // even spacing along paths
                move: {
                    // Keep dots tight to the shape (no wandering off the logo)
                    radius: mode === "outline" ? 0.2 : 0.35,
                    // Remove "type: 'path'" so they DO NOT run around the path
                    // (that causes jitter/crossing visuals on complex letters)
                },
                // Center and scale the SVG *within the canvas*
                position: { x: 6, y: -55 }, // percent of canvas; center
                scale,
                url: svg,
                // draw: {
                //     enable: true, // set true to show a faint outline for debugging
                //     stroke: { color: "#ffffff", width: 1, opacity: 1 },
                // },

            },
        };
        return common;
    }, [svg, color, scale, mode]);

    if (!ready) return null;

    // Wrap in a sized container; Particles fills this box.
    return (
        <div
            className={className}
            style={{
                width,
                height,
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                // optional: glassy background here if you want
                ...style,
            }}
        >
            <Particles id="usf-logo-particles" options={options} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}
