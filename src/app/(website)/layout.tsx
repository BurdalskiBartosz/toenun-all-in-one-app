import Navbar from "@/components/website/Navigation/Navbar";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section lang="en">
      <Navbar />
      {children}
    </section>
  );
}
