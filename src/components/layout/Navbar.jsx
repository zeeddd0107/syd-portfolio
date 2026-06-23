import { useState, useEffect, useRef } from "react";
import { Menu, Moon, X } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu open/close
  const [isScrolled, setIsScrolled] = useState(false); // Adds shadow/blur when user scrolls down
  const [activeSection, setActiveSection] = useState("#home"); // Tracks current active page section
  const [isVisible, setIsVisible] = useState(true); // Tracks whether the Navbar is shown.
  const lastScrollY = useRef(0); // Remembers the previous vertical position.
  const isNavigating = useRef(false);
  const navigationTimeout = useRef(null);

  const handleNavClick = (href) => {
    isNavigating.current = true;
    setIsVisible(true);
    setActiveSection(href);
    setIsOpen(false);

    clearTimeout(navigationTimeout.current);

    // Fallback for links that do not cause any scrolling
    navigationTimeout.current = setTimeout(() => {
      isNavigating.current = false;
      lastScrollY.current = window.scrollY;
    }, 500);
  };

  // Detect scroll direction and control Navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (isNavigating.current) {
        setIsVisible(true);

        clearTimeout(navigationTimeout.current);

        // Release the lock when navigation scrolling has stopped
        navigationTimeout.current = setTimeout(() => {
          isNavigating.current = false;
          lastScrollY.current = window.scrollY;
        }, 150);

        lastScrollY.current = currentScrollY;
        return;
      }

      // Update the active tab during manual scrolling
      const activationPoint = currentScrollY + window.innerHeight * 0.35;

      const currentSection = siteConfig.navLinks.reduce((activeHref, link) => {
        const section = document.querySelector(link.href);

        if (section && section.offsetTop <= activationPoint) {
          return link.href;
        }

        return activeHref;
      }, "#home");

      setActiveSection(currentSection);

      if (currentScrollY <= 20 || isOpen) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(navigationTimeout.current);
    };
  }, [isOpen]);

  return (
    <nav
      // 1. (FIXED TOP..) This locks the Navbar to the top of the viewport.
      // 2. (TRANSITION) Ensures that when the user scrolls down, the transition from transparent (tall padding) to blurred glassmorphic (shorter padding) animates smoothly.
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      } ${
        isScrolled
          ? "bg-bg-dark/80 backdrop-blur-md border border-border-subtle shadow-md"
          : "bg-bg-dark/60 backdrop-blur-md border border-border-subtle"
      }`}
    >
      <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-full">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(0,255,153,0.25)]"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle Placeholder — functionality will be added later */}
        <button
          type="button"
          aria-label="Theme toggle coming soon"
          aria-disabled="true"
          title="Theme toggle coming soon"
          className="flex h-9 w-16 items-center justify-between rounded-full border border-border-subtle bg-white/5 px-1.5 text-zinc-300 opacity-80 cursor-not-allowed"
        >
          <span
            aria-hidden="true"
            className="h-6 w-6 rounded-full bg-accent/70 shadow-sm"
          />
          <Moon size={15} aria-hidden="true" />
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/5 hover:text-accent transition-colors cursor-pointer"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile glass navigation dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+0.75rem)] left-1/2 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border-subtle bg-bg-dark/90 p-3 shadow-md backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`rounded-xl px-4 py-3 text-center text-base font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
