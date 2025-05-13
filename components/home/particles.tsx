"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="h-full w-full relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="h-full w-full"
        options={{
          fullScreen: { enable: false }, // ← KEY FIX!
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          particles: {
            color: {
                value: [
                    "#A78BFA", // violet-400
                    "#8B5CF6", // violet-500
                    "#7C3AED", // violet-600
                    "#C084FC", // purple pastel
                    "#E9D5FF", // light violet
                    "#DDD6FE", // soft lavender
                ],
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              direction: "none",
              straight: false,
              outModes: { default: "out" },
            },
            number: {
              value: 150,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.7 },
            shape: { type: ["circle", "heart"] },
            size: { value: { min: 3, max: 8 } },
            shadow: {
                enable: true,
                color: "#8B5CF6",
                blur: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
