"use client";

import React, { useEffect, useState, useRef } from "react";

const Rings = () => (
  <div className="w-full h-full rounded-full animate-spin-slow">
    {/* Main Thick Ring */}
    <div className="absolute inset-[10%] rounded-full border-[12px] sm:border-[16px] md:border-[20px] lg:border-[24px] border-[#e2c192]/70 border-t-[#b98e54]/60 border-b-[#f4d6a8]/80 shadow-[0_0_20px_rgba(226,193,146,0.2)]" />

    {/* Inner Gap / Thin Ring */}
    <div className="absolute inset-[18%] rounded-full border-[2px] sm:border-[3px] md:border-[5px] lg:border-[6px] border-[#8a6034]/40" />

    {/* Outer Ring */}
    <div className="absolute inset-[4%] rounded-full border-[3px] sm:border-[4px] md:border-[6px] lg:border-[8px] border-[#d8b078]/40" />

    {/* Outermost Faint Ring */}
    <div className="absolute inset-[0%] rounded-full border-[1px] md:border-[2px] border-[#ebd1a9]/20" />
  </div>
);

export function SaturnSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden snap-start snap-always bg-gradient-to-b from-[#0f172a] via-[#1e2336] to-[#4a3619]"
    >
      {/* Moving Stars Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40 animate-star-movement-horizontal"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #f8fafc 1.5px, transparent 1.5px)",
            backgroundSize: "120px 120px, 200px 200px",
            backgroundPosition: "0 0, 60px 60px",
          }}
        />
        <div
          className="absolute inset-0 opacity-30 animate-star-movement-horizontal"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            backgroundPosition: "20px 30px",
            animationDelay: "-50s",
          }}
        />
      </div>

      {/* Main Layout Container */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center gap-12 sm:gap-16 w-full p-6 transition-all duration-[1500ms] ease-out transform ${
          inView ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
        }`}
      >
        {/* Saturn 3D Graphic */}
        <div
          className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-[floatPlanet_8s_ease-in-out_infinite] z-0 pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-15deg) rotateY(35deg) rotateZ(-10deg)",
          }}
        >
          {/* Atmospheric Glow */}
          <div className="absolute z-[-1] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#f8ddb0] opacity-20 blur-[40px] md:blur-[60px]" />

          {/* Back Ring Layer (Clipped to Top Half) */}
          <div
            className="absolute z-0 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
            style={{
              transform: "rotateX(75deg)",
              clipPath: "inset(0 0 50% 0)",
            }}
          >
            <Rings />
          </div>

          {/* Planet Sphere */}
          <div
            className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#f8ddb0] via-[#c69a5c] to-[#3a2512]"
            style={{
              transform: "translateZ(0)",
              transformStyle: "preserve-3d",
              boxShadow:
                "inset -12px -12px 24px rgba(0,0,0,0.7), inset 4px 4px 16px rgba(255,255,255,0.2)",
            }}
          />

          {/* Front Ring Overlay (Clipped to Bottom Half) */}
          <div
            className="absolute z-20 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
            style={{
              transform: "rotateX(75deg)",
              clipPath: "inset(50% 0 0 0)",
            }}
          >
            <Rings />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#64748b] drop-shadow-[0_0_20px_rgba(248,250,252,0.15)] select-none">
            Hello Saturn
          </h1>
          <div className="mt-8 sm:mt-10 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent opacity-40" />
          <p className="mt-8 text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.6em] text-[#cbd5e1] uppercase opacity-60 font-light select-none">
            The Ringed Wonder
          </p>
        </div>
      </div>
    </section>
  );
}