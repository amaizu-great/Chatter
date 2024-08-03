"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import Google from "../../../../public/Google.png";
import { signIn, useSession } from "next-auth/react";

//prettier-ignore
const AuthWithGoogle = () => {
  const pathname = usePathname();
  const { status } = useSession();

  //redirect function thats protects this routes from users that are signed in
  if (status === "authenticated") {
    redirect("/");
  }
  //pretteir-ignore
  return (
    <button type="button" onClick={() => signIn("google")} className="flex gap-2 w-full justify-center border rounded-[8px] outline-none border-[#CED4DA] p-3 text-[14px] active:bg-[#e6ebf0]">
      <Image src={Google} alt={`${Google} icon`} className="w-[22px]"/>
      <p>{pathname == "/auth/login" ? "Log In" : "Sign Up"} with Google</p>
    </button>
  )
}

export default AuthWithGoogle;
