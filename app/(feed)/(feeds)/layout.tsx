import Link from "next/link";
import { Edit2 } from "iconsax-react";
import FeedsNav from "./feedsNav/feedsnav";

//prettier-ignore
export default function FeedsLayout({children}: Readonly<{children: React.ReactNode}>) {
  
  return (
    <main className="flex flex-col gap-5 items-center pt-5 w-[97%] border border-b-0 h-full border-[#D0D0D0] max-md:border-0 max-md:w-full max-sm:p-0">
      <section className="flex justify-between items-center w-[80%] max-md:w-[85%] max-sm:w-[90%]">
        <div className="flex flex-col gap-1 text-[14px] max-md:text-[13px] max-sm:text-[12px]">
          <h3 className="text-[20px] font-medium leading-none max-md:text-[19px] max-sm:text-[18px]">FEEDS</h3>
          <p>Explore different content you would love </p>
        </div>
        <Link href="/post" className="flex py-2 px-3 gap-2 text-[12px] items-center rounded-[4px] text-white bg-[#543EE0] active:bg-[#4131af] max-sm:px-2">
          <Edit2 size="20"/>
          <p className="max-md:hidden">Post a content</p>
        </Link>
      </section>
      <section className="flex flex-col w-[80%] max-md:w-[85%] max-sm:w-[90%]">
        <FeedsNav />
        {children}
      </section>
    </main>
  );
}
