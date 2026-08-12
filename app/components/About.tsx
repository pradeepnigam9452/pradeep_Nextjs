"use client";

import { MapPin, Briefcase, GraduationCap, Rocket, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            About Me
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            Passionate about building <span className="text-amber-500 dark:text-amber-400">digital experiences</span> that matter.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Detailed Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-[var(--text-main)] text-lg sm:text-xl leading-relaxed">
              {PERSONAL_INFO.aboutText}
            </p>

            <p>
              My expertise spans modern frontend frameworks like <strong className="text-[var(--text-main)] font-extrabold">React.js</strong> and <strong className="text-[var(--text-main)] font-extrabold">Next.js</strong>, paired with robust backend services built with <strong className="text-[var(--text-main)] font-extrabold">Node.js, Express.js</strong>, and <strong className="text-[var(--text-main)] font-extrabold">MongoDB</strong>.
            </p>

            <p>
              I am currently working as a <strong className="text-teal-800 dark:text-teal-400 font-bold">MERN Stack Developer Intern at Binarylogix Technology LLP</strong>, where I actively build and optimize staff management systems, attendance management platforms, leave management features, and scalable RESTful APIs.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-[var(--text-main)] text-sm font-semibold">
                <CheckCircle className="h-5 w-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                <span>Full Stack & REST API Design</span>
              </div>

              <div className="flex items-center gap-2.5 text-[var(--text-main)] text-sm font-semibold">
                <CheckCircle className="h-5 w-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                <span>Responsive & Modern UI/UX</span>
              </div>

              <div className="flex items-center gap-2.5 text-[var(--text-main)] text-sm font-semibold">
                <CheckCircle className="h-5 w-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                <span>B.Tech in CSE (IES University)</span>
              </div>

              <div className="flex items-center gap-2.5 text-[var(--text-main)] text-sm font-semibold">
                <CheckCircle className="h-5 w-5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                <span>MERN & Next.js Specialist</span>
              </div>
            </div>

            {/* Location */}
            <div className="pt-4 flex items-center gap-2 text-[var(--text-main)] font-medium">
              <MapPin className="h-5 w-5 text-amber-500 dark:text-amber-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Visual Highlight Cards */}
          <div className="lg:col-span-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            
            {/* Card 1: Current Role */}
            <div className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-teal-700/10 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-400/20 dark:text-teal-300">
                  Current Role
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-main)]">
                MERN Stack Developer Intern
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Binarylogix Technology LLP — Developing staff portals, attendance & leave modules, and full-stack solutions.
              </p>
            </div>

            {/* Card 2: Technical Education */}
            <div className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-600 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-600 dark:bg-amber-400/20 dark:text-amber-400">
                  Education
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-main)]">
                B.Tech in Computer Science
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                IES University Bhopal — Core foundations in Data Structures, Web Engineering, and Software Architecture.
              </p>
            </div>

            {/* Card 3: Technical Focus */}
            <div className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300 group-hover:scale-110 transition-transform">
                  <Rocket className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-teal-700/10 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-400/20 dark:text-teal-300">
                  Core Focus
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-main)]">
                Scalable Web Applications
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Building responsive frontends with React & Next.js alongside fast Node.js/Express backends & MongoDB.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}