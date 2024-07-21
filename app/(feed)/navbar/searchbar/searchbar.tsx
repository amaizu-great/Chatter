"use client";
import { SearchNormal1, CloseCircle } from "iconsax-react";

interface SearchBarProps {
  toggle: boolean;
  togglefunction: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { toggle, togglefunction } = props;

  return (
    <form
      className={`flex gap-5 border max-w-[400px] items-center w-full border-[#d0d0d0] rounded-[8px] px-3 py-[6px] z-0 max-md:left-0 max-md:h-full max-md:absolute max-md:max-w-full max-md:bg-white max-md:border-0 max-md:rounded-none ${
        toggle ? "slidein" : "slideout"
      }`}
    >
      <label htmlFor="search">
        <SearchNormal1 color="#543ee0" size="20" />
      </label>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Chatter"
        className="border-0 w-full outline-none text-[14px]"
      />

      <CloseCircle
        variant="Broken"
        color="#c50c0c"
        onClick={togglefunction}
        className="hidden max-md:flex"
      />
    </form>
  );
};

export default SearchBar;
