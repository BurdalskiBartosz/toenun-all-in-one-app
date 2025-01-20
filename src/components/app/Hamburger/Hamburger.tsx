type HamburgerProps = {
  handleClick: () => void;
};

const Hamburger = ({ handleClick }: HamburgerProps) => {
  return (
    <div
      onClick={handleClick}
      className="flex h-4 w-4 cursor-pointer flex-col justify-between"
    >
      <span className="h-0.5 bg-white"></span>
      <span className="h-0.5 bg-white"></span>
      <span className="h-0.5 bg-white"></span>
    </div>
  );
};

export default Hamburger;
