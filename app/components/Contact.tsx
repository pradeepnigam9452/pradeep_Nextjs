"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project, opportunity or idea? Feel free to get
            in touch with me.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact information */}
          <div className="space-y-5">

            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-1 block text-slate-200 hover:text-blue-400"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Phone
                </p>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="mt-1 block text-slate-200 hover:text-blue-400"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-slate-200">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

          </div>

          {/* Contact form */}
          <form className="rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-8">

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-400">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-400">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}