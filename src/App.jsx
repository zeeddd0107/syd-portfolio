import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components"; // 1. Import from our barrel file using path alias

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
      <Navbar /> {/* 2. Place the Navbar outside the main wrapper */}
      {/* 3. Main layout wrapper. Note the pt-24 (padding top) */}
      <main className="min-h-screen pt-24 px-6 flex flex-col items-center justify-between">
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-accent mb-2">Scroll Down</h1>
          <p className="text-zinc-500">
            Testing smooth scrolling with Navbar...
          </p>
        </div>

        <div className="h-[150vh] flex items-center justify-center border-y border-zinc-800 my-20">
          <div className="bg-bg-card border border-border-accent p-8 rounded-2xl shadow-glow">
            <p className="text-zinc-300 font-medium">
              Feel how the scroll decelerates smoothly? That's Lenis!
            </p>
          </div>
        </div>

        <div className="py-20 text-center">
          <p className="text-zinc-500">You've reached the bottom!</p>
        </div>
      </main>
    </>
  );
}

export default App;
