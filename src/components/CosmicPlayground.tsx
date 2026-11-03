"use client";

import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import ParticleMark from "./ParticlesComponent";
import { animateParticleCanvas, seededRandom } from "@/lib/particleCanvas";

type Mode = "space" | "markets" | "probability";
const views: { id: Mode; label: string; caption: string }[] = [
  {
    id: "space",
    label: "space",
    caption: "A fascination with software, entropy, and infrastructure.",
  },
  {
    id: "markets",
    label: "Markets",
    caption: "Finding structure in the noise. Illustrative price data.",
  },
  {
    id: "probability",
    label: "Probability",
    caption:
      "Curiosity about prediction markets and uncertainty. Illustrative data.",
  },
];

function CosmicCanvas({ mode, paused }: { mode: Mode; paused: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const phase = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const random = seededRandom(71);
    const stars = Array.from({ length: 65 }, () => ({
      x: random(),
      y: random(),
      radius: 0.3 + random() * 0.8,
      alpha: 0.15 + random() * 0.4,
    }));
    const dust = Array.from({ length: 1150 }, () => ({
      angle: random() * Math.PI * 2,
      radius: 0.43 + random() * 0.57,
      size: 0.3 + random() * 1.05,
      warmth: random() > 0.72,
    }));
    const candles = Array.from({ length: 23 }, (_, i) => {
      const open = 112 + Math.sin(i * 0.73) * 15 + i * 2.4;
      const close = open + (random() - 0.38) * 22;
      return {
        open,
        close,
        high: Math.max(open, close) + 3 + random() * 12,
        low: Math.min(open, close) - 3 - random() * 10,
        volume: 0.25 + random() * 0.75,
      };
    });
    return animateParticleCanvas(
      canvas,
      (ctx, frame) => {
        const { width: w, height: h } = frame;
        if (!paused && !frame.reducedMotion) phase.current += frame.delta;
        const t = frame.reducedMotion ? 0 : phase.current;
        const mobile = w < 360;
        ctx.clearRect(0, 0, w, h);
        for (const star of stars) {
          ctx.fillStyle = `rgba(170,197,235,${star.alpha})`;
          ctx.beginPath();
          ctx.arc(star.x * w, star.y * h, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        if (mode === "space") {
          const cx =
            w * 0.5 +
            (pointer.current.x - 0.5) * (frame.reducedMotion ? 0 : 10);
          const cy =
            h * 0.48 +
            (pointer.current.y - 0.5) * (frame.reducedMotion ? 0 : 7);
          const radius = Math.min(w * 0.46, h * 0.5);
          const core = radius * 0.235;
          const halo = ctx.createRadialGradient(
            cx,
            cy,
            core * 0.7,
            cx,
            cy,
            radius * 1.1,
          );
          halo.addColorStop(0, "#4985d729");
          halo.addColorStop(0.45, "#356fdf16");
          halo.addColorStop(1, "#356fdf00");
          ctx.fillStyle = halo;
          ctx.fillRect(0, 0, w, h);
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(-0.24);
          const particles = mobile ? dust.slice(0, 600) : dust;
          function disk(front: boolean) {
            for (const p of particles) {
              const angle = p.angle + (t * 0.18) / Math.pow(p.radius, 1.3);
              if (Math.sin(angle) > 0 !== front) continue;
              const r = radius * p.radius;
              const x = Math.cos(angle) * r,
                y = Math.sin(angle) * r * 0.21;
              ctx.fillStyle = p.warmth
                ? "rgba(242,188,112,.8)"
                : `rgba(136,193,255,${0.95 - p.radius * 0.45})`;
              ctx.beginPath();
              ctx.arc(x, y, p.size * (mobile ? 0.8 : 1), 0, Math.PI * 2);
              ctx.fill();
            }
          }
          disk(false);
          // A stylized lensing ring frames the dark center above the disk.
          for (let i = 0; i < (mobile ? 220 : 420); i++) {
            const a = i * 2.399963 + t * 0.08;
            const spread = 0.97 + (i % 11) * 0.006;
            const x = Math.cos(a) * core * 1.25 * spread;
            const y = Math.sin(a) * core * 1.48 * spread;
            ctx.fillStyle = i % 7 === 0 ? "#f6c88f" : "#b9d9ff";
            ctx.globalAlpha = 0.28 + (i % 5) * 0.12;
            ctx.beginPath();
            ctx.arc(x, y, 0.5 + (i % 3) * 0.15, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalAlpha = 1;
          const edge = ctx.createRadialGradient(
            0,
            0,
            core * 0.78,
            0,
            0,
            core * 1.13,
          );
          edge.addColorStop(0, "#030710");
          edge.addColorStop(0.78, "#030710");
          edge.addColorStop(1, "#03071000");
          ctx.fillStyle = edge;
          ctx.beginPath();
          ctx.arc(0, 0, core * 1.13, 0, Math.PI * 2);
          ctx.fill();
          disk(true);
          ctx.restore();
          ctx.font = "9px Consolas, monospace";
          ctx.fillStyle = "#9babc4";
          ctx.strokeStyle = "#688ab161";
          ctx.lineWidth = 0.6;
          ctx.beginPath();

        } else {
          const left = w * 0.11,
            right = w * 0.91,
            top = h * 0.18,
            bottom = h * 0.79;
          ctx.strokeStyle = "#94b6df17";
          ctx.lineWidth = 0.7;
          for (let i = 0; i < 5; i++) {
            const y = top + ((bottom - top) * i) / 4;
            ctx.beginPath();
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
            ctx.stroke();
          }
          ctx.font = "9px Consolas, monospace";
          ctx.fillStyle = "#8b9fbc";
          if (mode === "markets") {
            const step = (right - left) / candles.length;
            const priceY = (p: number) =>
              bottom - 25 - ((p - 80) / 110) * (bottom - top - 25);
            candles.forEach((c, i) => {
              const x = left + step * (i + 0.5);
              const alpha = 0.7 + Math.sin(t * 0.6 - i * 0.25) * 0.2;
              ctx.fillStyle = ctx.strokeStyle =
                c.close > c.open
                  ? `rgba(98,205,178,${alpha})`
                  : `rgba(225,141,142,${alpha})`;
              // Dotted bodies and wicks echo the particle system.
              for (let y = priceY(c.high); y < priceY(c.low); y += 2.5) {
                ctx.beginPath();
                ctx.arc(x, y, 0.65, 0, Math.PI * 2);
                ctx.fill();
              }
              for (
                let y = priceY(Math.max(c.open, c.close));
                y < priceY(Math.min(c.open, c.close)) + 2;
                y += 2
              )
                for (let dx = -step * 0.2; dx <= step * 0.2; dx += 2) {
                  ctx.beginPath();
                  ctx.arc(x + dx, y, 0.8, 0, Math.PI * 2);
                  ctx.fill();
                }
              ctx.globalAlpha = 0.25;
              ctx.fillRect(
                x - step * 0.25,
                bottom + 7,
                step * 0.5,
                12 * c.volume,
              );
              ctx.globalAlpha = 1;
            });
            ctx.fillStyle = "#8b9fbc";
            ctx.fillText("PRICE / TIME", left, top - 15);
            ctx.fillText("HISTORICAL REPLAY", left, bottom + 37);
          } else {
            const probability = (x: number) =>
              0.25 +
              0.46 / (1 + Math.exp(-(x - 0.48) * 15)) +
              Math.sin(x * 24) * 0.055;
            for (let i = 0; i < 130; i++) {
              const u = i / 129;
              const x = left + u * (right - left),
                y = bottom - probability(u) * (bottom - top);
              const band = 4 + Math.sin(u * Math.PI) * 25;
              ctx.fillStyle = "#80b5ff14";
              ctx.fillRect(x, y - band, (right - left) / 129 + 1, band * 2);
              ctx.fillStyle = "#99c5ff";
              ctx.beginPath();
              ctx.arc(x, y, 1, 0, Math.PI * 2);
              ctx.fill();
            }
            const u = 0.52 + Math.sin(t * 0.25) * 0.35;
            const x = left + u * (right - left),
              y = bottom - probability(u) * (bottom - top);
            ctx.fillStyle = "#f5c98d";
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#8b9fbc";
            ctx.fillText("PROBABILITY / TIME", left, top - 15);
            ctx.fillText(
              "UNCERTAINTY IS PART OF THE SIGNAL",
              left,
              bottom + 29,
            );
          }
        }
      },
      undefined,
      paused,
    );
  }, [mode, paused]);
  return (
    <canvas
      ref={canvasRef}
      className="cosmic-canvas"
      aria-hidden="true"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: (event.clientX - box.left) / box.width,
          y: (event.clientY - box.top) / box.height,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: 0.5, y: 0.5 };
      }}
    />
  );
}

