import { appRoutes } from "@/constants";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="bg-dark flex flex-col border-r-[2px] border-r-white">
      <nav className="py-4 pr-9">
        <ul className="flex list-none flex-col gap-3">
          {appRoutes.map((route, i) => {
            return (
              <Link
                key={i}
                className="px-2 text-sm font-semibold text-white hover:underline"
                href={route.href}
              >
                {route.label}
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col">
        <Link
          className="border-t-[2px] border-white px-2 py-3 text-sm font-semibold text-white"
          href="/"
        >
          Invite a user
        </Link>
        <Link
          className="border-t-[2px] border-white px-2 py-3 text-sm font-semibold text-white"
          href="/"
        >
          Help
        </Link>
      </div>
    </div>
  );
}
