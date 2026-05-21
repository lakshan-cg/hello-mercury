"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
}

export default function HomePage() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(generatedStars);
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#0f172a] overflow-hidden flex items-center justify-center font-sans text-[#f8fafc]">
      {/* Base space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_100%)] opacity-80 pointer-events-none" />

      {/* Starfield */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-0 left-0 h-full w-[200%] flex animate-star-movement-horizontal">
          <div className="relative w-1/2 h-full">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  opacity: star.opacity,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>
          <div className="relative w-1/2 h-full">
            {stars.map((star) => (
              <div
                key={`copy-${star.id}`}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  opacity: star.opacity,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_50%_50%,_#334155_0%,_transparent_70%)] opacity-40 blur-3xl z-0 pointer-events-none" />

      {/* Main Layout Container */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center gap-12 sm:gap-16 w-full p-6 transition-all duration-[1500ms] ease-out transform ${
          mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
        }`}
      >
        {/* Mercury / Planet Aesthetics */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#cbd5e1_0%,_#334155_50%,_#0f172a_100%)] shadow-[0_0_80px_rgba(51,65,85,0.6)] opacity-95 z-0 pointer-events-none animate-[spin_30s_linear_infinite]" />

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#64748b] drop-shadow-[0_0_20px_rgba(248,250,252,0.15)] select-none">
            Hello Mercury
          </h1>
          <div className="mt-8 sm:mt-10 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent opacity-40" />
          <p className="mt-8 text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.6em] text-[#cbd5e1] uppercase opacity-60 font-light select-none">
            Inner Solar System
          </p>
        </div>
      </div>
    </main>
  );
}