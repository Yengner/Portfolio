"use client";
import { useEffect, useRef } from "react";
import { animateParticleCanvas, seededRandom } from "@/lib/particleCanvas";

// One viewport-sized field follows the whole homepage. It never allocates a
// document-height canvas, and shares the same visibility/motion lifecycle as
// the local space objects.
export default function BackgroundParticles({
  paused = false,
}: {
  paused?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const phase = useRef(0);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const random = seededRandom(2207);
    const stars = Array.from({ length: 96 }, () => ({
      x: random(),
      y: random(),
      radius: 0.55 + random() * 1.05,
      vx: (random() - 0.5) * 1.4,
      vy: 0.2 + random() * 0.45,
      phase: random() * Math.PI * 2,
      bright: random() > 0.92,
    }));
    const updateTone = () => {
      const region = scrollY < innerHeight * 0.6 ? "hero" : "content";
      if (canvas.dataset.region !== region) canvas.dataset.region = region;
    };
    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    const stop = animateParticleCanvas(
      canvas,
      (ctx, frame) => {
        const { width: w, height: h, delta, reducedMotion } = frame;
        if (!w || !h) return;
        if (!paused && !reducedMotion) phase.current += delta;
        const t = reducedMotion ? 0 : phase.current;
        const dark = matchMedia("(prefers-color-scheme: dark)").matches;
        const color = dark ? "143, 180, 229" : "42, 90, 154";
        const count = w < 640 ? 36 : Math.min(96, Math.floor((w * h) / 14000));
        ctx.clearRect(0, 0, w, h);
        const positions = stars.slice(0, count).map((star) => ({
          ...star,
          x: (((star.x * w + t * star.vx) % w) + w) % w,
          y: (star.y * h + t * star.vy) % h,
        }));
        positions.forEach((star, i) => {
          const alpha = star.bright
            ? 0.65
            : 0.28 + Math.sin(t * 0.28 + star.phase) * 0.1;
          ctx.fillStyle = `rgba(${color},${alpha})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
          if (star.bright) {
            ctx.strokeStyle = `rgba(${color},.28)`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(star.x - 3, star.y);
            ctx.lineTo(star.x + 3, star.y);
            ctx.moveTo(star.x, star.y - 3);
            ctx.lineTo(star.x, star.y + 3);
            ctx.stroke();
          }
          for (let j = i + 1; j < positions.length; j++) {
            const other = positions[j];
            const distance = Math.hypot(star.x - other.x, star.y - other.y);
            if (distance < 105) {
              ctx.strokeStyle = `rgba(${color},${0.09 * (1 - distance / 105)})`;
              ctx.lineWidth = 0.55;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
        if (!reducedMotion) {
          const cycle = (t + 21) % 24;
          if (cycle < 2.4) {
            const progress = cycle / 2.4;
            const x = w * (-0.05 + progress * 1.1),
              y = h * (0.08 + progress * 0.24);
            const tail = w < 640 ? 48 : 110;
            const alpha = Math.sin(progress * Math.PI) * 0.32;
            const gradient = ctx.createLinearGradient(
              x - tail,
              y - tail * 0.25,
              x,
              y,
            );
            gradient.addColorStop(0, `rgba(${color},0)`);
            gradient.addColorStop(1, `rgba(${color},${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x - tail, y - tail * 0.25);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }
      },
      undefined,
      paused,
    );
    return () => {
      stop();
      window.removeEventListener("scroll", updateTone);
    };
  }, [paused]);
  return <canvas ref={ref} id="bg-particles" aria-hidden="true" />;
}
