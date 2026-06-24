import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import HeroBackground from "@/effects/HeroBackground";
import ScrollFloat from "@/lib/react-bits/ScrollFloat";

function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitMessage(
      "Thanks for reaching out. This form UI is ready and will be connected soon.",
    );
  };

  const handleSpotlightMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:translate-x-5 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-accent sm:text-sm sm:tracking-[0.2em]"
          >
            Contact
          </motion.span>

          <ScrollFloat
            containerClassName="mt-3 w-full text-center"
            textClassName="text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-tight tracking-tight text-white"
            stagger={0.02}
            ease="power2.out"
            scrollStart="top bottom"
          >
            Hire me
          </ScrollFloat>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-body sm:text-base md:text-lg"
          >
            I'm always open to new opportunities and meaningful collaborations.
            If you think I'd be a great fit for your team, I'd be happy to hear
            from you. Send me a message, and I'll get back to you soon.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
          className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <aside
            onMouseMove={handleSpotlightMove}
            className="group/spotlight relative overflow-hidden rounded-3xl border border-border-subtle bg-[#111211]/90 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-3 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgb(225,250,240),transparent_40%)]" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Get in touch
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Let's turn an idea into something useful.
              </h3>

              <p className="mt-4 text-sm leading-7 text-body sm:text-base">
                The fastest way is email. I reply within a working day.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group/contact-link flex items-center gap-4 rounded-2xl border border-border-subtle bg-white/5 p-4 transition-colors duration-300 hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail size={20} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Email
                    </span>
                    <span className="block text-sm text-body transition-colors duration-300 group-hover/contact-link:text-accent">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contact-link flex items-center gap-4 rounded-2xl border border-border-subtle bg-white/5 p-4 transition-colors duration-300 hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GithubIcon size={20} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-white">
                      GitHub
                    </span>
                    <span className="block text-sm text-body transition-colors duration-300 group-hover/contact-link:text-accent">
                      zeeddd0107
                    </span>
                  </span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contact-link flex items-center gap-4 rounded-2xl border border-border-subtle bg-white/5 p-4 transition-colors duration-300 hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <LinkedinIcon size={20} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-white">
                      LinkedIn
                    </span>
                    <span className="block text-sm text-body transition-colors duration-300 group-hover/contact-link:text-accent">
                      Sydney Jimenez
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </aside>

          <form
            onMouseMove={handleSpotlightMove}
            className="group/spotlight relative overflow-hidden rounded-3xl border border-border-subtle bg-[#111211]/90 p-6 backdrop-blur-md sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-3 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgb(225,250,240),transparent_40%)]" />
            <div className="relative z-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Send a message
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Let's start the conversation.
                </h3>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border-subtle bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-accent/70"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-border-subtle bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-accent/70"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project, opportunity, or collaboration"
                  className="w-full rounded-2xl border border-border-subtle bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-accent/70"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your idea..."
                  className="min-h-40 w-full resize-y rounded-2xl border border-border-subtle bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-accent/70"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-bold text-bg-dark transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto"
              >
                Send Message
              </button>
              {submitMessage && (
                <p
                  role="status"
                  className="mt-4 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-accent"
                >
                  {submitMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
