import Logo from "@/components/shared/Logo";
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication",
};

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto flex h-screen items-center justify-center">
        <div className="relative flex min-w-[900px] gap-x-5 bg-white px-16 py-12 shadow-xl">
          <div className="flex flex-col justify-between">
            <Logo width={350} height={350} />
            <div className="text-md mt-10 flex flex-col items-center justify-center text-gray-600">
              <p className="mr-2">
                Lost password?
                <Link className="ml-1 font-bold" href={"/registration"}>
                  Reset password
                </Link>
              </p>
            </div>
          </div>
          <div className="w-[1px] bg-gray-400"></div>
          {children}
        </div>
      </div>
    </section>
  );
}
