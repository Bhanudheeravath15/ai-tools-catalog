"use client";
import { useState, useMemo } from "react";
import ToolCard from "./ToolCard";

export default function ClientSearch({ tools }: { tools: any[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState("all");
  const [sort, setSort] = useState("name");

  const categories = ["all", ...Array.from(new Set(tools.map(t => t.category)))];
  const pricings = ["all", ...Array.from(new Set(tools.map(t => t.pricing)))];

  const filtered = useMemo(() => {
    let data = [...tools];
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(t =>
        (t.name || "").toLowerCase().includes(q) ||
        (t.short_description || "").toLowerCase().includes(q) ||
        (t.tags || []).join(" ").toLowerCase().includes(q)
      );
    }
    if (category !== "all") data = data.filter(t => t.category === category);
    if (pricing !== "all") data = data.filter(t => t.pricing === pricing);
    if (sort === "name") data.sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === "newest") data.sort((a,b)=>(b.launch_year||0)-(a.launch_year||0));
    return data;
  }, [tools, query, category, pricing, sort]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input aria-label="Search" placeholder="Search..." className="border rounded px-3 py-2 flex-1" value={query} onChange={e=>setQuery(e.target.value)} />
        <select className="border rounded px-2 py-2" value={category} onChange={e=>setCategory(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select className="border rounded px-2 py-2" value={pricing} onChange={e=>setPricing(e.target.value)}>
          {pricings.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <select className="border rounded px-2 py-2" value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="name">Sort: Name</option>
          <option value="newest">Sort: Newest</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(t => <ToolCard key={t.id} tool={t} />)}
      </div>

      <div className="mt-4 text-sm text-slate-600">{filtered.length} results</div>
    </div>
  );
}

