"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "../data";
import { sendContactEmail } from "../lib/emailService";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      await sendContactEmail(formState);
      setSuccessMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      console.error("Contact Form Error:", err);
      // Fallback user notification if EmailJS env vars are pending configuration
      if (err?.message?.includes("EmailJS is not fully configured")) {
        setErrorMessage("EmailJS credentials are pending setup in environment variables (.env.local). You can also contact me directly via Email or WhatsApp below!");
      } else {
        setErrorMessage(err?.text || err?.message || "Failed to send message. Please try again or reach out directly via Email/WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-teal-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
            Get In Touch
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            Let's <span className="text-amber-500 dark:text-amber-400">Work Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)] text-base sm:text-lg">
            Have a project in mind, a freelance opportunity, or want to discuss source code? Reach out through any channel below!
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Professional Developer Contact Options Hub */}
          <div className="lg:col-span-5 space-y-5">
            
            <h3 className="text-lg font-extrabold text-[var(--text-main)] tracking-tight">
              Contact Options
            </h3>

            {/* Email Option Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-xs transition-all hover:border-amber-400 hover:shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                  Direct Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-0.5 block truncate text-sm font-bold text-[var(--text-main)] transition hover:text-teal-800 dark:hover:text-teal-400"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Option Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 shadow-xs transition-all hover:border-emerald-500 hover:shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  WhatsApp Direct Chat
                </p>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block text-sm font-bold text-[var(--text-main)] transition hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-xs transition-all hover:border-amber-400 hover:shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                  Location
                </p>
                <p className="mt-0.5 text-sm font-bold text-[var(--text-main)]">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* Social & Developer Profiles Hub */}
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-4">
                Developer Profiles &amp; Socials
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-amber-400 hover:text-amber-500"
                >
                  <FiGithub className="h-4 w-4 text-amber-500" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-amber-400 hover:text-amber-500"
                >
                  <FiLinkedin className="h-4 w-4 text-amber-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-pink-500 hover:text-pink-500"
                >
                  <FaInstagram className="h-4 w-4 text-pink-500" />
                  <span>Instagram</span>
                </a>

                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-emerald-500 hover:text-emerald-500"
                >
                  <FaWhatsapp className="h-4 w-4 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-3.5 py-2.5 text-xs font-bold text-[var(--text-main)] transition hover:border-amber-400 hover:text-amber-500"
                >
                  <SiLeetcode className="h-4 w-4 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with EmailJS Integration */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 shadow-xl sm:p-10"
            >
              <h3 className="text-xl font-extrabold text-[var(--text-main)] mb-2">
                Send Me a Message
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-medium mb-6">
                Fill out the form below to send an email directly to my inbox.
              </p>

              {/* Status Alert Messages */}
              {successMessage && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 text-sm font-bold text-rose-700 dark:text-rose-300">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Pradeep Nigam"
                    disabled={loading}
                    className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-4 py-3.5 text-sm font-bold text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-subtle)] focus:border-teal-700 dark:focus:border-teal-400 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    disabled={loading}
                    className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-4 py-3.5 text-sm font-bold text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-subtle)] focus:border-teal-700 dark:focus:border-teal-400 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Project Discussion / Freelance / Job Opportunity"
                  disabled={loading}
                  className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-4 py-3.5 text-sm font-bold text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-subtle)] focus:border-teal-700 dark:focus:border-teal-400 disabled:opacity-50"
                />
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or requirement..."
                  disabled={loading}
                  className="w-full resize-none rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card-alt)] px-4 py-3.5 text-sm font-bold text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-subtle)] focus:border-teal-700 dark:focus:border-teal-400 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-700 px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-teal-800 hover:shadow-xl dark:bg-teal-600 dark:hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}