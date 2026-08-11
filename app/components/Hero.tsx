import { PERSONAL_INFO, STATS } from "../data";
import { ArrowDownRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_40%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="w-full">

          {/* Small Heading */}
          <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            Available for opportunities
          </p>

          {/* Name */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              I'm {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-4xl">
            {PERSONAL_INFO.role}{" "}
            <span className="text-slate-600">
              based in India.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            {PERSONAL_INFO.bio}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>

            {/* Download Resume */}
            <a
              href="/Pradeep_Nigam_Resume.pdf"
              download
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
            </a>

          </div>

          {/* Location & Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">

            {/* Location */}
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {PERSONAL_INFO.location}
            </span>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>

          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10 border-t border-slate-800 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">
                  {stat.number}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}