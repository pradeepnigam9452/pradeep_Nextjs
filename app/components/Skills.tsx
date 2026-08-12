"use client";

import { SKILLS_CATEGORIZED } from "../data";
import { Code2, Server, Database as DatabaseIcon, Wrench } from "lucide-react";

const categories = [
  { id: "Frontend", name: "Frontend Development", icon: Code2 },
  { id: "Backend", name: "Backend Development", icon: Server },
  { id: "Database", name: "Databases & Storage", icon: DatabaseIcon },
  { id: "Other", name: "Tools & Utilities", icon: Wrench },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            Skills & Expertise
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            My <span className="text-amber-500 dark:text-amber-400">Technical Toolkit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
            Core technologies and tools I use to build scalable, full-stack web applications.
          </p>
        </div>

        {/* Categorized Grid Display */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const CatIcon = category.icon;
            const skillList = SKILLS_CATEGORIZED[category.id as keyof typeof SKILLS_CATEGORIZED] || [];

            return (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-600 hover:shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300 group-hover:scale-110 transition-transform">
                      <CatIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-main)]">
                      {category.id}
                    </h3>
                  </div>

                  {/* Skills Badges / Cards */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {skillList.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2 text-xs font-bold text-[var(--text-main)] shadow-xs transition-all hover:border-amber-400 hover:bg-amber-500/10"
                        >
                          <SkillIcon className="h-4 w-4 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Footer Tag */}
                <div className="mt-8 border-t border-[var(--border-subtle)] pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                    {skillList.length} Core Technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
