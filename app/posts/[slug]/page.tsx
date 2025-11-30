import { post } from "@/app/_types/post";
// import { createComment } from "@/app/actions";
import { CommentForm } from "./comment-form";
import { LikeButton } from "./like-button";
import { Comments } from "./comment";
import { Suspense } from "react";
import NotFound from "@/app/not-found";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return {
    title: post.title,
  };
}

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

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <article>
        <h1 className="text-lg">{post.title}</h1>
        <div className="">{post.content}</div>
        <hr />
        <LikeButton postID={post.id} />
      </article>
      <section className="mt-4">
        <Suspense fallback="Loading comment...">
          <Comments />
        </Suspense>
        <CommentForm />
      </section>
    </>
  );
}
