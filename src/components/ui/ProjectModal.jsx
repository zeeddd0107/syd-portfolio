import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { projectTechnologyIcons } from "@/data/projectTechnologyIcons";

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [hoveredTechnology, setHoveredTechnology] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(() => {
    if (!project) return;

    const scrollY = window.scrollY;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyOverflow = document.body.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [project]);

  if (!project) return null;

  const {
    title,
    description,
    technologies,
    image,
    imageAlt,
    images,
    githubUrl,
    liveUrl,
  } = project;

  const projectImages =
    images?.length > 0 ? images : image ? [{ src: image, alt: imageAlt }] : [];

  const activeImage = projectImages[activeImageIndex] ?? projectImages[0];
  const hasMultipleImages = projectImages.length > 1;

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={() => {
          setActiveImageIndex(0);
          onClose();
        }}
        onWheel={(event) => {
          if (!contentRef.current) return;

          event.preventDefault();
          contentRef.current.scrollTop += event.deltaY;
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          ref={modalRef}
          onClick={(event) => event.stopPropagation()}
          className="relative flex max-h-[86vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-(--technology-tile-border) bg-(--surface-card) shadow-2xl sm:max-h-[88vh]"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-(--technology-tile-border) bg-(--surface-card) px-5 py-4 backdrop-blur-md sm:px-8 sm:py-5">
            <h3
              id="project-modal-title"
              className="text-2xl font-bold text-(--text-accent-strong) sm:text-3xl"
            >
              {title}
            </h3>

            <button
              type="button"
              onClick={() => {
                setActiveImageIndex(0);
                onClose();
              }}
              aria-label="Close project details"
              className="rounded-full p-2 text-(--text-muted) transition-colors duration-300 hover:bg-(--surface-hover) hover:text-(--text-heading) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div
            ref={contentRef}
            className="overflow-y-auto overscroll-contain p-5 sm:p-8"
          >
            <div className="relative overflow-hidden rounded-2xl border border-(--technology-tile-border) bg-bg-elevated">
              {activeImage ? (
                <>
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="aspect-video h-full w-full object-cover"
                  />

                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Show previous project image"
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/80 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <ChevronLeft size={22} aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Show next project image"
                        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/80 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <ChevronRight size={22} aria-hidden="true" />
                      </button>

                      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                        {projectImages.map((projectImage, index) => (
                          <button
                            key={projectImage.src}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`Show project image ${index + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                              activeImageIndex === index
                                ? "bg-(--text-accent-strong)"
                                : "bg-(--text-muted) opacity-50 hover:bg-(--text-accent-strong) hover:opacity-100"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div
                  role="img"
                  aria-label={
                    imageAlt || `${title} project preview placeholder`
                  }
                  className="flex aspect-video w-full items-center justify-center bg-linear-to-br from-accent/10 via-(--surface-card) to-bg-dark"
                >
                  <span className="text-sm font-medium tracking-wide text-(--text-muted)">
                    Project preview coming soon
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <p className="max-w-4xl text-sm leading-7 text-(--text-body) sm:text-base sm:leading-8">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${title} GitHub repository`}
                    className="inline-flex items-center gap-2 rounded-full border border-(--technology-tile-border) bg-(--button-secondary-bg) px-4 py-2 text-sm font-semibold text-(--text-heading) transition-colors duration-300 hover:border-(--text-accent-strong) hover:bg-(--button-secondary-hover) hover:text-(--text-accent-strong) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <GithubIcon size={17} aria-hidden="true" />
                    View Code
                  </a>
                )}

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${title} live site`}
                    className="inline-flex items-center gap-2 rounded-full bg-(--button-primary-bg) px-4 py-2 text-sm font-semibold text-(--button-primary-text) transition-colors duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <ExternalLink size={17} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="mt-10 border-t border-(--technology-tile-border) pt-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-(--text-muted)">
                  Built With
                </p>

                <ul
                  className="mt-6 flex flex-wrap justify-center gap-5"
                  aria-label={`${title} technologies`}
                >
                  {technologies.map((technology) => {
                    const icon = projectTechnologyIcons[technology];
                    const IconComponent =
                      icon?.type === "component" ? icon.source : null;

                    return (
                      <li
                        key={technology}
                        onMouseEnter={() => setHoveredTechnology(technology)}
                        onMouseLeave={() => setHoveredTechnology(null)}
                        className="group flex flex-col items-center justify-center gap-2 text-sm font-medium text-(--text-body) transition-colors duration-300 hover:text-(--text-accent-strong)"
                      >
                        <span
                          style={{
                            transform:
                              hoveredTechnology === technology
                                ? "scale(1.15)"
                                : "scale(1)",
                          }}
                          className="flex h-14 w-14 items-center justify-center transition-transform duration-300"
                        >
                          {icon?.type === "image" && (
                            <img
                              src={icon.source}
                              alt=""
                              aria-hidden="true"
                              className="h-9 w-9 object-contain"
                            />
                          )}

                          {IconComponent && (
                            <IconComponent
                              size={36}
                              aria-hidden="true"
                              className="text-(--technology-mono-icon)"
                            />
                          )}
                        </span>

                        <span>{technology}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
