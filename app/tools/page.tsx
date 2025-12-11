import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import ToolCard from "../../components/ToolCard";
const ClientSearch = dynamic(()=>import("../../components/ClientSearch"), { ssr: false });
export default function ToolsPage() {
  const dataPath = path.join(process.cwd(),"data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath,"utf8"));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All AI Tools</h1>
      <ClientSearch tools={tools} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tools.map((tool:any)=> <ToolCard key={tool.id} tool={tool} />)}
      </div>
    </div>
  );
}
