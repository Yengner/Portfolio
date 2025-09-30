// components/ProjectForceGraph2D.tsx
"use client";

import React, { useMemo, useRef, useEffect } from "react";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";
import { buildGraphFromProjects, type GraphData, type GraphNode } from "@/lib/projectGraph";

type Props = {
    projects: { title: string; tech: string[] }[];
    width?: number;
    height?: number;
};

export default function ProjectForceGraph2D({ projects, width = 640, height = 420 }: Props) {
    const fgRef = useRef<ForceGraphMethods>(null);
    const data = useMemo<GraphData>(() => buildGraphFromProjects(projects), [projects]);

    // Physics tuning (charge, link distances, collision)
    useEffect(() => {
        const fg = fgRef.current;
        if (!fg) return;
        // access d3-force internals once mounted
        // @ts-ignore
        const sim = fg.d3Force("charge");
        if (sim) sim.strength(-220); // repel
        // @ts-ignore
        fg.d3Force("link")?.distance((l: any) => (l.source.type === "repo" ? 85 : 60)).strength(0.9);
        // add a mild collision to avoid overlap
        // @ts-ignore
        fg.d3Force("collide", (d: any) => 4);
    }, [data]);

    const bg = "rgba(8,16,32,0)";

    return (
        <div style={{ width, height, position: "relative", borderRadius: 16, overflow: "hidden" }}>
            <ForceGraph2D
                ref={fgRef as any}
                width={width}
                height={height}
                backgroundColor={bg}
                graphData={data}
                nodeLabel={(n: any) => n.label}
                linkColor={(l: any) => l.color || "rgba(125,211,252,0.35)"}
                linkDirectionalParticles={0}
                linkWidth={1}
                cooldownTicks={120}
                onEngineStop={() => fgRef.current?.zoomToFit(400, 40)}
                nodeCanvasObject={(node: GraphNode, ctx, globalScale) => {
                    const label = node.label ?? node.id;
                    const fontSize = Math.max(10, 14 / Math.sqrt(globalScale));
                    // dot
                    ctx.beginPath();
                    ctx.arc(node.x!, node.y!, (node.val ?? 4) + 1, 0, 2 * Math.PI, false);
                    ctx.fillStyle = node.color ?? "#e2eeff";
                    ctx.fill();
                    // text
                    ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
                    ctx.textAlign = "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "rgba(226,238,255,0.92)";
                    ctx.fillText(label, node.x! + 8, node.y!);
                }}
            />
            {/* soft vignette */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(120% 80% at 50% 50%, rgba(12,22,40,0) 60%, rgba(12,22,40,0.4))"
            }} />
        </div>
    );
}
