"use client";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./searchbar/searchbar";
import NavBarProfile from "./navbarProfile/NavbarProfile";
import { NotificationBing, SearchNormal1 } from "iconsax-react";

interface NavbarProps {
  toggle: boolean;
  togglefunction: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [searchbar, setSeachbar] = useState(false);

  const { toggle, togglefunction } = props;

  // This Function is to open and close the SearchBar Component When its in a responsive view (768px).
  const toggleSeachBar = () => {
    if (!searchbar) {
      setSeachbar(true);
    } else {
      setSeachbar(false);
    }
  };

  return (
    <header className="flex w-full border min-h-[40px] border-[#D0D0D0] py-[10px] items-center justify-around relative max-md:justify-between max-md:px-6">
      <SearchBar togglefunction={toggleSeachBar} toggle={searchbar} />
      <h1 className="hidden text-[#543EE0] font-medium text-[20px] max-md:flex">
        <Link href="/">CHATTER</Link>
      </h1>

      <div className="flex items-center gap-2">
        <SearchNormal1
          size="20"
          onClick={toggleSeachBar}
          className="hidden max-md:flex"
        />
        <NotificationBing size="15" className="max-md:hidden" />
        <NavBarProfile props={props} />
      </div>
    </header>
  );
};

export default Navbar;
