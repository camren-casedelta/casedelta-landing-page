"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ValuePropSectionProps {
  title: string;
  description: string;
  features: string[];
  imagePlaceholder?: string;
  reverse?: boolean;
  backgroundColor?: string;
}

export function ValuePropSection({
  title,
  description,
  features,
  imagePlaceholder = "Feature Illustration",
  reverse = false,
  backgroundColor,
}: ValuePropSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section"
      style={{
        backgroundColor: backgroundColor || "var(--color-background)",
      }}
    >
      <div className="container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className={reverse ? "lg:col-start-2" : ""}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "var(--font-size-hero)",
                lineHeight: "var(--line-height-tight)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-text-high-contrast)",
              }}
            >
              {title}
            </h2>

            <p
              className="mb-8"
              style={{
                fontSize: "var(--font-size-large)",
                lineHeight: "var(--line-height-default)",
                color: "var(--color-text-secondary)",
              }}
            >
              {description}
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-success)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "var(--font-size-base)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className={`relative aspect-square rounded-xl border ${
              reverse ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                style={{
                  fontSize: "var(--font-size-base)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                {imagePlaceholder}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
