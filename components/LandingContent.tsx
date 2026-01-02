import { Hero } from "@/components/Hero";
import { ValuePropSection } from "@/components/ValuePropSection";
import { Navbar } from "@/components/Navbar";
import { SocialProof } from "@/components/SocialProof";
import { SectionHeader } from "@/components/SectionHeader";
import { QuantifiableImpact } from "@/components/QuantifiableImpact";
import { Testimonials } from "@/components/Testimonials";
import { SecuritySection } from "@/components/SecuritySection";

interface LandingContentProps {
  heroVariant: "side" | "bottom";
}

export function LandingContent({ heroVariant }: LandingContentProps) {
  return (
    <main>
      <Navbar />

      {/* Add padding-top to account for fixed navbar */}
      <div style={{ paddingTop: "80px" }}>
        {/* Hero Section */}
        <Hero variant={heroVariant} />

        {/* Social Proof - Customer Logos */}
        <SocialProof />

        {/* Section Header - Like Harvey's "Augment All of Your Work..." */}
        <SectionHeader
          title="Streamline Your Entire Document Collection Workflow"
        />

        {/* Value Proposition 1 */}
        <ValuePropSection
          title="AI-Powered Client Reminders"
          description="Stop chasing clients for documents. Our AI automatically sends personalized follow-ups at the right time, keeping your cases moving forward."
          features={[
            "Intelligent reminder scheduling based on client behavior",
            "Personalized messaging that feels human, not robotic",
            "Multi-channel reminders via email, SMS, and portal notifications",
            "Automatic escalation for overdue documents",
          ]}
          imagePath="/images/value-props/prop-1.jpeg"
          backgroundColor="var(--color-progressive-1)"
        />

        {/* Value Proposition 2 */}
        <ValuePropSection
          title="Document Verification That Actually Works"
          description="Never waste time reviewing the wrong documents again. Our AI verifies that clients upload exactly what you requested—before they hit submit."
          features={[
            "Instant document type detection and validation",
            "Smart extraction of key information and dates",
            "Automatic quality checks for completeness and clarity",
            "Real-time feedback to clients for corrections",
          ]}
          imagePath="/images/value-props/prop-2.jpeg"
          reverse
          backgroundColor="var(--color-progressive-2)"
        />

        {/* Value Proposition 3 */}
        <ValuePropSection
          title="Built for Legal Workflows"
          description="Designed specifically for law firms and legal professionals. Secure, compliant, and seamlessly integrated with your existing tools."
          features={[
            "Bank-level encryption and HIPAA-compliant storage",
            "One-click integration with major practice management systems",
            "Role-based access controls for your entire team",
            "Audit trails and detailed activity logs",
          ]}
          imagePath="/images/value-props/prop-3.jpeg"
          backgroundColor="var(--color-progressive-3)"
        />

        {/* Value Proposition 4 */}
        <ValuePropSection
          title="Save Hours Every Week"
          description="Focus on practicing law, not project managing document requests. CaseDelta handles the busywork so you can get back to what matters."
          features={[
            "Reduce document collection time by 70%",
            "Eliminate manual follow-up emails and phone calls",
            "Real-time visibility into client progress",
            "Automatic organization and case file management",
          ]}
          imagePath="/images/value-props/prop-4.jpeg"
          reverse
          backgroundColor="var(--color-progressive-4)"
        />

        {/* Quantifiable Impact Section */}
        <QuantifiableImpact />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Security Section */}
        <SecuritySection />

        {/* CTA Section */}
        <section
          className="section"
          style={{ backgroundColor: "var(--color-surface)", padding: "8rem 0" }}
        >
          <div className="container max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: "1.2",
                  fontWeight: "400",
                  color: "var(--color-text-high-contrast)",
                  letterSpacing: "-0.01em",
                }}
              >
                Stop Chasing Documents.
                <br />
                <span style={{ color: "var(--color-text-secondary)" }}>
                  Start Getting Results.
                </span>
              </h2>

              <button
                className="px-8 py-4 rounded-lg transition-all hover:opacity-90 flex-shrink-0"
                style={{
                  backgroundColor: "var(--color-button-primary)",
                  color: "var(--color-button-primary-text)",
                  fontSize: "var(--font-size-base)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-16 border-t"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
              {/* Product */}
              <div>
                <h3
                  className="mb-4 uppercase tracking-wider"
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontWeight: "var(--font-weight-medium)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#features"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/security"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3
                  className="mb-4 uppercase tracking-wider"
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontWeight: "var(--font-weight-medium)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/about"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3
                  className="mb-4 uppercase tracking-wider"
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontWeight: "var(--font-weight-medium)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/terms"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3
                  className="mb-4 uppercase tracking-wider"
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontWeight: "var(--font-weight-medium)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/demo"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Request Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sales"
                      style={{
                        fontSize: "var(--font-size-base)",
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Sales
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="pt-8 border-t text-center"
              style={{ borderColor: "var(--color-border)" }}
            >
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
