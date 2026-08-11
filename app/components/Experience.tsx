import { JOURNEY_STEPS } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience & Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My journey from learning the fundamentals to building
            real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {JOURNEY_STEPS.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Dot */}
                <div className="absolute left-4 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-slate-950 md:left-1/2" />

                {/* Card */}
                <div className="ml-10 w-full md:ml-0 md:w-[45%]">

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50">

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-blue-400">
                        {item.year}
                      </span>

                      <span className="text-xs text-slate-500">
                        {item.company}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}