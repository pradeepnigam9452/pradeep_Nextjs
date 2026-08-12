


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import { livePROJECTS, PROJECTS } from "../data";

// // Separate live projects and other projects
// const liveProjects = livePROJECTS;
// const otherProjects = PROJECTS;

// const categories = ["All", "Live Projects", "MERN Stack", "Full Stack", "Frontend", "E-Commerce"];

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("All");

//   // Filter logic with "Live Projects" category
//   const filteredProjects = () => {
//     if (activeTab === "All") {
//       return [...liveProjects, ...otherProjects];
//     }
    
//     if (activeTab === "Live Projects") {
//       return liveProjects;
//     }
    
//     // Filter other projects by category/tags
//     return otherProjects.filter((p) =>
//       p.category?.toLowerCase().includes(activeTab.toLowerCase()) ||
//       p.tags?.some((t) => t.toLowerCase().includes(activeTab.toLowerCase()))
//     );
//   };

//   const projects = filteredProjects();

//   return (
//     <section id="projects" className="relative py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="mb-12 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
//             Featured Portfolio
//           </div>
//           <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
//             My <span className="text-amber-500 dark:text-amber-400">Projects Showcase</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
//             A curated list of live web applications, client solutions, and full-stack MERN projects.
//           </p>
//         </div>

//         {/* Category Filter Tabs */}
//         <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
//           {categories.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
//                 activeTab === tab
//                   ? "bg-teal-700 text-white shadow-md dark:bg-teal-600"
//                   : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-teal-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Live Projects Section */}
//         {activeTab === "All" && liveProjects.length > 0 && (
//           <div className="mb-16">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
//                 <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                 Live Projects
//               </span>
//               <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent" />
//             </div>
            
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {liveProjects.map((project) => (
//                 <ProjectCard key={`live-${project.id}`} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Other Projects Section */}
//         {activeTab === "All" && otherProjects.length > 0 && (
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
//                 <span className="h-2 w-2 rounded-full bg-amber-500" />
//                 Other Projects
//               </span>
//               <div className="h-px flex-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
//             </div>
            
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {otherProjects.map((project) => (
//                 <ProjectCard key={`other-${project.id}`} project={project} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Filtered View (Single Grid) */}
//         {activeTab !== "All" && (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <ProjectCard key={`filtered-${project.id}`} project={project} />
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {projects.length === 0 && activeTab !== "All" && (
//           <div className="py-16 text-center">
//             <p className="text-[var(--text-muted)]">No projects found in this category.</p>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// // Project Card Component
// function ProjectCard({ project }) {
//   return (
//     <article
//       className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl"
//     >
//       <div>
//         {/* Image Container with Zoom Effect */}
//         <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-card-alt)]">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
//           />

//           {/* Category Badge overlay */}
//           <div className="absolute top-4 left-4 z-10">
//             <span className="rounded-full bg-stone-900/85 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 backdrop-blur-md shadow-xs">
//               {project.category}
//             </span>
//           </div>

//           {project.liveUrl && (
//             <div className="absolute top-4 right-4 z-10">
//               <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-md">
//                 <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
//                 Live
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <h3 className="text-xl font-extrabold text-[var(--text-main)] group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
//             {project.title}
//           </h3>

//           <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
//             {project.description}
//           </p>

//           {/* Tech Tags */}
//           <div className="mt-5 flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-lg bg-[var(--bg-card-alt)] px-2.5 py-1 text-xs font-bold text-[var(--text-main)]"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex items-center justify-between border-t border-[var(--border-subtle)] p-6 pt-4">
//         {project.liveUrl ? (
//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 transition hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300"
//           >
//             <span>Visit Live Site</span>
//             <ExternalLink className="h-3.5 w-3.5" />
//           </a>
//         ) : (
//           <span className="text-xs font-medium text-[var(--text-subtle)]">Demo Private</span>
//         )}

//         {project.githubUrl ? (
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3 py-1.5 text-xs font-bold text-[var(--text-main)] transition hover:border-amber-400"
//           >
//             <FaGithub className="h-3.5 w-3.5" />
//             <span>Code</span>
//           </a>
//         ) : null}
//       </div>
//     </article>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { livePROJECTS, PROJECTS } from "../data";

// Project Type
interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Separate live projects and other projects
const liveProjects: Project[] = livePROJECTS;
const otherProjects: Project[] = PROJECTS;

const categories = [
  "All",
  "Live Projects",
  "MERN Stack",
  "Full Stack",
  "Frontend",
  "E-Commerce",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");

  // Filter logic with "Live Projects" category
  const filteredProjects = (): Project[] => {
    if (activeTab === "All") {
      return [...liveProjects, ...otherProjects];
    }

    if (activeTab === "Live Projects") {
      return liveProjects;
    }

    // Filter other projects by category/tags
    return otherProjects.filter(
      (p: Project) =>
        p.category?.toLowerCase().includes(activeTab.toLowerCase()) ||
        p.tags?.some((t: string) =>
          t.toLowerCase().includes(activeTab.toLowerCase())
        )
    );
  };

  const projects = filteredProjects();

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            Featured Portfolio
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            My{" "}
            <span className="text-amber-500 dark:text-amber-400">
              Projects Showcase
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
            A curated list of live web applications, client solutions, and
            full-stack MERN projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab: string) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-teal-700 text-white shadow-md dark:bg-teal-600"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-teal-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Projects Section */}
        {activeTab === "All" && liveProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Projects
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {liveProjects.map((project: Project) => (
                <ProjectCard
                  key={`live-${project.id}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Section */}
        {activeTab === "All" && otherProjects.length > 0 && (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Other Projects
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project: Project) => (
                <ProjectCard
                  key={`other-${project.id}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        )}

        {/* Filtered View */}
        {activeTab !== "All" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project) => (
              <ProjectCard
                key={`filtered-${project.id}`}
                project={project}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {projects.length === 0 && activeTab !== "All" && (
          <div className="py-16 text-center">
            <p className="text-[var(--text-muted)]">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl">
      <div>
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-card-alt)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="rounded-full bg-stone-900/85 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 backdrop-blur-md shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Live Badge */}
          {project.liveUrl && (
            <div className="absolute top-4 right-4 z-10">
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-xs backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Live
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-extrabold text-[var(--text-main)] group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-lg bg-[var(--bg-card-alt)] px-2.5 py-1 text-xs font-bold text-[var(--text-main)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] p-6 pt-4">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 transition hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="text-xs font-medium text-[var(--text-subtle)]">
            Demo Private
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3 py-1.5 text-xs font-bold text-[var(--text-main)] transition hover:border-amber-400"
          >
            <FaGithub className="h-3.5 w-3.5" />
            <span>Code</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}