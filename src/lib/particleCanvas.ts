export type ParticleFrame = {
  width: number;
  height: number;
  time: number;
  delta: number;
  reducedMotion: boolean;
};

// Shared lifecycle: bounded resolution, 30fps, static motion fallback, and no
// animation work while the canvas is offscreen or the browser tab is hidden.
export function animateParticleCanvas(
  canvas: HTMLCanvasElement,
  draw: (context: CanvasRenderingContext2D, frame: ParticleFrame) => void,
  resize?: (width: number, height: number) => void,
  paused = false,
) {
  const context = canvas.getContext("2d");
  if (!context) return () => {};
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const theme = matchMedia("(prefers-color-scheme: dark)");
  let width = 0,
    height = 0,
    frame = 0,
    previous = 0,
    elapsed = 0;
  let visible = false;
  function render(delta = 0) {
    if (!context) return;
    draw(context, {
      width,
      height,
      time: elapsed,
      delta,
      reducedMotion: motion.matches,
    });
  }
  function tick(now: number) {
    if (now - previous >= 32) {
      const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now;
      elapsed += delta;
      render(delta);
    }
    frame = requestAnimationFrame(tick);
  }
  function start() {
    cancelAnimationFrame(frame);
    previous = 0;
    render();
    if (visible && !document.hidden && !motion.matches && !paused)
      frame = requestAnimationFrame(tick);
  }
  const dimensions = new ResizeObserver(() => {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    resize?.(width, height);
    start();
  });
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    start();
  });
  dimensions.observe(canvas);
  visibility.observe(canvas);
  motion.addEventListener("change", start);
  theme.addEventListener("change", start);
  document.addEventListener("visibilitychange", start);
  return () => {
    cancelAnimationFrame(frame);
    dimensions.disconnect();
    visibility.disconnect();
    motion.removeEventListener("change", start);
    theme.removeEventListener("change", start);
    document.removeEventListener("visibilitychange", start);
  };
}

export function seededRandom(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
    return (seed >>> 0) / 4294967296;
  };
}
