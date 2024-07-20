"use client";
import {
  Save2,
  Login,
  Logout,
  Chart1,
  TrendUp,
  FtxToken,
  Briefcase,
  ProfileTick,
  Profile2User,
  Personalcard,
  DirectboxDefault,
  NotificationBing,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col min-h-screen max-h-screen scrollbar items-center p-5 gap-[25px] border-r w-full max-w-[220px] border-r-[#D0D0D0] overflow-y-scroll">
      <h1 className="text-[#543EE0] font-medium text-[25px]">
        <Link href="/">CHATTER</Link>
      </h1>

      <nav className="flex flex-col gap-5">
        <span className="text-[16px] flex gap-2 items-center">
          <Briefcase className="size-[22px]" />
          <h3>Overview</h3>
        </span>

        <div className="flex flex-col pl-3 text-[14px] gap-5 text-[#626262]">
          <Link
            href="/"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/" && "text-[#543EE0]"
            }`}
          >
            <FtxToken size="20" />
            <p>Feeds</p>
          </Link>

          <Link
            href="/bookmark"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/bookmark" && "text-[#543EE0]"
            }`}
          >
            <Save2 size="20" />
            <p>Bookmarks</p>
          </Link>

          <Link
            href="/team_blog"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/team_blog" && "text-[#543EE0]"
            }`}
          >
            <Profile2User size="20" />
            <p>Team blogs</p>
          </Link>

          <Link
            href="/draft"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/draft" && "text-[#543EE0]"
            }`}
          >
            <DirectboxDefault size="20" />
            <p>Drafts</p>
          </Link>

          <Link
            href="/analytics"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/analytics" && "text-[#543EE0]"
            }`}
          >
            <Chart1 variant="Broken" size="20" />
            <p>Analytics</p>
          </Link>
        </div>
      </nav>

      <nav className="flex flex-col gap-5">
        <span className="text-[16px] flex gap-2 items-center">
          <TrendUp className="size-[22px]" />
          <h3>Trending tags</h3>
        </span>

        <div className="flex flex-col pl-3 text-[14px] gap-5 text-[#626262]"></div>
      </nav>

      <nav className="flex flex-col gap-5">
        <span className="text-[16px] flex gap-2 items-center">
          <Personalcard className="size-[22px]" />
          <h3>Personal</h3>
        </span>

        <div className="flex flex-col pl-3 text-[14px] gap-5 text-[#626262]">
          <Link
            href="/notifications"
            className={`flex gap-2 hover:text-[#543EE0] ${
              pathname === "/notifications" && "text-[#543EE0]"
            }`}
          >
            <NotificationBing size="20" />
            <p>Notifications</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
