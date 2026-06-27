import { Heart } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import HeroBackground from "@/effects/HeroBackground";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-border-subtle bg-bg-dark px-5 py-10 md:px-6 transition-colors duration-200">
      <div className="absolute inset-0 z-0">
        <HeroBackground className="z-0" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:translate-x-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a
            href="#home"
            className="inline-flex text-xl font-extrabold tracking-tight text-(--text-accent-strong) transition-[color,opacity] duration-200 hover:opacity-80"
            aria-label="Back to home"
          >
            {siteConfig.name}
          </a>

          <p className="mt-4 max-w-md text-sm leading-7 text-(--text-body) transition-colors duration-200">
            Passionate about building modern, accessible, and meaningful digital
            experiences.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--text-heading) transition-colors duration-200">
            Navigate
          </h2>

          <ul className="mt-4 space-y-3">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-(--text-body) transition-colors duration-200 hover:text-(--text-accent-strong)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--text-heading) transition-colors duration-200">
            Connect
          </h2>

          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-(--text-body) transition-colors duration-200 hover:text-(--text-accent-strong)"
              >
                <GithubIcon size={16} aria-hidden="true" />
                GitHub
              </a>
            </li>

            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-(--text-body) transition-colors duration-200 hover:text-(--text-accent-strong)"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-border-subtle pt-6 text-sm text-(--text-muted) transition-colors duration-200 md:translate-x-5 md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} {siteConfig.name}
        </p>
        <p className="inline-flex items-center gap-1.5">
          Built with React, Vite, Tailwind CSS and{" "}
          <Heart
            size={14}
            className="fill-red-500 text-red-500"
            aria-hidden="true"
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
