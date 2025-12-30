"use client";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-2"
              style={{
                fontSize: "var(--font-size-large)",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "var(--letter-spacing-tight)",
                color: "var(--color-text-high-contrast)",
              }}
            >
              CaseDelta
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="transition-colors hover:opacity-80"
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--color-text-secondary)",
              }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:opacity-80"
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--color-text-secondary)",
              }}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="transition-colors hover:opacity-80"
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--color-text-secondary)",
              }}
            >
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:block px-4 py-2 rounded-lg transition-all hover:opacity-80"
              style={{
                fontSize: "var(--font-size-body)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--color-text-secondary)",
              }}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--color-button-primary)",
                color: "var(--color-button-primary-text)",
                fontSize: "var(--font-size-body)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
