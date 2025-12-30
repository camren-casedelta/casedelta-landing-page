"use client";

import { useEffect } from "react";

interface PageWrapperProps {
  theme: "light" | "dark";
  children: React.ReactNode;
}

export function PageWrapper({ theme, children }: PageWrapperProps) {
  useEffect(() => {
    // Set theme on mount
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}
