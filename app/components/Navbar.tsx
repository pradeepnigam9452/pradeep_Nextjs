"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PERSONAL_INFO } from "../data";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/90 backdrop-blur-md shadow-xs"
          : "bg-transparent py-2"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-1.5 text-2xl font-bold tracking-tight transition hover:opacity-90 text-[var(--text-main)]"
        >
          <span className="font-extrabold text-[var(--text-main)]">
            Pradeep
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-teal-600 dark:bg-teal-400 transition-transform group-hover:scale-125" />
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 px-4 py-1.5 backdrop-blur-sm md:flex shadow-xs">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "font-extrabold text-teal-800 dark:text-teal-300"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                {isActive ? (
                  <span className="inline-flex items-center gap-0.5">
                    <span className="text-teal-700 dark:text-teal-400 font-bold">(</span>
                    <span>{item.name}</span>
                    <span className="text-teal-700 dark:text-teal-400 font-bold">)</span>
                  </span>
                ) : (
                  item.name
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Theme Toggle & Download CV */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <a
            href={PERSONAL_INFO.resume}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            <Download className="h-4 w-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5 text-[var(--text-main)] transition hover:bg-[var(--bg-card-alt)]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Navigation */}
      <div
        className={`overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="space-y-1 px-6">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-base font-medium transition ${
                  isActive
                    ? "bg-teal-700/10 font-bold text-teal-800 dark:bg-teal-400/10 dark:text-teal-300"
                    : "text-[var(--text-muted)] hover:bg-[var(--bg-card-alt)] hover:text-[var(--text-main)]"
                }`}
              >
                {isActive ? `( ${item.name} )` : item.name}
              </a>
            );
          })}

          <div className="pt-3">
            <a
              href={PERSONAL_INFO.resume}
              download
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}