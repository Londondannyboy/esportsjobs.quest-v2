"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

interface AnimatedTaglineProps {
  is3DMode?: boolean;
  firstName?: string | null;
}

export function AnimatedTagline({ is3DMode = false, firstName }: AnimatedTaglineProps) {
  const prefersReducedMotion = useReducedMotion();

  // Determine tagline text based on mode and login status
  const getTaglineText = () => {
    if (is3DMode && firstName) {
      return `WELCOME, ${firstName.toUpperCase()}`;
    }
    if (is3DMode) {
      return "JOIN THE ESPORTS REVOLUTION";
    }
    return "JOIN THE REVOLUTION";
  };

  const taglineText = getTaglineText();
  const srText = is3DMode && firstName
    ? `Welcome, ${firstName}, to the Esports Revolution`
    : is3DMode
    ? "Join the Esports Revolution"
    : "Join the Revolution";

  return (
    <div className="relative mb-8">
      {/* Screen reader accessible text */}
      <span className="sr-only">{srText}</span>

      {/* Main animated tagline */}
      <motion.div
        className="text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={taglineText} // Re-animate when text changes
            className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
            style={{
              background: "linear-gradient(90deg, #00fff2, #bf00ff, #ff00aa, #00fff2)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              backgroundPosition: prefersReducedMotion ? "0% 50%" : ["0% 50%", "100% 50%", "0% 50%"],
            }}
            exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.1 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {taglineText}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Animated neon glow line underneath */}
      <motion.div
        className="relative h-1 mx-auto mt-4 rounded-full overflow-hidden"
        style={{ maxWidth: is3DMode ? "700px" : "500px" }}
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, #00fff2, #bf00ff, #ff00aa, #00fff2, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ["0% 50%", "200% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm"
          style={{
            background: "linear-gradient(90deg, transparent, #00fff2, #bf00ff, #ff00aa, #00fff2, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ["0% 50%", "200% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating particles effect - hidden when reduced motion preferred */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#00fff2" : "#bf00ff",
                left: `${15 + i * 15}%`,
                top: "50%",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Glowing text variant for other uses
export function GlowingText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 blur-lg opacity-50"
        style={{
          background: "linear-gradient(90deg, #00fff2, #bf00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
