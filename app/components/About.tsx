import { MapPin, Code2, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            A little bit about me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold">
              Building ideas into{" "}
              <span className="text-blue-400">
                real applications.
              </span>
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              {PERSONAL_INFO.bio}
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I enjoy working on both frontend and backend development,
              creating responsive interfaces, building REST APIs and
              working with databases to develop complete web applications.
            </p>

            <div className="mt-8 flex items-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-blue-400" />

              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
              <Code2 className="h-8 w-8 text-blue-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Creating modern and responsive web applications
                with clean and maintainable code.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
              <Rocket className="h-8 w-8 text-blue-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Problem Solving
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Turning ideas and complex problems into practical
                and scalable solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}