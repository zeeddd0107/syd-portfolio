import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import ScrollFloat from "@/lib/react-bits/ScrollFloat";

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Refs for scroll track and drag/hover states
  const scrollRef = useRef(null);
  const isHoveredContainer = useRef(false); // Track container hover state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // 1. JS Auto-Scroll Ticker Loop (Continuous, pauses on hover or drag)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;
    const speed = 0.8; // Scroll speed (pixels per frame)

    const animate = () => {
      // Auto-scroll only if NOT dragging and NOT hovering over the container
      if (!isDragging && !isHoveredContainer.current) {
        el.scrollLeft += speed;

        // Seamless loop reset: when we scroll past the first copy of the list
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth; // subtract to keep sub-pixel remainders
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isDragging]);

  // 2. Mouse click-and-drag handlers for desktop users
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // adjust multiplier for drag sensitivity

    const el = scrollRef.current;
    el.scrollLeft = scrollLeftState - walk;

    // Seamless loop reset during manual drag
    const halfWidth = el.scrollWidth / 2;
    if (el.scrollLeft >= halfWidth) {
      el.scrollLeft -= halfWidth;
      setStartX(startX + halfWidth / 1.5);
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += halfWidth;
      setStartX(startX - halfWidth / 1.5);
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start">
        {/* Subtle Category Label - Animated */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-accent text-sm font-semibold tracking-[0.2em] uppercase"
        >
          What I Work With
        </motion.span>

        {/* Animated Heading using ScrollFloat */}
        <ScrollFloat
          containerClassName="-mt-3 mb-2"
          textClassName="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          stagger={0.02}
          ease="power2.out"
          scrollStart="top bottom"
        >
          Skills & Technologies
        </ScrollFloat>
      </div>

      {/* Carousel Scroll Container Wrapper - Animated */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative w-full overflow-hidden"
      >
        {/* Premium Edge Fading Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        {/* Horizontal Swipe/Scroll Track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          // AFTER — single onMouseLeave that does both
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={() => {
            handleMouseLeaveOrUp(); // stop drag
            isHoveredContainer.current = false; // stop auto-scroll pause
            setHoveredIndex(null); // clear card highlight
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            isHoveredContainer.current = true;
          }}
          className={`flex gap-6 overflow-x-auto pt-6 pb-8 px-8 sm:px-12 scrollbar-none w-full ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {/* We render the list twice to create a seamless loop */}
          {Array.from({ length: 2 }).map((_, listIdx) => (
            <div key={`list-${listIdx}`} className="flex gap-6 shrink-0">
              {skills.map((skill, skillIdx) => {
                const Icon = skill.icon;
                const uniqueKey = `${listIdx}-${skillIdx}`;
                const isHovered = hoveredIndex === uniqueKey;

                return (
                  <div
                    key={uniqueKey}
                    onMouseEnter={() => setHoveredIndex(uniqueKey)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      borderColor: isHovered
                        ? `${skill.color}`
                        : "rgba(255, 255, 255, 0.05)",
                      boxShadow: isHovered
                        ? `0 0 30px ${skill.color}25`
                        : "none",
                      transform: isHovered
                        ? "translateY(-6px) scale(1.03)"
                        : "translateY(0) scale(1)",
                    }}
                    className="group bg-bg-card/40 border backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center w-44 h-44 sm:w-48 sm:h-48 shrink-0 transition-all duration-300"
                  >
                    {/* Brand Logo - ALWAYS Colored */}
                    <div
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-105 pointer-events-none w-12 h-12 flex items-center justify-center"
                    >
                      {skill.isSvgFile ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Icon size={52} />
                      )}
                    </div>

                    {/* Skill Name */}
                    <span className="font-semibold text-lg text-zinc-300 group-hover:text-white mt-4 transition-colors duration-300 truncate w-full pointer-events-none">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
