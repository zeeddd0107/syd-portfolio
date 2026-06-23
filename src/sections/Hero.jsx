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
        staggerChildren: 0.15, // Stagger child animations by 0.15s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smooth custom ease curve
    },
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center py-12">
      {/* Galaxy background — sits behind all content via -z-10 */}
      <HeroBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Text Info (takes 7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Subtle Accent Label */}
          <motion.span
            variants={itemVariants}
            className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Hello World, I'm
          </motion.span>

          {/* Main Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent tracking-tight mb-4"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-primary mb-6"
          >
            <TypewriterEffect
              phrases={siteConfig.titles}
              cursorClassName="ml-1 md:ml-2 w-0.75 h-6 sm:h-4 md:h-4 lg:h-7 bg-accent align-top"
            />
          </motion.h2>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
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
              className="w-full sm:w-auto bg-accent text-bg-dark px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="w-full sm:w-auto border border-border-accent text-accent px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
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
                    className="text-zinc-500 hover:text-accent transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={22} />
                  </a>

                  {/* Tooltip Container */}
                  <div className="absolute bottom-full mb-2 flex flex-col items-center opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30">
                    {/* Tooltip Bubble */}
                    <span className="bg-bg-elevated text-white text-xs font-medium px-2.5 py-1 rounded-md border border-border-subtle whitespace-nowrap shadow-md">
                      {link.name}
                    </span>
                    {/* Tooltip Arrow */}
                    <div className="w-1.5 h-1.5 bg-bg-elevated border-r border-b border-border-subtle rotate-45 -mt-1" />
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
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-bg-card border border-border-accent p-3 shadow-glow"
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
