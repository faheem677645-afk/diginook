import { useRouter } from "next/router";

export default function BlogPost() {
  const { query } = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog Post: {query.slug}</h1>
      <p>This is a placeholder content for the blog post.</p>
    </div>
  );
}