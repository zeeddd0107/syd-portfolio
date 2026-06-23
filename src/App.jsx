import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components"; // 1. Import from our barrel file using path alias
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";

function App() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-24">
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
