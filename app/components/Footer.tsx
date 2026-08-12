"use client";

import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "../data";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-card-alt)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-[var(--text-main)]"
            >
              Pradeep<span className="text-teal-700 dark:text-teal-400">.</span>
            </a>
            <p className="mt-1 text-xs text-[var(--text-subtle)] max-w-xs font-medium">
              Building modern, scalable web apps with Next.js, React & MERN stack.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-[var(--text-muted)]">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-teal-800 dark:hover:text-teal-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] transition hover:border-amber-500 hover:text-amber-500"
              >
                <FiGithub className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] transition hover:border-amber-500 hover:text-amber-500"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] transition hover:border-amber-500 hover:text-amber-500"
              >
                <SiLeetcode className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] transition hover:border-amber-500 hover:text-amber-500"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <p className="text-[11px] text-[var(--text-subtle)] font-medium">
              © {new Date().getFullYear()} Pradeep Nigam. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}