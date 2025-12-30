import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaseDelta | Legal Document Collection Made Simple",
  description: "AI-powered document collection platform for legal professionals. Get documents from clients faster with automated reminders and intelligent verification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
