import Link from "next/link";
import { post } from "../_types/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

async function getPosts(): Promise<post[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  const res = await fetch("http://localhost:3001/post");
  const posts = await res.json();

  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="">
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </article>
      ))}
    </div>
  );
}
