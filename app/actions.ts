"use server";

import { CommentFormState } from "./_types/CommentFormState";

export async function createComment(
  prevData: CommentFormState,
  formData: FormData
): Promise<CommentFormState> {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required", sucess: false };
  }
  return {
    sucess: true,
  };
}

export async function createLike(postid: string) {
  console.log("like", postid);
}
