"use client";
import Link from "next/link";
import { useState } from "react";
import { ProfileAdd, ProfileTick } from "iconsax-react";

interface ProfileProps {
  toggle: boolean;
  togglefunction: () => void;
}

const NavBarProfile: React.FC<ProfileProps> = (props) => {
  const [user, setUser] = useState(false);
  const { toggle, togglefunction } = props;

  //i am creating this component to display the user profile image if he/she has one or it should fall back to a default icon
  //also this component is a link when its in big sreen, however its also a button thats open up the sibebar on small screen
  //prettier-ignore
  const Profile_Icon = () => {
    const userprofile = false

  if (userprofile) {
    return (
      <>
        <div style={{background: `url(${'profile'}) no-repeat center`, backgroundSize: "cover"}} className="max-sm:hidden">
          <div></div>
        </div>
        <div style={{background: `url(${'profile'}) no-repeat center`, backgroundSize: "cover"}} onClick={togglefunction} className={`hidden max-sm:flex ${toggle && "z-10"}`} >
          <div></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button className="text-[#543ee0] max-sm:hidden">
          <ProfileTick />
        </button>
        <button onClick={togglefunction} className={`hidden text-[#543ee0] max-sm:flex ${toggle && "z-10"}`} >
          <ProfileTick />
        </button>
      </>
    );
  }
};

  return (
    <>
      {user ? (
        <Profile_Icon />
      ) : (
        <Link href="/auth/signup">
          <ProfileAdd color="#FF1400" />
        </Link>
      )}
    </>
  );
};

export default NavBarProfile;
