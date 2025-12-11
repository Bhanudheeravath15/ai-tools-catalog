import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">AI Tools Catalog</h1>
      <p className="text-lg text-slate-600">
        Browse a curated list of AI tools with detail pages, search & filters.
      </p>
      <Link
        href="/tools"
        className="px-4 py-2 bg-sky-600 text-white rounded-md inline-block"
      >
        Browse Tools →
      </Link>
    </div>
  );
}
