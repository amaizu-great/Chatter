"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { selectAuth } from "@/redux/features/authSlice";
import { ProfileAdd, ProfileTick } from "iconsax-react";
import { fetchUserDetails } from "@/utilities/fetchUserDetails";

interface NavBarProfileReduxProps {
  props: any;
}
//prettier-ignore
const NavbarProfileRedux: React.FC<NavBarProfileReduxProps> = (props) => {
  const authState = useSelector(selectAuth);
  const [isClient, setIsClient] = useState(false);
  const {props: { props: { toggle, togglefunction } } } = props;

  
  // This ensures the client-specific logic runs after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    // Rendring Loading animation until the client is ready
    return (
      <div className="bg-white animate-spin size-6 rounded-full border-[2px] border-t-[#543EE0] border-r-[#543EE0]"></div>
    );
  }

  //components
  //i am creating this component to display the user profile image if he/she has one or it should fall back to a default icon
  //also this component is a link when its in big sreen, however its also a button thats open up the sibebar on small screen
  //prettier-ignore
  const UserProfilePic =  () => {
    const Session = useSession()
    const { data } = Session
    const [userDetails, setUserDetails] = useState<any>(false);
    
    useEffect(() => {
      const getUserDetails = async () => {
        const user = await fetchUserDetails(data?.user?.email);
        if (user) {
          setUserDetails(user);
        }
      };
      if(authState){
        // getUserDetails();
      }
    }, []);
    

    if (userDetails) {
        return (
          <>
            <div style={{background: `url(${userDetails.profilePic}) no-repeat center`, backgroundSize: "cover"}} className="max-sm:hidden rounded-full size-8">
            </div>

            <div style={{background: `url(${userDetails.profilePic}) no-repeat center`, backgroundSize: "cover"}} onClick={togglefunction} className={`hidden rounded-full size-7 max-sm:flex ${toggle && "z-10"}`} >
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
      {authState ? (
        <UserProfilePic />
      ) : (
        <Link href="/auth/signup">
          <ProfileAdd color="#FF1400" />
        </Link>
      )}
    </>
  );
};

export default NavbarProfileRedux;
