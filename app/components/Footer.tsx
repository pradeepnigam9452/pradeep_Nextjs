import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Pradeep Nigam. Built with care.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">

          {/* GitHub */}
          <a
            aria-label="GitHub"
            className="transition hover:text-cyan-300"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          {/* LinkedIn */}
          <a
            aria-label="LinkedIn"
            className="transition hover:text-cyan-300"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          {/* Email */}
          <a
            aria-label="Email"
            className="transition hover:text-cyan-300"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            <Mail className="h-5 w-5" />
          </a>

        </div>
      </div>
    </footer>
  );
}