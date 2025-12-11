import fs from "fs";
import path from "path";
import ToolCard from "../../../components/ToolCard";

export async function generateStaticParams() {
  return [{ id: "free" }, { id: "image" }];
}

export default function CollectionDetail({ params }: any) {
  const dataPath = path.join(process.cwd(), "data/ai-tools.json");
  const tools = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  const { id } = params;

  let list = tools;

  if (id === "free") {
    list = tools.filter(t =>
      t.pricing?.toLowerCase() === "free" ||
      t.pricing?.toLowerCase() === "freemium"
    );
  }

  if (id === "image") {
    list = tools.filter(t =>
      t.category?.toLowerCase() === "image"
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Collection: {id}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>
    </div>
  );
}
