import Link from "next/link";

const posts = [
  { slug: "why-digital-products", title: "Why Sell Digital Products?" },
  { slug: "seo-tips", title: "SEO Tips for Online Stores" },
];

export default function BlogIndex() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}