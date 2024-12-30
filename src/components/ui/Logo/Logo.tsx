import Image from "next/image";
import Link from "next/link";
import type { LogoProps } from "./types";

export default function Logo({ width, height }: LogoProps) {
  return (
    <Link className=" " href={"/"}>
      <Image
        src={"/images/logo2.png"}
        width={width ?? 200}
        height={height ?? 200}
        alt="Touenun"
      />
    </Link>
  );
}
