"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react";

/** Sample text on a 2D canvas -> pick bright pixels -> return 3D points.
 * New options:
 *  - uniformX?: boolean     // equalize per vertical bin
 *  - uniformXY?: boolean    // **even 2D** via grid stratification (use this)
 *  - bins?: number          // vertical bins for uniformX
 *  - gridCols?: number      // grid columns for uniformXY
 *  - gridRows?: number      // grid rows for uniformXY (auto if omitted)
 *  - scale?: number         // world-units per pixel (your textScale)
 */
function sampleTextToPoints(
    text: string,
    opts?: {
        canvasWidth?: number; canvasHeight?: number;
        font?: string; step?: number; threshold?: number; maxPoints?: number;
        align?: "center" | "left"; scale?: number;
        uniformX?: boolean; bins?: number;
        uniformXY?: boolean; gridCols?: number; gridRows?: number;
    }
) {
    const {
        canvasWidth = 2250,
        canvasHeight = 300,
        font = "800 190px system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        step = 2,
        threshold = 40,
        maxPoints = 9000,
        align = "center",
        scale: pixelScale = 0.0012,
        // new
        uniformX = false,
        bins = 72,
        uniformXY = false,
        gridCols = 84,
        gridRows, // default computed from aspect
    } = opts || {};

    // --- rasterize text ---
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#fff";
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.textAlign = align;
    const textX = align === "left" ? 60 : canvasWidth / 2;
    ctx.fillText(text, textX, canvasHeight / 2);

    const { data } = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    // --- collect candidate pixel centers on a grid ---
    const candidates: Array<{ x: number; y: number }> = [];
    for (let yy = 0; yy < canvasHeight; yy += step) {
        for (let xx = 0; xx < canvasWidth; xx += step) {
            const a = data[(yy * canvasWidth + xx) * 4 + 3];
            if (a > threshold) candidates.push({ x: xx, y: yy });
        }
    }
    if (candidates.length === 0) return new Float32Array();

    // bbox around glyphs
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of candidates) {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
    }
    const width = Math.max(1, maxX - minX);
    const height = Math.max(1, maxY - minY);

    // helpers
    const shuffle = (arr: any[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = (Math.random() * (i + 1)) | 0;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    let chosen: Array<{ x: number; y: number }> = [];

    if (uniformXY) {
        // --------- 2D GRID STRATIFIED SAMPLING (even density across area) ---------
        const cols = Math.max(1, gridCols);
        const rows = Math.max(1, gridRows ?? Math.round(cols * (height / width)));

        // bucket indices by cell
        const buckets: Array<number[]> = Array.from({ length: cols * rows }, () => []);
        const colW = width / cols;
        const rowH = height / rows;

        for (let i = 0; i < candidates.length; i++) {
            const p = candidates[i];
            let cx = Math.floor((p.x - minX) / colW);
            let cy = Math.floor((p.y - minY) / rowH);
            if (cx < 0) cx = 0; if (cx >= cols) cx = cols - 1;
            if (cy < 0) cy = 0; if (cy >= rows) cy = rows - 1;
            buckets[cy * cols + cx].push(i);
        }

        // shuffle each cell and count non-empty
        let nonEmpty = 0;
        for (const b of buckets) {
            if (b.length) { shuffle(b); nonEmpty++; }
        }
        const targetN = Math.min(maxPoints, candidates.length);
        const perCell = Math.max(1, Math.floor(targetN / Math.max(1, nonEmpty)));
        let remaining = targetN;

        // first pass: equal per non-empty cell
        const pickedIdx: number[] = [];
        for (const b of buckets) {
            if (!b.length) continue;
            const take = Math.min(perCell, b.length, remaining);
            for (let k = 0; k < take; k++) pickedIdx.push(b[k]);
            remaining -= take;
            if (remaining <= 0) break;
        }

        // second pass: round-robin extra fill from cells with leftovers
        if (remaining > 0) {
            const extras: Array<{ i: number; cell: number }> = [];
            for (let ci = 0; ci < buckets.length; ci++) {
                const b = buckets[ci];
                for (let k = perCell; k < b.length; k++) extras.push({ i: b[k], cell: ci });
            }
            shuffle(extras);
            for (let e = 0; e < extras.length && remaining > 0; e++, remaining--) {
                pickedIdx.push(extras[e].i);
            }
        }

        // final fallback if still short (rare)
        if (remaining > 0) {
            const all = [...Array(candidates.length).keys()];
            const pickedSet = new Set(pickedIdx);
            const rest = shuffle(all.filter(i => !pickedSet.has(i)));
            for (let r = 0; r < Math.min(remaining, rest.length); r++) pickedIdx.push(rest[r]);
        }

        chosen = pickedIdx.map(i => candidates[i]);
    } else if (uniformX) {
        // --------- vertical stratification only (flattens per-x counts) ---------
        const binCount = Math.min(bins, Math.max(1, Math.floor(width / step)));
        const buckets: Array<number[]> = Array.from({ length: binCount }, () => []);
        for (let i = 0; i < candidates.length; i++) {
            let bi = Math.floor(((candidates[i].x - minX) / width) * binCount);
            if (bi < 0) bi = 0;
            if (bi >= binCount) bi = binCount - 1;
            buckets[bi].push(i);
        }
        for (const b of buckets) shuffle(b);

        const targetN = Math.min(maxPoints, candidates.length);
        const base = Math.floor(targetN / binCount);
        let remaining = targetN;

        const pickedIdx: number[] = [];
        const leftovers: number[] = [];
        for (const b of buckets) {
            const take = Math.min(base, b.length);
            for (let k = 0; k < take; k++) pickedIdx.push(b[k]);
            for (let k = take; k < b.length; k++) leftovers.push(b[k]);
            remaining -= take;
        }
        shuffle(leftovers);
        for (let i = 0; i < Math.min(remaining, leftovers.length); i++) pickedIdx.push(leftovers[i]);

        chosen = pickedIdx.map(i => candidates[i]);
    } else {
        // --------- simple random cap ---------
        chosen = shuffle(candidates.slice()).slice(0, Math.min(maxPoints, candidates.length));
    }

    // --- map pixels -> world coords (centered like your version) ---
    const cx = align === "left" ? 0 : canvasWidth / 2;
    const cy = canvasHeight / 2;

    const out = new Float32Array(chosen.length * 3);
    for (let i = 0; i < chosen.length; i++) {
        const px = (chosen[i].x - cx) * pixelScale;
        const py = (cy - chosen[i].y) * pixelScale;
        const pz = (Math.random() - 0.5) * 0.06;
        out[i * 3 + 0] = px;
        out[i * 3 + 1] = py;
        out[i * 3 + 2] = pz;
    }
    return out;
}


const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smoothstep = (e0: number, e1: number, x: number) => {
    const t = clamp01((x - e0) / (e1 - e0));
    return t * t * (3 - 2 * t);
};

type LayerProps = {
    text?: string;
    color?: string;
    /** total particles (recruited + free) */
    count?: number;
    /** delay before the sweep starts */
    revealDelayMs?: number;
    /** time for the left→right sweep */
    revealDurationMs?: number;
    /** initial scatter radius */
    bgScatterRadius?: number;
    /** width of the moving band (0..1 of text width) */
    revealSoftness?: number;
    /** left vs center layout when sampling */
    align?: "center" | "left";
    /** free particles wandering amplitude & speed */
    freeWanderAmp?: number;
    freeWanderSpeed?: number;
    /** freeze recruited particles after reveal completes */
    freezeAfterReveal?: boolean;
    /** scale multiplier for the sampled glyph */
    textScale?: number;
    /** offset for stacking multiple layers */
    position?: THREE.Vector3Tuple;
    /** point size per layer */
    pointSize?: number;
};

function PointsLayer({
    text = "Hey—I'm Yengner",
    color = "#ffffff",
    count = 9000,
    revealDelayMs = 800,
    revealDurationMs = 1800,
    bgScatterRadius = 2.0,
    revealSoftness = 0.10,
    align = "center",
    freeWanderAmp = 0.12,       // wander amplitude around initial pos (world units)
    freeWanderSpeed = 0.15,     // wander speed factor
    freezeAfterReveal = true,
    textScale = 0.012,
    position = [0, 0, 0],
    pointSize = 0.032,
}: LayerProps) {
    const pointsRef = React.useRef<THREE.Points>(null);
    const geom = React.useMemo(() => new THREE.BufferGeometry(), []);

    // One-time build (handle StrictMode double-mount)
    const built = React.useRef(false);

    // Cohorts & data
    const targetsRef = React.useRef<Float32Array | null>(null);      // target point positions (for text)
    const fromRef = React.useRef<Float32Array | null>(null);      // initial scattered positions (all particles)
    const boundsRef = React.useRef<{ minX: number; maxX: number } | null>(null);

    // Mapping from particle index -> target index (or -1 if FREE)
    const mapRef = React.useRef<Int32Array | null>(null);

    // Per-particle wander phases so free particles don't move in lockstep
    const wanderPhase = React.useRef<Float32Array | null>(null);
    const freezeLockedRef = React.useRef(false);

    React.useEffect(() => {
        if (built.current) return;
        built.current = true;

        // Build target positions for the text (how many needed to draw it densely)
        const targetPts = sampleTextToPoints(text, {
            maxPoints: count,
            step: 2,            // <= IMPORTANT: keep small so we have plenty of candidates
            align,
            scale: textScale,
            uniformXY: true,    // <= NEW: 2D-even density
            gridCols: 96,       // try 84–128; higher = flatter density
            // gridRows: auto (computed from aspect); optionally set e.g. 28–40
        });
        targetsRef.current = targetPts;
        const targetCount = targetPts.length / 3;

        // Compute bounds for left→right reveal normalization
        let minX = Infinity, maxX = -Infinity;
        for (let i = 0; i < targetPts.length; i += 3) {
            const x = targetPts[i];
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
        }
        boundsRef.current = { minX, maxX };

        //  Initial scatter for ALL particles
        const from = new Float32Array(count * 3);
        for (let i = 0; i < from.length; i += 3) {
            let x = Math.random() * 2 - 1;
            let y = Math.random() * 2 - 1;
            let z = Math.random() * 2 - 1;
            const len = Math.hypot(x, y, z) || 1;
            x = (x / len) * Math.random() * bgScatterRadius;
            y = (y / len) * Math.random() * bgScatterRadius;
            z = (z / len) * Math.random() * bgScatterRadius;
            from[i] = x; from[i + 1] = y; from[i + 2] = z;
        }
        fromRef.current = from;

        // Build mapping: choose a random subset of particle indices to be "recruited"
        const indices = new Uint32Array(count);
        for (let i = 0; i < count; i++) indices[i] = i;
        // Fisher–Yates shuffle
        for (let i = count - 1; i > 0; i--) {
            const j = (Math.random() * (i + 1)) | 0;
            const tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
        }

        const recruited = indices.subarray(0, count);
        const map = new Int32Array(count).fill(-1);
        for (let j = 0; j < recruited.length; j++) {
            if (targetCount === 0) break;
            const pIndex = recruited[j];
            map[pIndex] = j % targetCount; // assign each recruited particle to a target point (reuse if extras)
        }
        mapRef.current = map;

        // Per-particle wander phase
        const phases = new Float32Array(count);
        for (let i = 0; i < count; i++) phases[i] = Math.random() * Math.PI * 2;
        wanderPhase.current = phases;

        // Init geometry buffer for ALL particles
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < pos.length; i++) pos[i] = from[i]; // start scattered
        geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    }, [text, align, count, bgScatterRadius, textScale, geom]);

    // Timing
    const startedRef = React.useRef(false);
    const revealStart = React.useRef(0);
    const revealEnd = React.useRef(0);

    useFrame((_, delta) => {
        const pts = pointsRef.current;
        const from = fromRef.current;
        const targets = targetsRef.current;
        const bounds = boundsRef.current;
        const map = mapRef.current;
        const phases = wanderPhase.current;
        if (!pts || !from || !bounds || !map || !phases) return;
        if (freezeAfterReveal && freezeLockedRef.current) return;

        const pos = pts.geometry.attributes.position.array as Float32Array;

        if (!startedRef.current) {
            const now = performance.now();
            revealStart.current = now + revealDelayMs;
            revealEnd.current = revealStart.current + revealDurationMs;
            startedRef.current = true;
        }

        const now = performance.now();
        const span = Math.max(1e-6, bounds.maxX - bounds.minX);

        // Global sweep progress 0..1
        const g =
            now <= revealStart.current ? 0 :
                now >= revealEnd.current ? 1 :
                    (now - revealStart.current) / (revealEnd.current - revealStart.current);

        const soft = Math.max(1e-4, revealSoftness);
        const sweep = g * (1 + soft * 2) - soft; // extend slightly so the tail finishes forming
        const timeBase = now * 0.001 * freeWanderSpeed;

        if (g >= 1 && freezeAfterReveal) {
            for (let i = 0; i < map.length; i++) {
                const fi = i * 3;
                const tIndex = map[i];
                if (tIndex >= 0 && targets) {
                    const ti = tIndex * 3;
                    pos[fi] = targets[ti];
                    pos[fi + 1] = targets[ti + 1];
                    pos[fi + 2] = targets[ti + 2];
                }
            }
            pts.geometry.attributes.position.needsUpdate = true;
            freezeLockedRef.current = true;
            return;
        }

        // Animate each particle based on its cohort
        for (let i = 0; i < map.length; i++) {
            const fi = i * 3;
            const fx = from[fi], fy = from[fi + 1], fz = from[fi + 2];

            const tIndex = map[i];
            const phase = phases[i];
            const t = timeBase + phase;
            const amp = freeWanderAmp;
            const baseX = fx + Math.sin(t * 1.1) * amp;
            const baseY = fy + Math.cos(t * 0.9) * amp * 0.8;
            const baseZ = fz + Math.sin(t * 0.7) * amp * 0.6;

            if (tIndex >= 0) {
                // RECRUITED: lerp into its target, gated left→right
                if (!targets) continue;
                const ti = tIndex * 3;
                const tx = targets[ti], ty = targets[ti + 1], tz = targets[ti + 2];
                const nx = (tx - bounds.minX) / span;       // 0..1 across phrase
                const gate = smoothstep(nx - soft, nx + soft, sweep);

                pos[fi] = baseX + (tx - baseX) * gate;
                pos[fi + 1] = baseY + (ty - baseY) * gate;
                pos[fi + 2] = baseZ + (tz - baseZ) * gate;
            } else {
                // FREE: keep wandering gently around its initial spot
                pos[fi] = baseX;
                pos[fi + 1] = baseY;
                pos[fi + 2] = baseZ;
            }
        }

        pts.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef} frustumCulled={false} position={position}>
            <primitive object={geom} />
            <pointsMaterial
                size={pointSize}
                sizeAttenuation
                depthWrite={false}
                transparent
                opacity={0.98}
                color={color}
            />
        </points>
    );
}

