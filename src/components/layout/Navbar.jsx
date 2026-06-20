import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu open/close
  const [isScrolled, setIsScrolled] = useState(false); // Adds shadow/blur when user scrolls down
  const [activeSection, setActiveSection] = useState("#home"); // Tracks current active page section

  // Detect scroll to toggle isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // 1. (FIXED TOP..) This locks the Navbar to the top of the viewport.
      // 2. (TRANSITION) Ensures that when the user scrolls down, the transition from transparent (tall padding) to blurred glassmorphic (shorter padding) animates smoothly.
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? // 1. (BG-BG..) This is the glassmorphic design pattern.
            // 2. (BACKDROP) Blurs the content behind the nav bar as the user scrolls
            "bg-bg-dark/80 backdrop-blur-md border-b border-border-subtle shadow-md py-4"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={() => setActiveSection("#home")}
          className="text-xl font-bold text-white tracking-wider hover:text-accent transition-colors"
        >
          SJ<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-accent ${
                activeSection === link.href ? "text-accent" : "text-zinc-400"
              }`}
            >
              {link.label}
              {/* Highlight bar underneath the active link */}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={() => setActiveSection("#contact")}
            className="border border-accent text-accent px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent hover:text-bg-dark transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-accent transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-18.25 left-0 w-full h-[calc(100vh-73px)] bg-bg-dark/95 backdrop-blur-lg border-t border-border-subtle flex flex-col justify-center items-center gap-8 z-40">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveSection(link.href);
                setIsOpen(false); // Close drawer after clicking
              }}
              className={`text-2xl font-semibold tracking-wide transition-colors ${
                activeSection === link.href ? "text-accent" : "text-zinc-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setActiveSection("#contact");
              setIsOpen(false);
            }}
            className="mt-4 border border-accent text-accent px-8 py-3 rounded-lg text-lg font-semibold hover:bg-accent hover:text-bg-dark transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
