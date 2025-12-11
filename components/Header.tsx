"use client";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">AI Tools Catalog</Link>
        <div className="flex items-center gap-4">
          <Link href="/tools" className="text-sm">Browse</Link>
          <DarkToggle />
        </div>
      </div>
    </header>
  );
}
