"use client";

import { createComment } from "@/app/actions";
import { error } from "console";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function CommentForm() {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-col w-72">
      {state?.error && (
        <div className="text-red-500" role="alert">
          {state.error}
        </div>
      )}
      <textarea
        name="comment"
        id=""
        placeholder="write your comment..."
        className="border-2 border-black w-72 h-40 p-2"
      ></textarea>
      <button className="bg-blue-400" disabled={pending}>
        Send
      </button>
    </form>
  );
}
