"use client";
import { useState } from "react";
import { SearchNormal1, CloseCircle } from "iconsax-react";

const SearchBar = () => {
  const [] = useState();
  return (
    <form className="flex gap-5 border max-w-[400px] items-center w-full border-[#d0d0d0] rounded-[8px] px-3 py-[6px] max-md:h-full max-md:absolute max-md:max-w-full max-md:border-0 max-md:rounded-none">
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
        className="hidden max-md:flex"
      />
      
    </form>
  );
};

export default SearchBar;
