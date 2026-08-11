import { TECH_STACK } from "../data";

const specialties = [
  ["Frontend", "React, Next.js, Tailwind CSS, responsive UI"],
  ["Backend", "Node.js, Express.js, REST APIs, authentication"],
  ["Data & State", "MongoDB, Redux, structured application data"],
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Capabilities</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Tools I use to ship useful products.</h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-400">I work across the stack to turn a clear idea into a fast, polished web experience.</p>
          <div className="mt-9 space-y-5">
            {specialties.map(([title, description]) => <div key={title} className="border-l border-cyan-300/50 pl-5"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{description}</p></div>)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TECH_STACK.map((skill, index) => <div key={skill} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50"><span className="text-xs font-semibold text-cyan-300/70">0{index + 1}</span><p className="mt-5 font-medium text-slate-100">{skill}</p></div>)}
        </div>
      </div>
    </section>
  );
}
