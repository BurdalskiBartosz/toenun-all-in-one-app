import { websiteRoutes } from "@/constants";
import Navlink from "../components/Navlink";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 flex border-b border-black">
      <ul className="grow-1 m-0 ml-auto flex max-w-[200px] list-none justify-between bg-red-600 p-0">
        {websiteRoutes.map((route) => {
          return (
            <Navlink key={route.label} href={route.href} label={route.label} />
          );
        })}
      </ul>
    </nav>
  );
}
