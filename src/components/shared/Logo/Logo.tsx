import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { LogoProps } from "./types";

const Logo: FC<LogoProps> = ({ width, height }) => {
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
};

export default Logo;
