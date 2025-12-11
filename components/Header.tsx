
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">AI Tools Catalog</Link>
        <div>
          <Link href="/tools" className="text-sm">Browse</Link>
        </div>
      </div>
    </header>
  );
}

