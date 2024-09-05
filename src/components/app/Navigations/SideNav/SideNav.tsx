import { appRoutes } from "@/constants";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="sticky top-1 ml-1 mt-1 flex h-[calc(100vh_-_8px)] w-[150px] flex-col overflow-hidden rounded-xl border-[2px] border-black bg-white shadow-2xl">
      <nav>
        <ul className="flex list-none flex-col">
          {appRoutes.map((route, i) => {
            return (
              <Link
                key={i}
                className="py-1 pl-4 font-medium hover:bg-black hover:text-white"
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
          className="border-t-[2px] border-black px-5 py-4 font-bold"
          href="/"
        >
          Invite a user
        </Link>
        <Link
          className="border-t-[2px] border-black px-5 py-4 font-bold"
          href="/"
        >
          Help
        </Link>
      </div>
    </div>
  );
}
