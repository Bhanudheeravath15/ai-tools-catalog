import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    { id: "free", title: "Best Free Tools", description: "Free AI tools worth trying" },
    { id: "image", title: "Top Image Generators", description: "Image-focused AI tools" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Collections</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {collections.map(c => (
          <div key={c.id} className="border rounded p-4">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="text-slate-600">{c.description}</p>
            <Link href={`/collections/${c.id}`} className="text-sky-600 inline-block mt-3">View →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
