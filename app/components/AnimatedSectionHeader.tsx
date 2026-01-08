"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface AnimatedSectionHeaderProps {
  /** The main text to display */
  text: string;
  /** Highlighted/colored portion of the text (will be gradient animated) */
  highlightText?: string;
  /** User's first name for personalization (e.g., "Dan's Career Journey") */
  firstName?: string | null;
  /** Text to show when user is logged in (replaces text) - use {name} placeholder */
  personalizedText?: string;
  /** Subtitle text below the header */
  subtitle?: string;
  /** Subtitle text when user is logged in - use {name} placeholder */
  personalizedSubtitle?: string;
  /** HTML heading level for SEO */
  as?: HeadingLevel;
  /** Color theme for the gradient highlight */
  theme?: "cyan" | "purple" | "pink" | "rainbow";
  /** Whether to show the animated underline */
  showUnderline?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const themeGradients = {
  cyan: "linear-gradient(90deg, #22d3ee, #06b6d4, #0ea5e9, #22d3ee)",
  purple: "linear-gradient(90deg, #a855f7, #9333ea, #7c3aed, #a855f7)",
  pink: "linear-gradient(90deg, #ec4899, #f472b6, #ff00aa, #ec4899)",
  rainbow: "linear-gradient(90deg, #00fff2, #bf00ff, #ff00aa, #00fff2)",
};

const themeUnderlines = {
  cyan: "linear-gradient(90deg, transparent, #22d3ee, #06b6d4, #22d3ee, transparent)",
  purple: "linear-gradient(90deg, transparent, #a855f7, #9333ea, #a855f7, transparent)",
  pink: "linear-gradient(90deg, transparent, #ec4899, #ff00aa, #ec4899, transparent)",
  rainbow: "linear-gradient(90deg, transparent, #00fff2, #bf00ff, #ff00aa, #00fff2, transparent)",
};

export function AnimatedSectionHeader({
  text,
  highlightText,
  firstName,
  personalizedText,
  subtitle,
  personalizedSubtitle,
  as: HeadingTag = "h2",
  theme = "cyan",
  showUnderline = true,
  className = "",
}: AnimatedSectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  // Replace {name} placeholder with actual name
  const replaceName = (str: string) => {
    if (!firstName) return str;
    return str.replace(/\{name\}/gi, firstName);
  };

  // Determine final text based on personalization
  const displayText = firstName && personalizedText ? replaceName(personalizedText) : text;
  const displaySubtitle = firstName && personalizedSubtitle ? replaceName(personalizedSubtitle) : subtitle;

  // Split text into parts if highlightText is provided
  const renderText = () => {
    if (!highlightText) {
      // No highlight - animate entire text with gradient
      return (
        <motion.span
          className="inline-block"
          style={{
            background: themeGradients[theme],
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {displayText}
        </motion.span>
      );
    }

    // Split text around highlight portion
    const parts = displayText.split(new RegExp(`(${highlightText})`, "gi"));

    return parts.map((part, index) => {
      if (part.toLowerCase() === highlightText.toLowerCase()) {
        return (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              background: themeGradients[theme],
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={prefersReducedMotion ? {} : {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {part}
          </motion.span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={`text-center ${className}`}>
      {/* SEO-friendly heading with animations */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <HeadingTag className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
          {renderText()}
        </HeadingTag>
      </motion.div>

      {/* Animated underline */}
      {showUnderline && (
        <motion.div
          className="relative h-1 mx-auto mb-4 rounded-full overflow-hidden"
          style={{ maxWidth: "300px" }}
          initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: themeUnderlines[theme],
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
              background: themeUnderlines[theme],
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
      )}

      {/* Subtitle */}
      {displaySubtitle && (
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {displaySubtitle}
        </motion.p>
      )}
    </div>
  );
}

// Simpler inline animated gradient text for use within paragraphs
export function AnimatedGradientText({
  children,
  theme = "cyan",
  className = "",
}: {
  children: React.ReactNode;
  theme?: "cyan" | "purple" | "pink" | "rainbow";
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className={`inline-block font-bold ${className}`}
      style={{
        background: themeGradients[theme],
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={prefersReducedMotion ? {} : {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
