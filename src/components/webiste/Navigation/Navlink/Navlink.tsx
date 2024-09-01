import Link from "next/link";
import type { FC } from "react";
import type { NavlinkProps } from "./types";

const Navlink: FC<NavlinkProps> = ({ href, label }) => {
  return (
    <li className="block p-1">
      <Link className="block p-1" href={href}>
        {label}
      </Link>
    </li>
  );
};

export default Navlink;
