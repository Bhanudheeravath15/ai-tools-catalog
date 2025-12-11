import fs from "fs";
import path from "path";

interface Tool {
  id: string;
  name: string;
  category: string;
  pricing: string;
  website: string;
  logo: string;
  short_description: string;
  features: string[];
  tags: string[];
  launch_year: number;
}

export default function CollectionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools: Tool[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  let list: Tool[] = [];

  if (id === "free") {
    list = tools.filter((t: Tool) =>
      t.pricing?.toLowerCase() === "free" ||
      t.pricing?.toLowerCase() === "freemium"
    );
  } else if (id === "writing") {
    list = tools.filter((t: Tool) => t.category?.toLowerCase() === "writing");
  } else {
    list = tools;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Collection: {id}</h1>

      {list.length === 0 && <p>No tools found.</p>}

      <ul className="space-y-4">
        {list.map((tool: Tool) => (
          <li key={tool.id} className="border rounded p-4">
            <a href={`/tools/${tool.id}`} className="text-sky-600 text-lg">
              {tool.name}
            </a>
            <p>{tool.short_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
