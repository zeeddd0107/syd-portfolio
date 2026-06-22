import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

// Option A: Character-by-character typewriter reveal
export function TypewriterEffect({ words, className, cursorClassName }) {
  const [isComplete, setIsComplete] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const wordsArray = words.map((word) => ({
    ...word,
    chars: word.text.split(""),
  }));

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
        // Small breath pause before typing starts again
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
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block">
            {word.chars.map((char, charIndex) => (
              <motion.span
                initial={{ opacity: 0 }}
                key={`char-${charIndex}`}
                className={cn(`opacity-0 ${word.className || ""}`, "char")}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>
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
            "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-accent vertical-middle align-middle",
            cursorClassName,
          )}
        />
      )}
    </div>
  );
}
