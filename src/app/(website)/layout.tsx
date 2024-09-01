import Navbar from "@/components/webiste/Navigation/Navbar";
import { ReactNode } from "react";

export default function RootLayout({
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
