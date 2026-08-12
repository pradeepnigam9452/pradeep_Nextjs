import {
  Code2,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  FileCode,
  Palette,
  Zap,
  Globe,
  Layout,
  Server,
  Cpu,
  Network,
  Database,
  GitBranch,
  Send,
  Cloud,
  CheckCircle2, KeyRound
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import PROJECT_IMG_1 from "./assets/ct.png";
import PROJECT_IMG_2 from "./assets/task.png";
import PROJECT_IMG_4 from "./assets/wethere.png";
import PROJECT_IMG_6 from "./assets/book.png";
import PROJECT_IMG_7 from "./assets/pro.png";
import PROJECT_IMG_8 from "./assets/portfolio.png";
import PROJECT_IMG_9 from "./assets/demo1.png";
import PROJECT_IMG_10 from "./assets/food.png";
import PROJECT_IMG_11 from "./assets/gocart.png";

// Live project images 
import Live_img_1 from "./assets/live (3).png";
import Live_img_2 from "./assets/live (2).png";
import Live_img_3 from "./assets/live (1).png";
import Live_img_4 from "./assets/live (4).png";
import Live_img_5 from "./assets/live (5).png";

export const PERSONAL_INFO = {
  name: "Pradeep Nigam",
  greeting: "Hi, I Am",
  nameHighlight: "Pradeep Nigam.",
  roleHighlight: "Full Stack Developer.",
  role: "MERN Stack Developer | Next.js Developer |  Native Developer",
  shortRole: "Full Stack Developer",
  location: "Bhopal, Madhya Pradesh, India",
  bio: "I build modern, scalable and user-friendly web applications using React, Next.js, Node.js, Express.js and MongoDB. Available for freelance work and professional opportunities.",
  aboutText:
    "I am a passionate MERN Stack and Next.js developer who loves transforming ideas into functional, production-ready applications. With experience in designing scalable RESTful APIs, building responsive frontends, and managing MongoDB databases, I focus on delivering seamless user experiences and maintainable architecture.",
  email: "pradeepnigam9452@gmail.com",
  phone: "+91 8305729451",
  whatsapp: "https://wa.me/918305729451?text=Hi%20Pradeep%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  whatsappNumber: "918305729451",
  instagram: "https://www.instagram.com/_prince_nigam",
  instagramHandle: "@_prince_nigam",
  github: "https://github.com/pradeepnigam9452",
  linkedin: "https://www.linkedin.com/in/pradeep-nigam-601a85269",
  leetcode: "https://leetcode.com/u/pradeep_nigam/",
  resume: "/Pradeep_Nigam_Resume.pdf",
  profileImage: MEE_IMG,
  status: "Available for Freelance & Projects",
};

// ===================== STATS =====================
export const STATS = [
  { number: "01+", label: "YEARS EXPERIENCE", highlight: true },
  { number: "10+", label: "PROJECTS COMPLETED", highlight: false },
  { number: "05+", label: "TECH STACK MASTERED", highlight: false },
];

// ===================== WORK EXPERIENCE =====================
export const WORK_EXPERIENCE = {
  company: "Binarylogix Technology LLP",
  position: "MERN Stack Developer Intern",
  period: "Recent / Ongoing",
  location: "Bhopal, MP",
  type: "Internship",
  summary:
    "Architecting and developing production web applications, administrative tools, and internal management platforms using the MERN stack ecosystem.",
  skills: [
    "MERN Stack",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Staff Management Systems",
    "Attendance Management",
    "Leave Management",
    "Project Management",
  ],
  responsibilities: [
    "Developed staff management systems with role-based access control and dashboard analytics.",
    "Built attendance management system allowing automated clock-in/out and record exports.",
    "Implemented leave management workflow for employee requests and manager approvals.",
    "Created project management features for task tracking and progress reporting.",
    "Designed and tested REST APIs using Node.js, Express.js, and MongoDB.",
    "Engineered responsive user interfaces with React.js, Next.js, and Tailwind CSS.",
  ],
};

// ===================== SKILLS CATEGORIZED =====================


export const SKILLS_CATEGORIZED = {
  Frontend: [
    { name: "HTML5", icon: FileCode },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Zap },
    { name: "React.js", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "Tailwind CSS", icon: Layout },
  ],

  Backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Cpu },
    { name: "REST APIs", icon: Network },
    { name: "JWT Authentication", icon: KeyRound },
    { name: "Nodemailer", icon: Mail },
  ],

  Database: [
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Mongoose", icon: Database },
  ],

  Other: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: FiGithub },
    { name: "Postman", icon: Send },
    { name: "VS Code", icon: Code2 },
    { name: "Firebase", icon: Cloud },
    { name: "Cloudinary", icon: Cloud },
  ],
};



