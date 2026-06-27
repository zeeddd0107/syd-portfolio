import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import { socialLinks } from "@/data/socialLinks";
import profileImg from "@/assets/images/profile/developer_avatar.png";
import HeroBackground from "@/effects/HeroBackground";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

function Hero() {
  // Animation configuration (variants) for clean, staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 34,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden py-12 transition-colors duration-200"
    >
      {/* Galaxy background — sits behind all content via -z-10 */}
      <HeroBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-7xl md:translate-x-5 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12"
      >
        {/* Left Column: Text Info (takes 7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Subtle Accent Label */}
          <motion.span
            variants={itemVariants}
            className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-(--text-body) transition-colors duration-200 lg:text-base"
          >
            Hello World, I'm
          </motion.span>

          {/* Main Name Heading */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 42,
                scale: 0.96,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-(--text-accent-strong) transition-colors duration-200 sm:text-5xl md:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-xl font-semibold text-(--text-heading) transition-colors duration-200 sm:text-2xl"
          >
            <TypewriterEffect
              phrases={siteConfig.titles}
              cursorClassName="ml-1 md:ml-2 w-0.75 h-6 sm:h-4 md:h-4 lg:h-7 align-top"
            />
          </motion.h2>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-(--text-body) transition-colors duration-200 sm:text-lg lg:mx-0"
          >
            {siteConfig.bio}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href="#projects"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-(--button-primary-bg) px-8 py-3 font-semibold text-(--button-primary-text) transition-all duration-200 hover:opacity-90 sm:w-auto"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-(--button-secondary-border) bg-(--button-secondary-bg) px-8 py-3 font-semibold text-(--text-accent-strong) transition-all duration-200 hover:bg-(--button-secondary-hover) sm:w-auto"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                /* Add group relative to anchor the absolute tooltip and handle hover states */
                <div
                  key={link.name}
                  className="relative group flex flex-col items-center"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--text-muted) transition-colors duration-200 hover:text-(--text-accent-strong)"
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </a>

                  {/* Tooltip Container */}
                  <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-30">
                    {/* Tooltip Bubble */}
                    <span className="whitespace-nowrap rounded-md border border-border-subtle bg-bg-elevated px-2.5 py-1 text-xs font-medium text-(--text-heading) shadow-md transition-colors duration-200">
                      {link.name}
                    </span>
                    {/* Tooltip Arrow */}
                    <div className="-mt-1 h-1.5 w-1.5 rotate-45 border-r border-b border-border-subtle bg-bg-elevated transition-colors duration-200" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Profile Image (takes 5 cols on large screens) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center"
        >
          {/* Framed Image Card with glow and hover animation */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-(--avatar-surface) border border-(--avatar-border) p-3 shadow-[0_0_40px_var(--avatar-glow)]"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-transparent rounded-2xl pointer-events-none" />

            {/* Rendered Image */}
            <img
              src={profileImg}
              alt={siteConfig.name}
              className="w-full h-full object-cover rounded-xl"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
