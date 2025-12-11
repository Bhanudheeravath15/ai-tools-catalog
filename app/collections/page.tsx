import Link from "next/link";

export default function CollectionsIndex() {
  const collections = [
    { id: "free", title: "Free & Freemium Tools" },
    { id: "writing", title: "Writing Tools" },
    { id: "image", title: "Image Tools" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Collections</h1>
      <ul className="space-y-3">
        {collections.map(c=>(
          <li key={c.id}>
            <Link href={`/collections/${c.id}`} className="text-sky-600">{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

