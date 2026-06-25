import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectTechnologyIcons } from "@/data/projectTechnologyIcons";
import SpotlightLayer from "@/components/ui/SpotlightLayer";
import { handleSpotlightMove } from "@/utils/spotlight";

function ProjectCard({ project, onViewProject }) {
  const { title, description, technologies, image, imageAlt } = project;

  return (
    <motion.article
      role="button"
      tabIndex={0}
      onMouseMove={handleSpotlightMove}
      onClick={() => onViewProject(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onViewProject(project);
        }
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        borderColor: "#1E9E68",
        boxShadow: "0 0 30px rgba(0, 255, 153, 0.15)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        y: { duration: 0.25 },
        borderColor: { duration: 0.25 },
        boxShadow: { duration: 0.25 },
      }}
      className="group group/spotlight relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border-subtle bg-(--surface-card) backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <SpotlightLayer />
      <div className="relative z-10 aspect-4/3 overflow-hidden border-b border-border-subtle bg-bg-elevated sm:aspect-video">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-500"
          />
        ) : (
          <div
            role="img"
            aria-label={imageAlt}
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-accent/10 via-(--surface-card) to-bg-dark transition-transform duration-500"
          >
            <span className="text-sm font-medium tracking-wide text-(--text-muted)">
              Project preview coming soon
            </span>
          </div>
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-lg font-bold text-(--text-heading) transition-colors duration-300 group-hover:text-accent sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-(--text-body) sm:text-[0.875rem]">
          {description}
        </p>

        <ul
          className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => {
            const icon = projectTechnologyIcons[technology];
            const IconComponent =
              icon?.type === "component" ? icon.source : null;

            return (
              <li
                key={technology}
                className="flex items-center gap-1 rounded-full border border-border-subtle bg-(--surface-hover) px-2.5 py-1 text-[0.7rem] font-medium text-(--text-body) transition-colors duration-300 group-hover:border-accent/10 sm:gap-1.5 sm:px-3 sm:text-xs"
              >
                {icon?.type === "image" && (
                  <img
                    src={icon.source}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-3.5 object-contain"
                  />
                )}

                {IconComponent && (
                  <IconComponent
                    size={14}
                    aria-hidden="true"
                    className="text-white"
                  />
                )}

                <span>{technology}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex items-center justify-end pt-6">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onViewProject(project);
            }}
            aria-label={`View ${title} project details`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--text-muted) transition-colors duration-300 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
