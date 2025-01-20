import PageContent from "@/components/app/PageContent/PageContent";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Application",
  description: "Authentication",
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="flex h-screen flex-col gap-y-1 bg-dark p-1">
      <PageContent>{children}</PageContent>
    </section>
  );
}
