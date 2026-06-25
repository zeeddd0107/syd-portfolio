import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

// Option A: Character-by-character typewriter reveal
export function TypewriterEffect({ phrases, className, cursorClassName }) {
  const [isComplete, setIsComplete] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const currentPhrase = phrases[currentPhraseIndex];
  const characters = currentPhrase.split("");

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const runAnimation = async () => {
      // If this is a repeat cycle (trigger > 0), fade out the text first
      if (trigger > 0) {
        setIsComplete(false);
        await animate(
          "span.char",
          { opacity: 0 },
          {
            duration: 0.15,
            delay: stagger(0.04, { from: "last" }),
            ease: "easeInOut",
          },
        );

        // Move to the next phrase after the current phrase disappears
        // The % modulo operator returns to the first phrase after the final phrase.
        setCurrentPhraseIndex(
          (previousIndex) => (previousIndex + 1) % phrases.length,
        );

        // Wait for React to render the new phrase
        // The two requestAnimationFrame calls give React enough time to replace the old character elements before Framer Motion animates the new ones.
        await new Promise((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
          });
        });

        // Small pause before typing the new phrase
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      // Type the characters back in
      await animate(
        "span.char",
        { opacity: 1 },
        {
          duration: 0.1,
          delay: stagger(0.06),
          ease: "easeInOut",
        },
      );
      setIsComplete(true);
    };

    runAnimation();
  }, [isInView, animate, trigger]);

  // Set up the 8-second loop cycle
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div className={cn("inline-block", className)}>
      <motion.span ref={scope} className="inline">
        <span key={currentPhrase} className="inline-block">
          {characters.map((character, characterIndex) => (
            <motion.span
              initial={{ opacity: 0 }}
              key={`${currentPhrase}-${characterIndex}`}
              className="char opacity-0"
            >
              {character}
            </motion.span>
          ))}
        </span>
      </motion.span>
      {isComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-1 h-4 md:h-6 lg:h-8 bg-(--text-accent-strong) vertical-middle align-middle",
            cursorClassName,
          )}
        />
      )}
    </div>
  );
}
