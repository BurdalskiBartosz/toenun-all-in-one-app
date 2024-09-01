import type { FC } from "react";
import type { TopbarProps } from "./types";

const Topbar: FC<TopbarProps> = ({ children }) => {
  return (
    <div className="sticky top-1 ml-1 mr-1 mt-1 h-[120px] grow rounded-xl  border-[2px] border-black  bg-white shadow-2xl">
      {children}
    </div>
  );
};

export default Topbar;
