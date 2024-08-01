"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginCurve, LogoutCurve } from "iconsax-react";
import setAuthState from "@/customFunction/setAuthState/setAuthState";
import { selectAuth, setAuthStateFalse } from "@/redux/features/authSlice";

const LogoutButtonRedux = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);
  const [isClient, setIsClient] = useState(false);

  // This ensures the client-specific logic runs after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  setAuthState();

  if (!isClient) {
    // Rendring Loading animation until the client is ready
    return (
      <div className="bg-white animate-spin size-6 rounded-full border-[2px] border-t-[#543EE0] border-r-[#543EE0]"></div>
    );
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
          <LoginCurve />
          <p>Log in</p>
        </Link>
      )}
    </>
  );
};

export default LogoutButtonRedux;
