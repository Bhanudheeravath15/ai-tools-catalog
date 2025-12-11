import "./globals.css";
import React from "react";
import Header from "../components/Header";

export const metadata = {
  title: "AI Tools Catalog",
  description: "Directory of AI tools built with Next.js, Tailwind & ISR.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="text-center py-6 text-sm">Built for Intern Assessment</footer>
      </body>
    </html>
  );
}
