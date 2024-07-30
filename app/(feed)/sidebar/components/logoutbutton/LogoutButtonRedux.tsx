"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Login, LogoutCurve } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setAuthStateFalse } from "@/redux/features/authSlice";

const LogoutButtonRedux = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  const [isClient, setIsClient] = useState(false);

  // This ensures the client-specific logic runs after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render placeholder content or nothing until the client is ready
    return( <div>
       <svg className="animation-spin size-2" viewBox="0 0 24 24"></svg> 
    </div>);
  }

  // functions
  const LogUserOut = async () => {
    await signOut();
    dispatch(setAuthStateFalse());
  };

  return (
    <>
      {authState ? (
        <button onClick={LogUserOut} className="flex gap-2 text-[#FF1400]">
          <LogoutCurve size="20" />
          <p>Log Out</p>
        </button>
      ) : (
        <Link href="/auth/signup" className="flex gap-2 text-[#543EE0]">
          <Login />
          Log in
        </Link>
      )}
    </>
  );
};

export default LogoutButtonRedux;
