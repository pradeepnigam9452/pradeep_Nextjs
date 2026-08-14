// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CertificatesPage from "./components/certificates"
// import Loader from "./components/Loader";
// import { FaWhatsapp } from "react-icons/fa";
// export default function Home() {
//   return (
//     <main className="relative min-h-screen">
//       <Loader />
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <CertificatesPage />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }


import { FaWhatsapp ,FaInstagram} from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificatesPage from "./components/certificates";
import Loader from "./components/Loader";
import {PERSONAL_INFO} from './data'
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Loader />

      <Navbar />

      <Hero />

      <About />

      <Experience />

      <CertificatesPage />

      <Skills />

      <Projects />

      <Contact />

      <Footer />


      <div className="group fixed right-6 top-[90%] z-[9999] md:right-8 lg:right-10">
  {/* Instagram - hidden by default */}
  <a
    href={PERSONAL_INFO.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      absolute
      bottom-[72px]
      right-0
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-gradient-to-tr
      from-[#feda75]
      via-[#d62976]
      to-[#4f5bd5]
      text-white
      opacity-0
      scale-75
      pointer-events-none
      shadow-[0_8px_30px_rgba(214,41,118,0.35)]
      transition-all
      duration-300
      group-hover:pointer-events-auto
      group-hover:opacity-100
      group-hover:scale-100
    "
  >
    <FaInstagram className="h-7 w-7" />
  </a>

  {/* WhatsApp */}
  <a
    href={PERSONAL_INFO.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-[#25D366]
      text-white
      shadow-[0_8px_30px_rgba(37,211,102,0.35)]
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)]
    "
  >
    <FaWhatsapp className="h-7 w-7" />
  </a>
</div>

 
    </main>
  );
}