"use client";

import { Briefcase, CheckCircle2, Calendar, MapPin, Building2, Sparkles } from "lucide-react";
import { WORK_EXPERIENCE, JOURNEY_STEPS } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            Experience & Journey
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            My <span className="text-amber-500 dark:text-amber-400">Professional Experience</span> & Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
            Hands-on work experience in full-stack web development along with my academic journey.
          </p>
        </div>

        {/* FEATURED WORK EXPERIENCE SPOTLIGHT */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 shadow-xl lg:p-10">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-600 via-amber-400 to-teal-600 dark:from-teal-400 dark:via-amber-400 dark:to-teal-400" />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              
              {/* Left Column: Role Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/15 px-3.5 py-1.5 text-xs font-extrabold text-amber-600 dark:bg-amber-400/20 dark:text-amber-400">
                  <Briefcase className="h-4 w-4" />
                  <span>{WORK_EXPERIENCE.type}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[var(--text-main)] sm:text-3xl">
                  {WORK_EXPERIENCE.position}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--text-main)]">
                  <span className="flex items-center gap-1.5 text-teal-800 dark:text-teal-400 font-bold">
                    <Building2 className="h-4 w-4" />
                    {WORK_EXPERIENCE.company}
                  </span>
                  <span className="flex items-center gap-1.5 text-[var(--text-subtle)]">
                    <MapPin className="h-4 w-4" />
                    {WORK_EXPERIENCE.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                    <Calendar className="h-4 w-4" />
                    {WORK_EXPERIENCE.period}
                  </span>
                </div>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed pt-2">
                  {WORK_EXPERIENCE.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-2.5">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {WORK_EXPERIENCE.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-2.5 py-1 text-xs font-bold text-[var(--text-main)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Key Achievements & Key Responsibilities */}
              <div className="lg:col-span-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] p-6 space-y-4">
                <h4 className="flex items-center gap-2 text-base font-bold text-[var(--text-main)]">
                  <Sparkles className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                  Key Work Contributions & Systems Built:
                </h4>

                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {WORK_EXPERIENCE.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-700 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug text-[var(--text-main)] font-medium">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* TIMELINE / JOURNEY STEPS */}
        <div className="relative">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--border-strong)] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {JOURNEY_STEPS.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComp = item.icon;
              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-amber-400 ring-4 ring-[var(--bg-main)] md:left-1/2 shadow-md">
                    <IconComp className="h-4 w-4 text-stone-900" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 w-full md:ml-0 md:w-[45%]">
                    <div className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-600 hover:shadow-xl">
                      
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full bg-teal-700/10 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-400/20 dark:text-teal-300">
                          {item.year}
                        </span>
                        <span className="text-xs font-bold text-[var(--text-subtle)]">
                          {item.company}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-[var(--text-main)] group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}