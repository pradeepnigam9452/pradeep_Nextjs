"use client";

import { FREELANCE_SERVICES, PERSONAL_INFO } from "../data";
import { Rocket, CheckCircle2, MessageSquare, Briefcase, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Freelancing() {
  return (
    <section id="freelancing" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/15" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-teal-700/20 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card-alt)] to-[var(--bg-card)] p-8 shadow-xl sm:p-12 md:p-16 dark:border-teal-400/20">
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Hire &amp; Freelance Projects</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-subtle)]">
              <Rocket className="h-4 w-4 text-amber-500" />
              <span>Fast Turnaround &amp; Clean Code</span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-8 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl leading-tight">
              Open for <span className="text-amber-500 dark:text-amber-400">Freelancing 🚀</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Need a modern, fast, and scalable web application for your business or portfolio? I craft custom full-stack solutions tailored to your unique requirements.
            </p>
          </div>

          {/* Services Offered Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FREELANCE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-teal-800 dark:text-teal-400">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <h3 className="text-sm font-extrabold text-[var(--text-main)] group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)] font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box inside freelancing */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-teal-700/20 bg-teal-700/5 p-6 sm:p-8 md:flex-row dark:border-teal-400/20 dark:bg-teal-400/5">
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text-main)] sm:text-2xl">
                Have a project in mind? <span className="text-amber-500 dark:text-amber-400">Let's build it together.</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                Whether it's a MVP, corporate website, or full MERN application — let's turn your vision into reality.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href="#contact"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <Briefcase className="h-4 w-4" />
                <span>Start a Project</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
