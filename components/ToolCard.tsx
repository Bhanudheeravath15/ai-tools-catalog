import Link from "next/link";
export default function ToolCard({ tool }: any) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded object-cover" />
        <div>
          <Link href={`/tools/${tool.id}`} className="text-lg font-medium">{tool.name}</Link>
          <p className="text-sm text-slate-500">{tool.category}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">{tool.short_description}</p>
    </div>
  );
}
