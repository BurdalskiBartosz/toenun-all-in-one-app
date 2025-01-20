"use client";
import SideNav from "@/components/app/Navigations/SideNav";
import Topbar from "@/components/app/Navigations/Topbar";
import { PropsWithChildren, useState } from "react";

const PageContent = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleBurgerClick = () => setIsSidebarOpen((prev) => !prev);
  return (
    <>
      <Topbar handleBurgerClick={handleBurgerClick} />

      <div className="flex h-full gap-1">
        <SideNav isOpen={isSidebarOpen} />
        <main className="grow">{children}</main>
      </div>
    </>
  );
};

export default PageContent;