type HeroNameParticlesProps = {
    text?: string;
    color?: string;
    count?: number;
    revealDelayMs?: number;
    revealDurationMs?: number;
    revealSoftness?: number;
    bgScatterRadius?: number;
    align?: "center" | "left";
    freeWanderAmp?: number;
    freeWanderSpeed?: number;
    freezeAfterReveal?: boolean;
    textScale?: number;
};

export default function HeroNameParticlesR3F({
    text = "Hi, I'm Yengner",
    color = "#7C717E",
    count = 10000,
    revealDelayMs = 800,
    revealDurationMs = 2800,
    revealSoftness = 0.10,
    bgScatterRadius = 2.4,
    align = "center",
    freeWanderAmp = 0.10,
    freeWanderSpeed = 0.15,
    freezeAfterReveal = true,
    textScale = 0.0105,
}: HeroNameParticlesProps = {}) {
    return (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <Canvas
                camera={{ position: [0, -1, 10.5], fov: 88 }}
                dpr={[1, 1.6]}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.6} />
                <PointsLayer
                    text={text}
                    color={color}
                    count={count}
                    revealDelayMs={revealDelayMs}
                    revealDurationMs={revealDurationMs}
                    revealSoftness={revealSoftness}
                    bgScatterRadius={bgScatterRadius}
                    align={align}
                    freeWanderAmp={freeWanderAmp}
                    freeWanderSpeed={freeWanderSpeed}
                    freezeAfterReveal={freezeAfterReveal}
                    textScale={textScale}
                />
            </Canvas>
        </div>
    );
}
