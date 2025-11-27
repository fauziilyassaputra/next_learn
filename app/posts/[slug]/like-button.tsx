"use client";

import { createLike } from "@/app/actions";
import { useTransition } from "react";

export function LikeButton({ postID }: { postID: string }) {
  const [pending, startTransition] = useTransition();
  async function handleLike() {
    //     await createLike();
    startTransition(async () => {
      await createLike(postID);
    });
  }
  return (
    <button
      className="bg-black text-white px-4 py-2 m-2 rounded-2xl"
      onClick={handleLike}
    >
      {pending ? "liking..." : "Like"}
    </button>
  );
}
