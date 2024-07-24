import Link from "next/link";
import Navbar from "./navbar/navbar";
import { ArrowCircleLeft2 } from "iconsax-react";

//prettier-ignore
export default function SubAuthLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex relative flex-col w-[55%] items-center py-5 max-lg:w-full overflow-y-scroll max-lg:pb-10 max-sm:pt-16">
      <Link href="/" className="flex gap-1 items-center text-[#55524F] absolute left-5 top-5 text-[12px] hover:text-[#543EE0] max-lg:left-7 max-lg:top-7">
        <ArrowCircleLeft2 size="20"/>
        Back
      </Link>
      <Navbar />
      {children}
    </main>
  );
}
