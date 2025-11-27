import gif from "./load-bangboo.gif";
import Image from "next/image";

export default function PostLoading() {
  return (
    <>
      <Image src={gif} alt="Loading...." unoptimized width={100} height={100} />
    </>
  );
}
