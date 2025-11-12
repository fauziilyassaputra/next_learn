import Image from "next/image";
import { Counter } from "./counter";
import anbyBoo from "@/public/anbyboo.png";
import loading_bangboo from "@/public/paperboo-mini.png";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="relative size-72">
        <Image
          alt="gambar bangboo"
          src={anbyBoo}
          fill
          loading="eager"
          placeholder="blur"
          blurDataURL="@/public/paperboo-mini.png"
        />
      </div>
      {/* <Image
        alt="bangboo"
        src="https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Base_Bangboo_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20250722225256"
        width={400}
        height={400}
      /> */}
    </div>
  );
}
