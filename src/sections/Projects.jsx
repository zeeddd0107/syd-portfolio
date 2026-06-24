import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import ScrollFloat from "@/lib/react-bits/ScrollFloat";
import ProjectModal from "@/components/ui/ProjectModal";
import HeroBackground from "@/effects/HeroBackground";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:translate-x-5 md:px-6">
        <div className="mb-10 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-accent sm:text-sm sm:tracking-[0.2em]"
          >
            Selected Work
          </motion.span>

          <ScrollFloat
            containerClassName="mt-3 sm:mt-4 md:mt-2 mb-2 w-full text-center md:text-left"
            textClassName="text-[clamp(1.5rem,8vw,2.25rem)] sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            stagger={0.02}
            ease="power2.out"
            scrollStart="top bottom"
          >
            Projects
          </ScrollFloat>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-body sm:text-base md:mx-0 md:text-lg"
          >
            A cross-section of platforms, tools, and architectures — from
            passion projects to polished applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12 xl:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={
                project.size === "wide"
                  ? "md:col-span-2 xl:col-span-8"
                  : "md:col-span-1 xl:col-span-4"
              }
            >
              <ProjectCard
                project={project}
                onViewProject={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
