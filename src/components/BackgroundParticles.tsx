"use client";
import { useEffect, useRef } from "react";

// Bound the field to the hero; pause offscreen and honor motion preferences.
export default function BackgroundParticles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    let frame = 0,
      width = 0,
      height = 0,
      lastTime = 0;
    let visible = true;
    let points: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }[] = [];
    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const color = dark.matches ? "119, 160, 211" : "40, 91, 160";
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        context.fillStyle = `rgba(${color}, .42)`;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
        for (let j = i + 1; j < points.length; j++) {
          const other = points[j];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 130) {
            context.strokeStyle = `rgba(${color}, ${0.13 * (1 - distance / 130)})`;
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      }
    }
    function tick(time: number) {
      if (time - lastTime > 32) {
        const delta = Math.min((time - lastTime) / 16.67, 3);
        lastTime = time;
        for (const p of points) {
          p.x = (p.x + p.vx * delta + width) % width;
          p.y = (p.y + p.vy * delta + height) % height;
        }
        draw();
      }
      frame = requestAnimationFrame(tick);
    }
    function start() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      draw();
      if (!reduced.matches && visible && !document.hidden)
        frame = requestAnimationFrame(tick);
    }
    function resize() {
      if (!canvas || !context) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 640 ? 28 : Math.min(85, Math.floor(width / 17));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.12,
        radius: 0.7 + Math.random() * 0.6,
      }));
      start();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    intersection.observe(canvas);
    reduced.addEventListener("change", start);
    dark.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      reduced.removeEventListener("change", start);
      dark.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);
  return <canvas ref={ref} id="bg-particles" aria-hidden="true" />;
}
