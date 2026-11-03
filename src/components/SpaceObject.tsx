"use client";
import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import { animateParticleCanvas, seededRandom } from "@/lib/particleCanvas";
import styles from "./SpaceObject.module.css";

export default function SpaceObject({
  variant,
  className = "",
}: {
  variant: "planet" | "pulsar";
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const phase = useRef(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const random = seededRandom(variant === "planet" ? 94 : 19);
    const points = Array.from({ length: 650 }, () => ({
      angle: random() * Math.PI * 2,
      radius: 0.65 + random() * 0.35,
      size: 0.4 + random() * 0.8,
    }));
    return animateParticleCanvas(
      canvas,
      (ctx, frame) => {
        if (!paused && !frame.reducedMotion) phase.current += frame.delta;
        const t = frame.reducedMotion ? 0 : phase.current;
        const w = frame.width,
          h = frame.height;
        const dark = matchMedia("(prefers-color-scheme: dark)").matches;
        const cx = w * 0.5,
          cy = h * 0.48,
          r = Math.min(w * 0.42, h * 0.45);
        ctx.clearRect(0, 0, w, h);
        const glow = ctx.createRadialGradient(
          cx,
          cy,
          r * 0.15,
          cx,
          cy,
          r * 1.3,
        );
        glow.addColorStop(0, dark ? "#d7ae6324" : "#c49b5320");
        glow.addColorStop(1, "#b88e4300");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.32);
        const count = w < 350 ? 340 : points.length;
        function rings(front: boolean) {
          for (let i = 0; i < count; i++) {
            const p = points[i];
            const angle = p.angle + (t * 0.045) / p.radius;
            if (Math.sin(angle) > 0 !== front) continue;
            ctx.fillStyle = dark
              ? `rgba(224,190,131,${0.35 + p.radius * 0.4})`
              : `rgba(143,107,49,${0.3 + p.radius * 0.45})`;
            const x = Math.cos(angle) * r * p.radius;
            const y =
              Math.sin(angle) *
              r *
              p.radius *
              (variant === "planet" ? 0.3 : 0.6);
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        rings(false);
        if (variant === "planet") {
          const planet = ctx.createRadialGradient(
            -r * 0.19,
            -r * 0.2,
            r * 0.02,
            0,
            0,
            r * 0.43,
          );
          planet.addColorStop(0, "#c2ae89");
          planet.addColorStop(0.4, "#736c65");
          planet.addColorStop(0.8, "#273347");
          planet.addColorStop(1, "#0c1729");
          ctx.fillStyle = planet;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.43, 0, Math.PI * 2);
          ctx.fill();
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.43, 0, Math.PI * 2);
          ctx.clip();
          for (let i = 0; i < 14; i++) {
            ctx.strokeStyle = i % 2 ? "#ead8b51a" : "#09142421";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.ellipse(
              0,
              (i - 7) * r * 0.065,
              r * 0.55,
              r * 0.08,
              0.05,
              0,
              Math.PI * 2,
            );
            ctx.stroke();
          }
          ctx.restore();
        } else {
          const star = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.27);
          star.addColorStop(0, "#fff5da");
          star.addColorStop(0.15, "#f2d39c");
          star.addColorStop(0.4, "#c2975766");
          star.addColorStop(1, "#c2975700");
          ctx.fillStyle = star;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.27, 0, Math.PI * 2);
          ctx.fill();
          ctx.rotate(t * 0.04);
          ctx.strokeStyle = dark ? "#dec28d55" : "#9a763d66";
          ctx.lineWidth = 0.7;
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.ellipse(
              0,
              0,
              r * 0.82,
              r * 0.28,
              (i * Math.PI) / 3,
              0,
              Math.PI * 2,
            );
            ctx.stroke();
          }
        }
        rings(true);
        ctx.restore();
      },
      undefined,
      paused,
    );
  }, [variant, paused]);
  return (
    <div
      className={`${styles.spaceObject} ${variant === "pulsar" ? styles.pulsar : ""} ${className}`}
    >
      <canvas ref={ref} aria-hidden="true" />
      <button
        type="button"
        className={styles.orbitControl}
        aria-label={`${paused ? "Resume" : "Pause"} ${variant === "planet" ? "planet" : "star"} animation`}
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? (
          <FiPlay aria-hidden="true" />
        ) : (
          <FiPause aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
