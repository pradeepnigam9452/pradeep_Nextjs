import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { livePROJECTS, PROJECTS } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of client work and personal projects built with
            modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...livePROJECTS, ...PROJECTS].map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Image */}
              <div className="aspect-video overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Category */}
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">

                  {/* Live Website */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                    >
                      Visit site{" "}
                      <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
                    </a>
                  )}

                  {/* GitHub */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium transition hover:border-slate-500"
                    >
                      Code{" "}
                      <FaGithub className="ml-1 inline h-3.5 w-3.5" />
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}