import fs from "fs";
import path from "path";
import ToolCard from "../../components/ToolCard";
import ClientSearch from "../../components/ClientSearch";

export default function ToolsPage() {
  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All AI Tools</h1>

      {/* ClientSearch is a client component (it has "use client") so importing it
          directly from a server component is allowed — Next will hydrate it on the client */}
      <ClientSearch tools={tools} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tools.map((tool: any) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
