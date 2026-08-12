"use client";

import Image from "next/image";
import { ExternalLink, Globe, Code2, Sparkles, UserCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { LIVE_PROJECTS } from "../data";

export default function LiveProjects() {
  return (
    <section id="live-projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />
      <div className="pointer-events-none absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Production Web Apps</span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            Live <span className="text-amber-500 dark:text-amber-400">Projects Showcase</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
            Production-ready client websites, SaaS platforms, and full-stack web applications built by me that are live online right now.
          </p>
        </div>

        {/* Live Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LIVE_PROJECTS.map((project) => {
            const techs = project.technologies || project.tags || [];
            return (
              <article
                key={project.id || project.title}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-card-alt)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Live Online Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-extrabold text-white shadow-md backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        Live Online
                      </span>
                    </div>

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-stone-900/85 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 backdrop-blur-md shadow-xs">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Role / Contribution tag */}
                    {project.role && (
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-teal-700/10 px-2.5 py-1 text-[11px] font-bold text-teal-800 dark:bg-teal-400/15 dark:text-teal-300">
                        <UserCheck className="h-3 w-3" />
                        <span>Role: {project.role}</span>
                      </div>
                    )}

                    <h3 className="text-xl font-extrabold text-[var(--text-main)] transition-colors group-hover:text-teal-800 dark:group-hover:text-teal-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-[var(--bg-card-alt)] px-2.5 py-1 text-[11px] font-bold text-[var(--text-main)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between border-t border-[var(--border-subtle)] p-6 pt-4 bg-[var(--bg-card-alt)]/40">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-[var(--text-subtle)]">Internal Project</span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-bold text-[var(--text-main)] shadow-xs transition hover:border-amber-400 hover:text-amber-500"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium text-[var(--text-subtle)] italic">
                      Private Repository
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
