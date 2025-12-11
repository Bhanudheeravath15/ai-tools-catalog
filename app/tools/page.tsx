
export const metadata = {
  title: "AI Tools — Catalog",
  description: "Browse a curated list of AI tools with detail pages, search & filters."
};

import fs from "fs";
import path from "path";
import ClientSearchContainer from "../../components/ClientSearchContainer";
import Link from "next/link";

export default function ToolsPage() {
  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All AI Tools</h1>

      <ClientSearchContainer tools={tools} />

      <h2 className="text-xl font-semibold mt-10 mb-4">All Tools</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool: any) => (
          <div key={tool.id} className="border rounded p-3">
            <Link href={`/tools/${tool.id}`} className="text-lg font-medium text-sky-600">
              {tool.name}
            </Link>
            <p className="text-sm text-slate-600">{tool.category} • {tool.pricing}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
