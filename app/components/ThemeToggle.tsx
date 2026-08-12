"use client";

import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-300/80 bg-stone-100/90 text-stone-700 shadow-xs transition-all duration-300 hover:border-teal-700 hover:bg-stone-200 hover:text-teal-800 hover:scale-105 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:bg-slate-700 dark:hover:text-teal-300 active:scale-95"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <Sun className="h-5 w-5 opacity-0" />
      ) : isDark ? (
        <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-slate-800 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
