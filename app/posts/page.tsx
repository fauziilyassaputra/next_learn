import Link from "next/link";
import { post } from "../_types/post";

async function getPosts(): Promise<post[]> {
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
