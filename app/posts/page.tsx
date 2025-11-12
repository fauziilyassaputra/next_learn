type post = {
  id: string;
  title: string;
  content: string;
};

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
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
