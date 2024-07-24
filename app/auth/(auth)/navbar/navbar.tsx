"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
//prettier-ignore
  return (
    <header className="flex gap-3 flex-col w-full justify-center items-center max-md:gap-2">
      <section className="flex justify-between w-[60%] font-medium max-sm:w-[80%] max-md:text-[14px]">
        <Link href="/auth/signup">Sign Up</Link>
        <Link href="/auth/login">Log In</Link>
      </section>
      <div className="flex w-[60%] h-1 transition-all bg-[#D9D9D9] max-sm:w-[80%]">
        <span className={`w-1/2 h-full bg-[#543EE0] ${pathname == "/auth/login" ? "right" : "left"}`}></span>
      </div>
    </header>
  );
};

export default NavBar;
