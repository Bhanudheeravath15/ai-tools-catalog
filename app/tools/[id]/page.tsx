import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(),"data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath,"utf8"));
  return tools.map((t:any)=> ({ id: t.id }));
}

export default function ToolDetail({ params }: any) {
  const dataPath = path.join(process.cwd(),"data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath,"utf8"));
  const tool = tools.find((t:any)=> t.id === params.id);
  if(!tool) return notFound();
  return (
    <div>
      <h1 className="text-3xl font-bold">{tool.name}</h1>
      <p className="text-slate-600">{tool.category} • {tool.pricing}</p>
      <img src={tool.logo} alt={tool.name} className="w-40 h-40 mt-4 rounded" />
      <p className="mt-4">{tool.short_description}</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
      <ul className="list-disc pl-6">
        {tool.features?.map((f:string,i:number)=> <li key={i}>{f}</li>)}
      </ul>
      <a href={tool.website} target="_blank" rel="noreferrer" className="text-sky-600 mt-4 inline-block">Visit Website →</a>
    </div>
  );
}
