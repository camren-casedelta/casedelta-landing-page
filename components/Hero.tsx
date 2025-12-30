"use client";

import { motion } from "framer-motion";

interface HeroProps {
  variant?: "side" | "bottom";
}

export function Hero({ variant = "side" }: HeroProps) {
  const isSideLayout = variant === "side";

  return (
    <section className="section">
      <div className="container">
        <div
          className={`${
            isSideLayout
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "flex flex-col items-center text-center max-w-4xl mx-auto"
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className={isSideLayout ? "" : "mb-12"}
          >
            <h1
              className="mb-6"
              style={{
                fontSize: "var(--font-size-hero)",
                lineHeight: "var(--line-height-tight)",
                letterSpacing: "var(--letter-spacing-tight)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-text-high-contrast)",
              }}
            >
              Get documents from clients{" "}
              <span style={{ color: "var(--color-text-secondary)" }}>
                without the follow-up headache
              </span>
            </h1>

            <p
              className="mb-8 max-w-2xl"
              style={{
                fontSize: "var(--font-size-large)",
                lineHeight: "var(--line-height-default)",
                color: "var(--color-text-secondary)",
              }}
            >
              CaseDelta uses AI to automatically remind clients, verify
              documents, and ensure you get exactly what you need—faster and
              with zero manual follow-up.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-button-primary)",
                  color: "var(--color-button-primary-text)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Get Started Free
              </button>

              <button
                className="px-6 py-3 rounded-lg border transition-all hover:bg-[var(--color-surface-hover)]"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative aspect-video rounded-xl overflow-hidden border"
            style={{
              backgroundColor: "var(--color-surface-secondary)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-center"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p style={{ fontSize: "var(--font-size-small)" }}>
                  Product Demo Video
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
