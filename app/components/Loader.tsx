"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Code2, Sparkles, Rocket, Zap, Coffee, Crown, Heart } from "lucide-react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [displayRole, setDisplayRole] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  
  const fullText = "Pradeep Nigam";
  const roles = useMemo(() => [
    "MERN Stack Developer",
    "Full Stack Engineer", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ], []);
  
  const facts = useMemo(() => [
    "🚀 Loading amazing experience",
    "💻 Compiling components", 
    "⚡ Optimizing performance",
    "🎯 Almost there..."
  ], []);

  // Smooth loading progress
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const duration = 3500;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "unset";
        }, 500);
      }
    };
    
    requestAnimationFrame(updateProgress);
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Smooth name typing
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Smooth role cycling
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;
    
    const animateRole = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayRole(currentRole.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(animateRole, 100);
      } else if (!isDeleting && charIndex > currentRole.length) {
        isDeleting = true;
        timeout = setTimeout(animateRole, 2000);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayRole(currentRole.slice(0, charIndex));
        charIndex--;
        timeout = setTimeout(animateRole, 50);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        timeout = setTimeout(animateRole, 100);
      }
    };
    
    timeout = setTimeout(animateRole, 500);
    return () => clearTimeout(timeout);
  }, [roles]);

  // Smooth fact rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % facts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [facts.length]);

  // Animation variants with proper typing
  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, rotateZ: -180 },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const roleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const factVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -8, 0],
      transition: {
        delay: i * 0.2,
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }),
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, -6, 0],
      scale: [1, 1.2, 1],
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          variants={containerVariants}
          initial={{ opacity: 1 }}
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)] overflow-hidden"
          style={{ willChange: "transform" }}
        >
          {/* Ambient background orbs - matching your theme */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-teal-500/10 dark:bg-teal-400/15 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-amber-400/10 dark:bg-amber-400/15 rounded-full blur-3xl"
            />
          </div>

          {/* Subtle grid pattern */}
          <motion.svg
            animate={{ opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ willChange: "opacity" }}
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-700/10 dark:text-teal-400/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </motion.svg>

          {/* Main content */}
          <div className="text-center relative z-10 px-8 max-w-4xl">
            {/* Icon with glow */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="flex justify-center mb-8"
            >
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="relative"
              >
                <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl dark:bg-teal-400/20" />
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-teal-500/10 to-amber-500/10 border border-teal-500/20 dark:border-teal-400/20 backdrop-blur-sm">
                  <Code2 className="w-14 h-14 md:w-16 md:h-16 text-teal-700 dark:text-teal-400" strokeWidth={1.5} />
                  
                  {/* Floating badges */}
                  <motion.div
                    custom={0}
                    variants={floatVariants}
                    animate="animate"
                    className="absolute -top-3 -right-3"
                  >
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={floatVariants}
                    animate="animate"
                    className="absolute -bottom-2 -left-2"
                  >
                    <div className="p-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500">
                      <Heart className="w-2.5 h-2.5 text-white fill-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Title - removed cursor */}
            <motion.div
              variants={titleVariants}
              initial="initial"
              animate="animate"
              className="relative mb-3"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-[var(--text-main)] via-teal-800 to-amber-500 bg-clip-text text-transparent dark:via-teal-300 dark:to-amber-400">
                  {displayText}
                </span>
              </h1>
            </motion.div>

            {/* Role with blinking underscore */}
            <motion.div
              variants={roleVariants}
              initial="initial"
              animate="animate"
              className="mt-4"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light">
                <span className="bg-gradient-to-r from-teal-700 to-amber-500 bg-clip-text text-transparent dark:from-teal-300 dark:to-amber-400">
                  {displayRole}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-teal-700 dark:text-teal-400 ml-0.5"
                >
                  _
                </motion.span>
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="h-0.5 rounded-full bg-[var(--border-strong)] overflow-hidden">
                <motion.div
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full bg-gradient-to-r from-teal-700 via-teal-500 to-amber-400 rounded-full dark:from-teal-400 dark:to-amber-400"
                  style={{ willChange: "width" }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-mono text-teal-700/60 dark:text-teal-400/60">
                  {Math.floor(progress)}%
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFact}
                    variants={factVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-xs font-mono text-teal-700/60 dark:text-teal-400/60"
                  >
                    {facts[currentFact]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Loading indicators */}
            <div className="mt-10">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs tracking-wider uppercase flex items-center gap-1.5 text-teal-700/80 dark:text-teal-400/80">
                  <Sparkles className="w-3 h-3" />
                  Loading
                  <Zap className="w-3 h-3" />
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={dotVariants}
                      animate="animate"
                      className="w-1.5 h-1.5 bg-gradient-to-br from-teal-700 to-amber-500 rounded-full dark:from-teal-400 dark:to-amber-400"
                    />
                  ))}
                </div>
              </div>
              
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs mt-3 flex items-center justify-center gap-1.5 text-teal-700/50 dark:text-teal-400/50"
              >
                <Coffee className="w-3 h-3" />
                Crafting experience
                <Rocket className="w-3 h-3" />
              </motion.p>
            </div>

            {/* Tech stack marquee */}
            <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-6 text-xs font-mono whitespace-nowrap text-teal-700/30 dark:text-teal-400/30"
              >
                {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
                  <span key={i}>{tech} •</span>
                ))}
                {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
                  <span key={`dup-${i}`}>{tech} •</span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Expanding circle transition */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: progress >= 100 ? 150 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-teal-700 to-amber-500 rounded-full dark:from-teal-400 dark:to-amber-400" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}