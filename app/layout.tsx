import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Pradeep Nigam | Full Stack & Next.js Developer Portfolio",
  description:
    "Developer portfolio of Pradeep Nigam - MERN Stack Developer, Next.js & React Specialist based in Bhopal, MP, India.",
  keywords: [
    "Pradeep Nigam",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Bhopal Developer",
  ],
  authors: [{ name: "Pradeep Nigam" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}