"use client";
import {
  Save2,
  Chart1,
  TrendUp,
  FtxToken,
  Briefcase,
  Profile2User,
  Personalcard,
  DirectboxDefault,
  NotificationBing,
} from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LogOutButton from "./components/logoutbutton/logoutButton";
import Togglesidebar from "./components/togglesidebar/togglesidebar";

interface SideBarProps {
  toggle: boolean;
}

const Sidebar: React.FC<SideBarProps> = (props) => {
  const { toggle } = props;
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);

  //This Function is to open and close the SideBar Component.
  const toggleSideBar = () => {
    if (!sidebar) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };

  //prettier-ignore
  return (
    <header className={`flex h-screen border-r w-full max-w-[250px] border-r-[#D0D0D0] overflow-y-hidden  ${!sidebar && "max-lg:max-w-fit"} max-sm:absolute max-sm:max-w-full max-sm:border-none max-sm:z-10 ${toggle ? "showsidebar" :"hidesidebar"}`}>
      <section className="flex scrollbar whitespace-nowrap flex-col gap-[25px] min-h-screen max-h-full w-full overflow-y-scroll items-center pb-5 pt-2 bg-white max-lg:pt-4 max-sm:w-fit max-sm:px-10 max-sm:border-r max-sm:border-r-[#D0D0D0]">

        <h1 className="text-[#543EE0] font-medium text-[30px] max-lg:hidden max-sm:flex max-md:text-[20px] ">
          <Link href="/">CHATTER</Link>
        </h1>

        <Togglesidebar toggle={sidebar} togglefunction={toggleSideBar} />

        <nav className={`flex flex-col gap-5 w-full max-w-[150px] ${!sidebar && "hidesidebartext"}`}>

          <span className="text-[16px] flex gap-2 items-center">
            <Briefcase className="size-[22px]" />
            <h3>Overview</h3>
          </span>

          <div className="flex flex-col pl-2 text-[14px] gap-5 text-[#626262] max-sm:pl-0" >
            <Link href="/" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/" && "text-[#543EE0]"}`}>
              <FtxToken size="20" />
              <p>Feeds</p>
            </Link>

            <Link href="/bookmark" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/bookmark" && "text-[#543EE0]"}`}>
              <Save2 size="20" />
              <p>Bookmarks</p>
            </Link>

            <Link href="/team_blog" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/team_blog" && "text-[#543EE0]" }`}>
              <Profile2User size="20" />
              <p>Team blogs</p>
            </Link>

            <Link href="/draft" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/draft" && "text-[#543EE0]"}`}>
              <DirectboxDefault size="20" />
              <p>Drafts</p>
            </Link>

            <Link href="/analytics" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/analytics" && "text-[#543EE0]"}`}>
              <Chart1 variant="Broken" size="20" />
              <p>Analytics</p>
            </Link>
          </div>
        </nav>

        <nav className={`flex flex-col gap-5 w-full max-w-[150px] ${!sidebar && "hidesidebartext"}`}>
          <span className="text-[16px] flex gap-2 items-center">
            <TrendUp className="size-[22px]" />
            <h3>Trending tags</h3>
          </span>
          <div className="flex flex-col pl-2 text-[14px] gap-5 text-[#626262] max-sm:pl-0"></div>
        </nav>

        <nav className={`flex flex-col gap-5 w-full max-w-[150px] ${!sidebar && "hidesidebartext"}`}>
          <span className="text-[16px] flex gap-2 items-center">
            <Personalcard className="size-[22px]" />
            <h3>Personal</h3>
          </span>

          <div className="flex flex-col pl-2 text-[14px] gap-5 text-[#626262]">
            <Link href="/notifications" className={`flex gap-2 hover:text-[#543EE0] ${pathname === "/notifications" && "text-[#543EE0]"}`}>
              <NotificationBing size="20" />
              <p>Notifications</p>
            </Link>
            
            <LogOutButton />
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Sidebar;
