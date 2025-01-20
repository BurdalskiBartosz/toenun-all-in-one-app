import { appRoutes } from "@/constants";
import cx from "classnames";
import Link from "next/link";

type SideNavProps = {
  isOpen: boolean;
};

const SideNav = ({ isOpen }: SideNavProps) => {
  return (
    <div
      className={cx(
        "flex flex-col border-r-[2px] border-r-white bg-dark duration-150 ease-linear",
        {
          "translate-x-0 opacity-100": isOpen,
          "-mr-[122px] -translate-x-full opacity-0": !isOpen,
        },
      )}
    >
      <nav className="py-4 pr-9">
        <ul className="flex list-none flex-col gap-3">
          {appRoutes.map((route, i) => {
            return (
              <Link
                key={i}
                className="px-1.5 text-sm font-semibold text-white hover:underline"
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
};

export default SideNav;
