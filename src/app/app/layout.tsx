import SideNav from "@/components/app/Navigations/SideNav";
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
    <section className="flex bg-black">
      <SideNav />
      <main className="grow">{children}</main>
    </section>
  );
}