export default function CosmicPlayground() {
  const [mode, setMode] = useState<Mode>("space");
  const [paused, setPaused] = useState(false);
  return (
    <figure className="cosmic-playground" aria-labelledby="cosmic-title">
      <div className="cosmic-header">
        <span id="cosmic-title">A FEW THINGS IN MY ORBIT</span>
        <button
          type="button"
          className="cosmic-pause"
          aria-label={
            paused ? "Resume visual animation" : "Pause visual animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <FiPlay /> : <FiPause />}
        </button>
      </div>
      <CosmicCanvas mode={mode} paused={paused} />
      <div className="cosmic-name">
        <ParticleMark
          text="YENGNER"
          label="Yengner name"
          width={235}
          height={42}
          color="#a8caff"
        />
        <span>SPACE · MARKETS · SYSTEMS</span>
      </div>
      <div
        className="cosmic-controls"
        role="group"
        aria-label="Explore my interests"
      >
        {views.map((view) => (
          <button
            type="button"
            key={view.id}
            aria-pressed={mode === view.id}
            onClick={() => setMode(view.id)}
          >
            {view.label}
          </button>
        ))}
      </div>
      <figcaption aria-live="polite">
        {views.find((view) => view.id === mode)?.caption}
      </figcaption>
    </figure>
  );
}
