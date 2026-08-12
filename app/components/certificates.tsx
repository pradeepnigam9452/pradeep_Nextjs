// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   Award,
//   Calendar,
//   ArrowLeft,
//   Heart,
//   Coffee,
//   BookOpen,
//   ExternalLink,
// } from "lucide-react";

// import { CERTIFICATES, PASSIONS } from "../data";

// export default function CertificatesPage() {
//   return (
//     <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/10" />
//           <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
//         </div>

//         <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">

//           {/* Back Button */}
//           <Link
//             href="/"
//             className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-x-1 hover:border-teal-500 hover:text-teal-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
//           >
//             <ArrowLeft size={16} />
//             " "
//           </Link>

//           {/* Heading */}
//           <div className="max-w-3xl">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-400">
//               <Award size={16} />
//               Certifications & Achievements
//             </div>

//             <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
//               My{" "}
//               <span className="text-teal-600 dark:text-teal-400">
//                 Certificates
//               </span>
//             </h1>

//             <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
//               A collection of certifications and learning achievements that
//               represent my continuous growth as a software developer.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Certificates */}
//       <section className="mx-auto max-w-6xl px-6 pb-20">
//         <div className="mb-10">
//           <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
//             Learning Journey
//           </p>

//           <h2 className="mt-2 text-3xl font-bold md:text-4xl">
//             Certifications
//           </h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {CERTIFICATES.map((certificate, index) => (
//             <article
//               key={`${certificate.title}-${index}`}
//               className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
//             >
//               {/* Decorative element */}
//               <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-500/5 transition-transform duration-500 group-hover:scale-150" />

//               <div className="relative flex items-start gap-5">

//                 {/* Icon */}
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition-all duration-300 group-hover:scale-110 dark:bg-teal-950 dark:text-teal-400">
//                   <Award size={28} />
//                 </div>

//                 {/* Content */}
//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white">
//                     {certificate.title}
//                   </h3>

//                   <p className="mt-2 font-medium text-teal-600 dark:text-teal-400">
//                     {certificate.issuer}
//                   </p>

//                   <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
//                     <Calendar size={15} />
//                     <span>{certificate.year}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Optional verification button */}
//               <button
//                 type="button"
//                 className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
//               >
//                 <ExternalLink size={15} />
//                 Certificate Details
//               </button>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* Passions */}
//       <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
//         <div className="mx-auto max-w-6xl px-6 py-20">

//           <div className="mx-auto mb-12 max-w-2xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
//               Beyond Coding
//             </p>

//             <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//               What Drives Me
//             </h2>

//             <p className="mt-4 text-slate-600 dark:text-slate-400">
//               Things that keep me motivated, curious, and focused on becoming
//               a better developer.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-3">
//             {PASSIONS.map((passion, index) => {
//               const Icon = passion.icon;

//               return (
//                 <article
//                   key={`${passion.title}-${index}`}
//                   className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-700 dark:hover:bg-slate-900"
//                 >
//                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-teal-950 dark:text-teal-400">
//                     <Icon size={30} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-bold">
//                     {passion.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
//                     {passion.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mx-auto max-w-6xl px-6 py-20">
//         <div className="overflow-hidden rounded-3xl bg-teal-600 px-6 py-12 text-center text-white shadow-xl shadow-teal-600/20 md:px-12">
//           <h2 className="text-3xl font-bold md:text-4xl">
//             Always Learning. Always Building.
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-teal-50">
//             I continuously explore new technologies, improve my development
//             skills, and build projects that turn ideas into real-world
//             solutions.
//           </p>

//           <Link
//             href="/"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-teal-700 transition-all hover:scale-105 hover:bg-slate-100"
//           >
//             <Heart size={18} />
//             Explore My Portfolio
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Calendar,
  Heart,
  Coffee,
  BookOpen,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { CERTIFICATES, PASSIONS } from "../data";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute right-[10%] top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

          

          {/* Heading */}
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-400">
              <Award size={16} />
              Certifications & Achievements
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              My{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Certificates
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              A collection of certifications and learning achievements that
              showcase my journey as a developer and my commitment to continuous
              learning.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                {CERTIFICATES.length}+
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Certifications
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                2024–2025
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Learning Journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">

        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            My Achievements
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Certifications
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Certifications I've earned through structured courses,
            programming practice, and continuous technical learning.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((certificate, index) => (
            <article
              key={`${certificate.title}-${index}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  priority={index < 3}
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-teal-700 shadow-lg backdrop-blur-sm dark:bg-slate-900/90 dark:text-teal-400">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="mb-4 flex items-center gap-2">
                  <Award
                    size={17}
                    className="text-teal-600 dark:text-teal-400"
                  />

                  <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    Certificate
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-7 text-slate-900 dark:text-white">
                  {certificate.title}
                </h3>

                <p className="mt-3 font-medium text-slate-700 dark:text-slate-300">
                  {certificate.issuer}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} />
                  <span>{certificate.year}</span>
                </div>

                {/* Details button */}
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                >
                  <ExternalLink size={15} />
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= PASSIONS ================= */}
      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-400">
              <Sparkles size={16} />
              Beyond Coding
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl">
              What Drives Me
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              The things that keep me motivated, curious, and focused on
              becoming a better developer.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {PASSIONS.map((passion, index) => {
              const Icon = passion.icon;

              return (
                <article
                  key={`${passion.title}-${index}`}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-teal-300 hover:bg-white hover:shadow-2xl hover:shadow-teal-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-teal-700 dark:hover:bg-slate-900"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 dark:bg-teal-950 dark:text-teal-400">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {passion.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    {passion.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-teal-600 px-6 py-14 text-center text-white shadow-2xl shadow-teal-600/20 md:px-12">

          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Heart size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Always Learning. Always Building.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-teal-50">
              I continuously explore new technologies, improve my development
              skills, and build projects that turn ideas into real-world
              solutions.
            </p>

           
          </div>
        </div>
      </section>
    </main>
  );
}