"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Star, Code2, Briefcase } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute top-12 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/15" />
      <div className="pointer-events-none absolute top-40 right-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/15" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT COLUMN: Main Text & CTA */}
          <div className="relative z-10 lg:col-span-6">
            
            {/* Status / Role Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
              </span>
              <span>{PERSONAL_INFO.role}</span>
            </div>

            {/* Main Greeting & Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl leading-[1.15] text-[var(--text-main)]">
              {PERSONAL_INFO.greeting}{" "}
              <br />
              <span className="text-amber-500 dark:text-amber-400">
                {PERSONAL_INFO.nameHighlight}
              </span>
            </h1>

            {/* Sub-heading / Role */}
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-teal-800 dark:text-teal-400 sm:text-3xl">
              {PERSONAL_INFO.roleHighlight}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg text-[var(--text-muted)]">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <span>View My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-7 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-[var(--bg-card-alt)] dark:hover:border-amber-400"
              >
                <Download className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Dashed curved line element (inspired by reference image) */}
            <div className="hidden lg:block absolute left-48 -bottom-16 w-48 pointer-events-none opacity-80 dark:opacity-60">
              <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path
                  d="M10 80 Q 70 10 180 50"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="dark:stroke-teal-400"
                />
                <polygon
                  points="185,52 173,42 176,57"
                  fill="#0D9488"
                  className="dark:fill-teal-400"
                />
              </svg>
            </div>

            {/* Bottom Row: Stats & Social Links */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[var(--border-subtle)] pt-6">
              {/* Stat Block: 01+ Years Experience */}
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-teal-800 dark:text-teal-400">
                  {STATS[0].number}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] leading-tight">
                  {STATS[0].label.replace(" ", "\n")}
                </span>
              </div>

              <div className="h-8 w-px bg-[var(--border-subtle)] hidden sm:block" />

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 dark:bg-amber-400/20 transition-all hover:scale-110 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-950"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 dark:bg-amber-400/20 transition-all hover:scale-110 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-950"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 dark:bg-amber-400/20 transition-all hover:scale-110 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-950"
                  aria-label="LeetCode"
                >
                  <SiLeetcode className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile Photo & Floating Cards */}
          <div className="relative z-10 lg:col-span-6 flex flex-col items-center justify-center">
            
            

            <div className="relative flex items-center justify-center">
              
              {/* Decorative Background Circles */}
              <div className="absolute -inset-4 rounded-full bg-amber-400/30 blur-md dark:bg-amber-400/20 animate-pulse-subtle" />
              <div className="absolute -inset-8 rounded-full border border-teal-600/20 dark:border-teal-400/20" />

              {/* Circular Profile Container */}
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl bg-[var(--hero-ring)] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 384px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Card 1: Top Left - MERN Stack Developer */}
              <div className="animate-float absolute -top-4 -left-4 sm:-left-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-main)]">MERN Stack</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Next.js & React</p>
                </div>
              </div>

              {/* Floating Card 2: Right Middle - Review / Stat Style Card */}
              <div className="animate-float-delayed absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[var(--text-main)]">10+ Projects</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 text-xs font-semibold text-teal-800 dark:text-teal-400">
                  <span>Completed</span>
                  <span className="rounded-md bg-teal-700/10 px-2 py-0.5 text-[11px] text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">5.0 ★</span>
                </div>
              </div>

              {/* Floating Card 3: Bottom Left - Available for Freelance */}
              <div className="animate-float absolute -bottom-4 left-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-[var(--text-main)]">
                  {PERSONAL_INFO.status}
                </span>
              </div>

            </div>

            {/* Handwritten Signature Accent */}
            <div className="mt-8 text-right self-end font-cursive text-3xl font-bold text-teal-800 dark:text-teal-300 transform -rotate-3">
              Full Stack Developer.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}