import { post } from "@/app/_types/post";
import { createComment } from "@/app/actions";

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
    <>
      <article>
        <h1 className="text-lg">{post.title}</h1>
        <div className="">{post.content}</div>
      </article>
      <section className="mt-4">
        <h2>Comments</h2>
        <form action={createComment} className="flex flex-col w-72">
          <textarea
            name="comment"
            id=""
            placeholder="write your comment..."
            className="border-2 border-black w-72 h-40 p-2"
          ></textarea>
          <button className="bg-blue-400">Send</button>
        </form>
      </section>
    </>
  );
}
