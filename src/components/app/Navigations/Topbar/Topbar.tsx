import { Hamburger } from "../../Hamburger";

type TopbarProps = {
  handleBurgerClick: () => void;
};

const Topbar = ({ handleBurgerClick }: TopbarProps) => {
  return (
    <div className="h-[50px] grow rounded-xl bg-white bg-gradient-to-b from-[#636363] to-[#999999] shadow-2xl">
      <div className="flex h-full items-center justify-between px-2.5 py-1.5">
        <Hamburger handleClick={handleBurgerClick} />
        <span>search</span>
        <span>profile</span>
      </div>
    </div>
  );
};

export default Topbar;
