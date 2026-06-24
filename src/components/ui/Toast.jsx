import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const toastStyles = {
  success: {
    title: "Success!",
    icon: CheckCircle2,
    accent: "bg-emerald-400",
    iconColor: "text-emerald-400",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.12)]",
  },
  error: {
    title: "Error!",
    icon: XCircle,
    accent: "bg-red-500",
    iconColor: "text-red-400",
    glow: "shadow-[0_0_30px_rgba(248,113,113,0.12)]",
  },
  warning: {
    title: "Warning!",
    icon: AlertTriangle,
    accent: "bg-amber-400",
    iconColor: "text-amber-400",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.12)]",
  },
  info: {
    title: "Heads up!",
    icon: Info,
    accent: "bg-blue-400",
    iconColor: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(96,165,250,0.12)]",
  },
};

function Toast({ toast, onClose }) {
  const isVisible = Boolean(toast);

  const type = toast?.type || "info";
  const styles = toastStyles[type] || toastStyles.info;
  const Icon = styles.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{
            opacity: 0,
            x: 40,
            y: -12,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            x: 40,
            y: -12,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`fixed right-4 top-6 z-50 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-2xl border border-border-subtle bg-[#111211]/95 text-white backdrop-blur-xl ${styles.glow} sm:right-6`}
        >
          <div
            className={`absolute left-0 top-0 h-full w-1 ${styles.accent}`}
          />

          <div className="flex items-start gap-4 p-5 pl-6">
            <span
              className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ${styles.iconColor}`}
            >
              <Icon size={20} aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1">
              <h3 className={`text-base font-bold ${styles.iconColor}`}>
                {toast.title || styles.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-body">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss notification"
              className="rounded-full p-2 text-zinc-400 transition-colors duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
