import { post } from "@/app/_types/post";

async function getPost(slug: string): Promise<post> {
  // http://localhost:3001/post?slug=post-1 => maka hanya objek pertama yang akan diambil
  const res = await fetch("http://localhost:3001/post/?slug=" + slug);
  const [post] = await res.json(); // post menggunakan [] agar bisa hanya menggambil objeknya saja tanpa arraynya

  return post;
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <div className="">{post.content}</div>
    </article>
  );
}
