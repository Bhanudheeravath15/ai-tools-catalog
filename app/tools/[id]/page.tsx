// app/tools/[id]/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Tool {
  id: string | number;
  name: string;
  category: string;
  pricing: string;
  short_description?: string;
  website?: string;
  logo?: string;
  features?: string[];
}

export default async function ToolDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // params is a Promise in Next 16 — unwrap it
  const { id } = await params;

  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools: Tool[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  const tool = tools.find((t) => String(t.id) === String(id));

  // return 404 page if no matching tool
  if (!tool) {
    notFound();
  }

  return (
    <div>
      <Link href="/tools" className="text-sm text-sky-600">← Back</Link>

      <h1 className="text-3xl font-bold mt-6">{tool!.name}</h1>
      <div className="text-sm text-slate-600 mb-4">
        {tool!.category} • {tool!.pricing}
      </div>

      {tool!.logo && <img src={tool!.logo} alt={tool!.name} className="w-48 h-48 object-cover rounded mb-4" />}

      <p className="text-base text-slate-700 mb-4">{tool!.short_description}</p>

      {tool!.features?.length ? (
        <div>
          <h3 className="font-semibold">Features</h3>
          <ul className="list-disc ml-6">
            {tool!.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      ) : null}

      {tool!.website ? (
        <p className="mt-4">
          <a href={tool!.website} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
            Visit Website →
          </a>
        </p>
      ) : null}
    </div>
  );
}