export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "Next.js",
  "Vite",
  "React",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Postman",
];

import MEE_IMG from "./assets/mee.jpeg";
import CERT_1 from "./assets/hakerrank.png";
import CERT_2 from "./assets/full_stack.jpeg";
import CERT_3 from "./assets/45days.png";
import CERT_4 from "./assets/js.png";
import CERT_5 from "./assets/FSD.png";

// ===================== CERTIFICATES =====================

export const CERTIFICATES = [
  {
    title: "Java Programming Certificate",
    issuer: "HackerRank",
    year: "July 21, 2025",
    image: CERT_1,
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "Udemy",
    year: "July 26, 2024",
    image: CERT_2,
  },
  {
    title: "Certification in Full Stack Web Development & DSA",
    issuer: "Coding Thinker, Bhopal",
    year: "July 26, 2024",
    image: CERT_5,
  },
  {
    title: "JavaScript Programming Certificate",
    issuer: "HackerRank",
    year: "July 21, 2025",
    image: CERT_4,
  },
  {
    title: "Problem Solving and Programming",
    issuer: "Coding Thinker | Simplilearn",
    year: "July 26, 2025",
    image: CERT_3,
  },
];

// ===================== LIVE PROJECTS =====================
export const LIVE_PROJECTS = [
  {
    id: 1,
    title: "Binarylogix Technology LLP Portfolio",
    description:
      "A full-stack company portfolio and staff-management platform featuring project showcases, career opportunities, attendance tracking, and administrative tools.",
    role: "Full Stack MERN Developer",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: Live_img_1,
    liveUrl: "https://www.portfolio.binarylogix.in/careers",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 2,
    title: "WPIFD Property Finder",
    description:
      "A property-discovery platform that allows users to browse, search, and explore property listings through an intuitive interface.",
    role: "Full Stack Developer",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
    tags: ["Node.js", "Express.js", "React.js", "MongoDB"],
    image: Live_img_2,
    liveUrl: "https://www.wpifd.com/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "SaloonWala",
    description:
      "A responsive salon-services platform that helps users explore salon services and connect with beauty professionals through a user-friendly interface.",
    role: "Frontend Specialist",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    image: Live_img_3,
    liveUrl: "https://www.saloonwala.in/",
    githubUrl: "",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Vedvani Spiritual Platform",
    description:
      "A spiritual platform where users can explore pujas, understand their benefits, select puja types, and book religious services online.",
    role: "MERN Stack Developer",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: Live_img_4,
    liveUrl: "https://vedvani.org/",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 5,
    title: "Best Advocate Bhopal",
    description:
      "A professional legal-services website that presents advocate expertise, practice areas, consultation details, and contact information.",
    role: "Full Stack Web Developer",
    technologies: ["Node.js", "React.js", "Tailwind CSS", "JavaScript"],
    tags: ["Node.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: Live_img_5,
    liveUrl: "https://www.bestadvocatebhopal.com/",
    githubUrl: "",
    featured: true,
    category: "Business Website",
  },
];

export const livePROJECTS = LIVE_PROJECTS;

// ===================== FEATURED PROJECTS =====================
export const PROJECTS = [
  {
    id: 6,
    title: "DemoTech Technology",
    description:
      "A full-stack web application that delivers a modern and responsive user experience with efficient backend and database integration.",
    image: PROJECT_IMG_9,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://demotech-one.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 7,
    title: "Property Finder",
    description:
      "A property discovery platform that allows users to browse, search, and explore property listings through an easy-to-use interface.",
    image: PROJECT_IMG_7,
    tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
    liveUrl: "https://property-finder-rose.vercel.app/listings",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my projects, technical skills, professional experience, and development work.",
    image: PROJECT_IMG_8,
    tags: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://pradeepnigam.vercel.app/",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "Frontend",
  },
  {
    id: 9,
    title: "GoCart E-Commerce",
    description:
      "A responsive e-commerce application that allows users to explore products, manage their cart, and enjoy a smooth shopping experience.",
    image: PROJECT_IMG_11,
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://gocart-wine-pi.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "E-Commerce",
  },
  {
    id: 10,
    title: "Food Ordering App",
    description:
      "A responsive food-ordering application that allows users to explore food items and interact with a clean, user-friendly interface.",
    image: PROJECT_IMG_10,
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://food-ten-indol.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Web App",
  },
  {
    id: 11,
    title: "Weather App",
    description:
      "A responsive weather application featuring city and postcode search, autocomplete suggestions, real-time weather data, and a dynamic interface.",
    image: PROJECT_IMG_4,
    tags: ["HTML5", "CSS3", "JavaScript", "WeatherAPI"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Web App",
  },
  {
    id: 12,
    title: "Book Store App",
    description:
      "A full-stack bookstore application that allows users to browse and search for books through a responsive and user-friendly interface.",
    image: PROJECT_IMG_6,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://bo-ok-store-iaku.vercel.app/",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 13,
    title: "Coaching Center Management",
    description:
      "A management system designed to handle coaching-center operations, including students, courses, batches, staff, and real-time communication.",
    image: PROJECT_IMG_1,
    tags: ["HTML5", "CSS3", "JavaScript", "WebSocket", "Express.js"],
    liveUrl: "https://ct-coaching.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 14,
    title: "Task Management Application",
    description:
      "A full-stack task management application featuring secure authentication, session handling, and complete CRUD operations.",
    image: PROJECT_IMG_2,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://task-app-frontend-woad.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "MERN Stack",
  },
];

// ===================== JOURNEY STEPS =====================
export const JOURNEY_STEPS = [
  {
    year: "april - 2026 - Present",
    title: "MERN Stack Developer Intern",
    company: "Binarylogix Technology LLP",
    description:
      "Engineered full-stack applications, staff management platforms, attendance tracking, and REST APIs using MongoDB, Express, React, Node.js, and Next.js.",
    icon: Briefcase,
    color: "bg-teal-600",
  },
  {
    year: "Dec 2025 - Mar 2026",
    title: "Frontend Developer Intern",
    company: "Upstare Research — Bhopal",
    description:
      "Developing responsive and user-friendly web applications using React.js and Next.js, implementing reusable UI components, integrating REST APIs, and optimizing applications for performance and responsiveness.",
    icon: Briefcase,
    color: "bg-teal-600",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science & Engineering",
    company: "IES University Bhopal",
    description:
      "Pursued B.Tech degree in CSE, gaining deep technical knowledge in Data Structures, Algorithms, Software Engineering, and Web Technologies.",
    icon: GraduationCap,
    color: "bg-amber-500",
  },
  {
    year: "2022",
    title: "Started Software Development Journey",
    company: "Self-Driven Learning",
    description:
      "Built core programming foundations in JavaScript, Data Structures, Web Development, and algorithm problem solving.",
    icon: Rocket,
    color: "bg-teal-600",
  },
  {
    year: "2021",
    title: "Completed Senior Secondary (12th)",
    company: "High School Education",
    description: "Completed 12th Grade with 74% with focus on Mathematics and Computer Science.",
    icon: BookOpen,
    color: "bg-stone-500",
  },
  {
    year: "2019",
    title: "Completed High School (10th)",
    company: "Satna, MP",
    description: "Completed 10th Grade at Satna, Madhya Pradesh with 77%.",
    icon: CheckCircle2,
    color: "bg-stone-400",
  },
];

// ===================== PASSIONS =====================
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive, responsive interfaces that users enjoy.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex backend and frontend challenges into clean solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Keeping pace with modern web stacks, Next.js updates, and best practices.",
  },
];

