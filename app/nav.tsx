"use client";
import Link from "next/link";
// import { Setting } from "./_types/setting";
// import { use } from "react"; // use untuk mengfetch di client component

export function Nav() {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/posts">posts </Link>
      <Link href="/about/team">team </Link>
    </nav>
  );
}
