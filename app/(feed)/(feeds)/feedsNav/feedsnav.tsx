"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FeedsNav = () => {
  const pathname = usePathname();
  //prettier-ignore
  return (
    <nav className="flex w-full rounded h-[40px] border border-[#D0D0D0] font-medium text-[14px] justify-around items-center max-sm:text-[13px]">
      <Link href="/foryou" className="flex flex-col h-[95%] pt-2 justify-between">
        For You
        {pathname == "/foryou" ? <span className="w-full h-[3px] bg-[#543EE0]"></span> : null}
      </Link>

       <Link href="/" className="flex flex-col h-[95%] pt-2 justify-between">
        Explore
        {pathname == "/" ? <span className="w-full h-[3px] bg-[#543EE0]"></span> : null}
      </Link>

      <Link href="/following" className="flex flex-col h-[95%] pt-2 justify-between group">
        <p>Following</p>
        {pathname == "/following" ? <span className="w-full h-[3px] bg-[#543EE0]"></span> : null}
      </Link>
    </nav>
  );
};

export default FeedsNav;
