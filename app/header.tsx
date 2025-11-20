// import Link from "next/link";
import { getSetting } from "./queries/getSetting";
import { Nav } from "./nav";
import { Suspense } from "react";

export async function Header() {
  const setting = await getSetting();
  return (
    <header className="font-bold  border-b border-yellow-500">
      <div className="text-2xl"> {setting.siteName} </div>
      {/* <nav>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/about/team">team </Link>
      </nav> */}
      <Suspense fallback="Loading...">
        <Nav />
      </Suspense>
    </header>
  );
}
