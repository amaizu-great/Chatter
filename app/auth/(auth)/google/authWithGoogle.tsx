"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

//prettier-ignore
const AuthWithGoogle = () => {
  const pathname = usePathname();

  return (
    <button type="button" className="flex gap-2 w-full justify-center border rounded-[8px] outline-none border-[#CED4DA] p-3 text-[14px]">
      <Image src="" alt=""/>
      <p>{pathname == "/auth/login" ? "Log In" : "Sign Up"} with Google</p>
    </button>
  )
}

export default AuthWithGoogle;