// ===================== SOCIAL LINKS =====================
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/pradeepnigam9452",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/pradeep-nigam-601a85269",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/_prince_nigam",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/918305729451?text=Hi%20Pradeep%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  },
  {
    name: "LeetCode",
    icon: FiTwitter,
    url: "https://leetcode.com/u/pradeep_nigam/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:pradeepnigam9452@gmail.com",
  },
];

// ===================== FREELANCE SERVICES =====================
export const FREELANCE_SERVICES = [
  {
    title: "Website Development",
    description: "High-performance, modern, and SEO-optimized business websites tailored to convert visitors.",
  },
  {
    title: "MERN Stack Development",
    description: "End-to-end full stack web applications using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Next.js Development",
    description: "Lightning-fast Server-Side Rendered (SSR) & Static Site Generated (SSG) React apps.",
  },
  {
    title: "React Development",
    description: "Dynamic, scalable, and responsive component-driven frontends with state-of-the-art UI.",
  },
  {
    title: "Backend & API Development",
    description: "Secure, well-documented RESTful APIs, database design, and JWT user authentication.",
  },
  {
    title: "Full-Stack Applications",
    description: "Custom SaaS dashboards, internal admin systems, staff platforms, and online web apps.",
  },
  {
    title: "Business Websites",
    description: "Professional digital identity for agencies, law firms, salons, retail, and enterprises.",
  },
  {
    title: "Custom Web Applications",
    description: "Tailor-made web solutions designed around your exact business requirements and workflows.",
  },
];

// ===================== CONTACT INFO =====================
export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Bhopal, Madhya Pradesh, India" },
  { icon: Mail, label: "Email", value: "pradeepnigam9452@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8305729451" },
];
