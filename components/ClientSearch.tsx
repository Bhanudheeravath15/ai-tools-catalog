"use client";
import { useState } from "react";
import ToolCard from "./ToolCard";
export default function ClientSearch({ tools }: any) {
  const [query, setQuery] = useState("");
  const filtered = tools.filter((t: any) => t.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <input className="border rounded px-3 py-2 w-full mb-4" placeholder="Search tools..." value={query} onChange={(e)=>setQuery(e.target.value)} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t: any)=> <ToolCard key={t.id} tool={t} />)}
      </div>
    </div>
  );
}
