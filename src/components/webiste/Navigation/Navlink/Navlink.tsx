import Link from "next/link";
import type { NavlinkProps } from "./types";

export default function Navlink({ href, label }: NavlinkProps) {
  return (
    <li className="block p-1">
      <Link className="block p-1" href={href}>
        {label}
      </Link>
    </li>
  );
}
