import fs from "fs";
import path from "path";

interface Tool { id: string; name: string; category: string; pricing: string; short_description?: string; }

export default function CollectionPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools: Tool[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  let list: Tool[] = [];
  if (id === "free") {
    list = tools.filter((t: Tool) => (t.pricing||"").toLowerCase().includes("free"));
  } else {
    list = tools.filter((t: Tool) => (t.category||"").toLowerCase() === id);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Collection: {id}</h1>
      {list.length === 0 ? <p>No tools found.</p> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(t=>(
            <div key={t.id} className="border rounded p-3">
              <a href={`/tools/${t.id}`} className="text-sky-600">{t.name}</a>
              <p className="text-sm text-slate-600">{t.short_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

