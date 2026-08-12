"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 90);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "unset";
      }, 500);
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-main)] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/15 animate-pulse" />
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/15" />

      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        {/* Logo / Name animation */}
        <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
          <span className="text-teal-700 dark:text-teal-400 font-mono font-bold animate-pulse">&lt;</span>
          <span className="bg-gradient-to-r from-[var(--text-main)] via-teal-800 to-amber-500 bg-clip-text text-transparent dark:via-teal-300 dark:to-amber-400">
            Pradeep Nigam
          </span>
          <span className="text-amber-500 dark:text-amber-400 font-mono font-bold animate-pulse">/&gt;</span>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--text-subtle)]">
          MERN Stack &amp; Next.js Developer
        </p>

        {/* Progress Bar & Spinner */}
        <div className="mt-2 flex flex-col items-center gap-3 w-64">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--border-strong)]">
            <div
              className="h-full bg-gradient-to-r from-teal-700 via-teal-500 to-amber-400 transition-all duration-150 ease-out dark:from-teal-400 dark:to-amber-400"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-800 dark:text-teal-400">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-ping" />
            <span>{Math.min(progress, 100)}% Loaded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
