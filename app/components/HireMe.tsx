"use client";

import { PERSONAL_INFO } from "../data";
import { UserCheck, Mail, MessageSquare, ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HireMe() {
  const highlights = [
    "MERN Stack & Next.js Specialist",
    "Scalable REST API & Database Architecture",
    "Clean, Responsive & Modern UI/UX",
    "Production-Ready Code Quality",
    "On-Time Project Delivery & Clear Communication",
  ];

  return (
    <section id="hire-me" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text & Pitch */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
              <UserCheck className="h-3.5 w-3.5 text-amber-500" />
              <span>Available for Hire</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl leading-tight">
              Ready to <span className="text-amber-500 dark:text-amber-400">Build Your Next Idea?</span>
            </h2>

            <blockquote className="mt-6 border-l-4 border-teal-700 pl-4 italic text-[var(--text-muted)] text-base sm:text-lg leading-relaxed dark:border-teal-400">
              "Looking for a developer to turn your idea into a fast, modern, and scalable web application? I'm available for freelance and professional development opportunities."
            </blockquote>

            <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-medium">
              I specialize in taking web applications from concept to deployment using React, Next.js, Node.js, Express, and MongoDB. Whether you need a dedicated full-stack developer for a client project or a complete custom web app, I'm here to help.
            </p>

            {/* Highlights List */}
            <div className="mt-6 space-y-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[var(--text-main)]">
                  <CheckCircle2 className="h-4 w-4 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-bold text-[var(--text-main)] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-[var(--bg-card-alt)]"
              >
                <Mail className="h-4 w-4 text-amber-500" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Status Card & Tech Stack Summary */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl" />
              
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[var(--text-main)]">
                    Current Status
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {PERSONAL_INFO.status}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[var(--border-subtle)] pt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                    Core Technologies
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-[var(--bg-card-alt)] px-3 py-1 text-xs font-bold text-[var(--text-main)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                    Location &amp; Work Type
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[var(--text-main)]">
                    Bhopal, MP, India (Remote &amp; Onsite Opportunities)
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs font-semibold text-amber-800 dark:text-amber-300">
                  ⚡ Quick Response Guarantee: I reply to all inquiries within 12-24 hours.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
