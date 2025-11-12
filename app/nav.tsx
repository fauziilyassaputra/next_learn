"use client";
import Link from "next/link";
// import { Setting } from "./_types/setting";
// import { use } from "react"; // use untuk mengfetch di client component

export function Nav() {
  return (
    <nav>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/about/team">team </Link>
    </nav>
  );
}
