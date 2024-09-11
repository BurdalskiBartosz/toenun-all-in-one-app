import type { PropsWithChildren } from "react";

export default function Topbar({ children }: PropsWithChildren) {
  return (
    <div className="h-[50px] grow rounded-xl border-[2px] border-black bg-white shadow-2xl">
      {children}
    </div>
  );
}
