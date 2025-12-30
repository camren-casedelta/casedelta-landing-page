import { Hero } from "@/components/Hero";
import { ValuePropSection } from "@/components/ValuePropSection";
import { Navbar } from "@/components/Navbar";

interface LandingContentProps {
  heroVariant: "side" | "bottom";
}

export function LandingContent({ heroVariant }: LandingContentProps) {
  return (
    <main>
      <Navbar />

      {/* Add padding-top to account for fixed navbar */}
      <div style={{ paddingTop: "64px" }}>
        {/* Hero Section */}
        <Hero variant={heroVariant} />

        {/* Value Proposition 1 - Light background */}
        <ValuePropSection
          title="AI-Powered Client Reminders"
          description="Stop chasing clients for documents. Our AI automatically sends personalized follow-ups at the right time, keeping your cases moving forward."
          features={[
            "Intelligent reminder scheduling based on client behavior",
            "Personalized messaging that feels human, not robotic",
            "Multi-channel reminders via email, SMS, and portal notifications",
            "Automatic escalation for overdue documents",
          ]}
          imagePlaceholder="AI Reminders Dashboard"
          backgroundColor="var(--color-background)"
        />

        {/* Value Proposition 2 - Slightly darker */}
        <ValuePropSection
          title="Document Verification That Actually Works"
          description="Never waste time reviewing the wrong documents again. Our AI verifies that clients upload exactly what you requested—before they hit submit."
          features={[
            "Instant document type detection and validation",
            "Smart extraction of key information and dates",
            "Automatic quality checks for completeness and clarity",
            "Real-time feedback to clients for corrections",
          ]}
          imagePlaceholder="Document Verification Flow"
          reverse
          backgroundColor="var(--color-surface)"
        />

        {/* Value Proposition 3 - Darker still */}
        <ValuePropSection
          title="Built for Legal Workflows"
          description="Designed specifically for law firms and legal professionals. Secure, compliant, and seamlessly integrated with your existing tools."
          features={[
            "Bank-level encryption and HIPAA-compliant storage",
            "One-click integration with major practice management systems",
            "Role-based access controls for your entire team",
            "Audit trails and detailed activity logs",
          ]}
          imagePlaceholder="Security & Integrations"
          backgroundColor="var(--color-surface-secondary)"
        />

        {/* Value Proposition 4 - Darkest */}
        <ValuePropSection
          title="Save Hours Every Week"
          description="Focus on practicing law, not project managing document requests. CaseDelta handles the busywork so you can get back to what matters."
          features={[
            "Reduce document collection time by 70%",
            "Eliminate manual follow-up emails and phone calls",
            "Real-time visibility into client progress",
            "Automatic organization and case file management",
          ]}
          imagePlaceholder="Time Savings Dashboard"
          reverse
          backgroundColor="var(--color-surface-tertiary)"
        />

        {/* CTA Section */}
        <section
          className="section"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="mb-6"
                style={{
                  fontSize: "var(--font-size-hero)",
                  lineHeight: "var(--line-height-tight)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text-high-contrast)",
                }}
              >
                Ready to transform your document collection?
              </h2>

              <p
                className="mb-8"
                style={{
                  fontSize: "var(--font-size-large)",
                  color: "var(--color-text-secondary)",
                }}
              >
                Join hundreds of legal professionals who've already streamlined
                their workflows with CaseDelta.
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  className="px-8 py-4 rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "var(--color-button-primary)",
                    color: "var(--color-button-primary-text)",
                    fontSize: "var(--font-size-base)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Start Free Trial
                </button>

                <button
                  className="px-8 py-4 rounded-lg border transition-all hover:bg-[var(--color-surface-hover)]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-primary)",
                    fontSize: "var(--font-size-base)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-12 border-t"
          style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="container">
            <div className="text-center">
              <p
                style={{
                  fontSize: "var(--font-size-small)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                © 2025 CaseDelta. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
