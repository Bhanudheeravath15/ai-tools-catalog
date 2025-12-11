"use client";

import Link from "next/link";

export default function ToolCard({ tool }: { tool: any }) {
  return (
    <div className="border rounded p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <img
          src={tool.logo || "/logos/placeholder.png"}
          alt={tool.name}
          className="w-16 h-16 rounded object-cover"
          onError={(e) => {
            // @ts-ignore
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/logos/placeholder.png";
          }}
        />
        <div>
          <Link
            href={`/tools/${tool.id}`}
            className="text-lg font-semibold text-sky-700 hover:underline"
          >
            {tool.name}
          </Link>

          <div className="text-sm text-slate-600">
            {tool.category} • {tool.pricing}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700">{tool.short_description}</p>
    </div>
  );
}

