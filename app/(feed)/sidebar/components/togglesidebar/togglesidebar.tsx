"use client";

interface SideBarProps {
  toggle: boolean;
  togglefunction: () => void;
}

const Togglesidebar: React.FC<SideBarProps> = (props) => {
  const { toggle, togglefunction } = props;
  return (
    <button
      onClick={togglefunction}
      className="hidden max-lg:flex max-sm:hidden"
    >
      <p>test</p>
    </button>
  );
};

export default Togglesidebar;
