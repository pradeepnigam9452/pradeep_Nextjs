"use client";

import { PERSONAL_INFO } from "../data";
import { Code2, ArrowUpRight, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProjectCode() {
  const whatsappCodeRequest = `https://wa.me/918305729451?text=Hi%20Pradeep%2C%20I%20am%20interested%20in%20getting%20the%20source%20code%20for%20one%20of%20your%20projects.`;
  const whatsappSimilarProject = `https://wa.me/918305729451?text=Hi%20Pradeep%2C%20I%20would%20like%20to%20build%20a%20similar%20project%20like%20the%20ones%20in%20your%20portfolio.`;

  return (
    <section id="project-code" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-card-alt)] to-[var(--bg-card)] p-8 shadow-xl sm:p-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          
          {/* Subtle Ambient Background */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          {/* Left Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 mb-4">
              <Code2 className="h-3.5 w-3.5" />
              <span>Source Code &amp; Templates</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-3xl md:text-4xl">
              Want the Project <span className="text-amber-500 dark:text-amber-400">Code? 💻</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-medium">
              Interested in the source code or want a similar project for your business or portfolio? Get in touch with me and let's discuss it.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row items-center justify-center gap-4 flex-shrink-0">
            <a
              href={whatsappCodeRequest}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              <span>Request Source Code</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={whatsappSimilarProject}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>Build a Similar Project</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
