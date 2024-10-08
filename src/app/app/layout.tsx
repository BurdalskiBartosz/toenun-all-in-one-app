import SideNav from "@/components/app/Navigations/SideNav";
import Topbar from "@/components/app/Navigations/Topbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Application",
  description: "Authentication",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="flex h-screen flex-col gap-y-1 bg-dark p-1">
      <Topbar>
        <div className="flex h-full items-center justify-between px-2 py-1">
          <span>hamburger</span>
          <span>search</span>
          <span>profile</span>
        </div>
      </Topbar>
      <div className="flex h-full gap-1">
        <SideNav />
        <main className="grow">{children}</main>
      </div>
    </section>
  );
}
