"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        click +1
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
        accusamus, ipsam nulla sint quaerat aspernatur fuga eaque soluta,
        architecto totam porro autem natus hic quasi, vero laboriosam qui neque.
      </p>
    </>
  );
}
