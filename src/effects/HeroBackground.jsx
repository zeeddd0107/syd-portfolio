// This file is for the dynamic starry background effect in the Hero section.
import { useMemo, useEffect, useRef } from "react";

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// Each layer has its own parallax depth multiplier
// Far = slow movement, Close = fast wild movement
const LAYERS = [
  { count: 80, depth: 15, sizeRange: [0.8, 1.5], opacityRange: [0.2, 0.4] }, // Far — subtle
  { count: 50, depth: 40, sizeRange: [1.5, 2.5], opacityRange: [0.4, 0.7] }, // Mid — noticeable
  { count: 20, depth: 80, sizeRange: [2.5, 4.0], opacityRange: [0.6, 1.0] }, // Close — wild & fast
];

function HeroBackground({ className = "-z-10" }) {
  const layerRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  // Generate star data for all layers
  const layers = useMemo(() => {
    let seed = 0;
    return LAYERS.map((layer) => ({
      ...layer,
      stars: Array.from({ length: layer.count }, () => {
        const s = seed++;
        const size =
          seededRandom(s * 11) * (layer.sizeRange[1] - layer.sizeRange[0]) +
          layer.sizeRange[0];
        const opacity =
          seededRandom(s * 19) *
            (layer.opacityRange[1] - layer.opacityRange[0]) +
          layer.opacityRange[0];
        return {
          id: s,
          top: seededRandom(s * 3) * 100,
          left: seededRandom(s * 7) * 100,
          size,
          opacity,
          duration: seededRandom(s * 13) * 4 + 3,
          delay: seededRandom(s * 17) * 5,
          flare: seededRandom(s * 23) > 0.8,
        };
      }),
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a, b, t) => a + (b - a) * t;
    let time = 0;

    function animate() {
      time += 0.01; // Slow constant time multiplier for ambient floating

      // Fast lerp for snappy, wild response
      current.current.x = lerp(current.current.x, mouse.current.x, 0.08);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.08);

      // Apply a different transform to each layer based on its depth & auto-drift
      layerRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const depth = LAYERS[i].depth;

        // Create independent slow orbiting offsets for each layer
        // Index i variations give them different orbit speeds and directions
        const autoX = Math.cos(time * (1.0 + i * 0.2)) * 12 * (i + 1);
        const autoY = Math.sin(time * (0.8 + i * 0.15)) * 12 * (i + 1);

        const x = current.current.x * -depth + autoX;
        const y = current.current.y * -depth + autoY;

        ref.style.transform = `translate(${x}px, ${y}px)`;
      });

      rafId.current = requestAnimationFrame(animate);
    }

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 h-full w-full overflow-hidden pointer-events-none ${className}`}
    >
      {layers.map((layer, layerIndex) => (
        <div
          key={layerIndex}
          ref={(el) => (layerRefs.current[layerIndex] = el)}
          style={{
            position: "absolute",
            inset: "-100px",
            willChange: "transform",
          }}
        >
          {layer.stars.map((star) => (
            <span
              key={star.id}
              style={{
                position: "absolute",
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: "50%",
                backgroundColor: "var(--particle-color)",
                opacity: star.opacity,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
                boxShadow: star.flare
                  ? `0 0 ${star.size * 4}px ${star.size}px var(--particle-soft-glow),
                     0 0 ${star.size * 8}px ${star.size * 3}px var(--particle-glow)`
                  : `0 0 ${star.size * 2}px var(--particle-soft-glow)`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default HeroBackground;
