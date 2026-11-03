"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import BackgroundParticles from "./BackgroundParticles";

const StarfieldContext = createContext<{
  paused: boolean;
  toggle: () => void;
} | null>(null);

export default function AmbientSpaceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <StarfieldContext.Provider
      value={{ paused, toggle: () => setPaused((value) => !value) }}
    >
      <div className="starfield-shell">
        <BackgroundParticles paused={paused} />
        {children}
      </div>
    </StarfieldContext.Provider>
  );
}

export function StarfieldToggle() {
  const motion = useContext(StarfieldContext);
  if (!motion)
    throw new Error("StarfieldToggle must be inside AmbientSpaceProvider");
  return (
    <button
      type="button"
      className="starfield-toggle"
      aria-pressed={motion.paused}
      onClick={motion.toggle}
    >
      {motion.paused ? (
        <FiPlay aria-hidden="true" />
      ) : (
        <FiPause aria-hidden="true" />
      )}
      {motion.paused ? "Resume stars" : "Pause stars"}
    </button>
  );
}
