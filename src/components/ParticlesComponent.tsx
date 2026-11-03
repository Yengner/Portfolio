"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { animateParticleCanvas, seededRandom } from "@/lib/particleCanvas";

type Props = {
  svg?: string;
  text?: string;
  label?: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
};
type Dot = { x: number; y: number; tx: number; ty: number; radius: number };

// Reuses the original SVG asset and canvas-sampling approach. Pixel bounds are
// measured so the mark stays centered at every width, without SVG offsets.
export default function ParticleMark({
  svg,
  text,
  label,
  width = 320,
  height = 140,
  color = "var(--accent)",
  className = "",
  style,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -1000, y: -1000 });
  const scatter = useRef(0);
  const [ready, setReady] = useState(false);
  const name = label || text || "USF logo";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let stop = () => {};
    const source = document.createElement("canvas");
    source.width = 900;
    source.height = text ? 160 : 900;
    const context = source.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    function initialize() {
      if (!context || !canvas || cancelled) return;
      const pixels = context.getImageData(
        0,
        0,
        source.width,
        source.height,
      ).data;
      const candidates: { x: number; y: number }[] = [];
      let left = source.width,
        top = source.height,
        right = 0,
        bottom = 0;
      for (let y = 0; y < source.height; y += 2)
        for (let x = 0; x < source.width; x += 2) {
          const i = (y * source.width + x) * 4;
          // Ignore transparent padding and white negative-space paths in the logo.
          if (
            pixels[i + 3] > 100 &&
            pixels[i] + pixels[i + 1] + pixels[i + 2] < 710
          ) {
            candidates.push({ x, y });
            left = Math.min(left, x);
            right = Math.max(right, x);
            top = Math.min(top, y);
            bottom = Math.max(bottom, y);
          }
        }
      if (!candidates.length) return;
      let dots: Dot[] = [];
      stop = animateParticleCanvas(
        canvas,
        (ctx, frame) => {
          const { width, height, delta, reducedMotion } = frame;
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = getComputedStyle(canvas).color;
          const gather = 1 - Math.exp(-3.8 * delta);
          for (const dot of dots) {
            if (reducedMotion) {
              dot.x = dot.tx;
              dot.y = dot.ty;
            } else {
              if (scatter.current > 0) {
                const random = seededRandom(
                  Math.round(dot.tx * 37 + dot.ty * 53) + scatter.current,
                );
                dot.x = random() * width;
                dot.y = random() * height;
              }
              const dx = dot.x - pointer.current.x,
                dy = dot.y - pointer.current.y;
              const distance = Math.hypot(dx, dy);
              if (distance < 42 && distance > 0.1) {
                const push = (1 - distance / 42) * 160 * delta;
                dot.x += (dx / distance) * push;
                dot.y += (dy / distance) * push;
              }
              dot.x += (dot.tx - dot.x) * gather;
              dot.y += (dot.ty - dot.y) * gather;
            }
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fill();
          }
          scatter.current = 0;
        },
        (width, height) => {
          const random = seededRandom(47);
          const scale = Math.min(
            (width - 12) / (right - left + 1),
            (height - 12) / (bottom - top + 1),
          );
          const offsetX = (width - (right - left) * scale) / 2;
          const offsetY = (height - (bottom - top) * scale) / 2;
          const mobile = matchMedia("(max-width: 640px)").matches;
          const count = Math.min(
            candidates.length,
            text ? (mobile ? 950 : 1400) : mobile ? 1400 : 2200,
          );
          dots = Array.from({ length: count }, () => {
            const point = candidates[Math.floor(random() * candidates.length)];
            return {
              tx: (point.x - left) * scale + offsetX,
              ty: (point.y - top) * scale + offsetY,
              x: random() * width,
              y: random() * height,
              radius: text ? 0.7 : 0.85,
            };
          });
        },
      );
      setReady(true);
    }
    if (text) {
      context.fillStyle = "#14233c";
      context.font = "bold 100px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, 450, 80, 880);
      initialize();
    } else if (svg) {
      const image = new window.Image();
      image.onload = () => {
        if (!cancelled) {
          context.drawImage(image, 0, 0, source.width, source.height);
          initialize();
        }
      };
      image.src = svg;
    }
    return () => {
      cancelled = true;
      stop();
    };
  }, [svg, text]);

  return (
    <button
      type="button"
      className={`particle-mark ${ready ? "is-ready" : ""} ${className}`}
      style={{ width, height, color, ...style }}
      aria-label={`Scatter and reassemble ${name} particles`}
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: event.clientX - box.left,
          y: event.clientY - box.top,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: -1000, y: -1000 };
      }}
      onPointerUp={() => {
        pointer.current = { x: -1000, y: -1000 };
      }}
      onClick={() => {
        scatter.current = Date.now() % 100000;
      }}
    >
      <span className="particle-mark-fallback" aria-hidden="true">
        {svg ? <Image src={svg} alt="" fill sizes="320px" /> : text}
      </span>
      <canvas ref={canvasRef} aria-hidden="true" />
    </button>
  );
}
