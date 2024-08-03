"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthWithGoogle from "../google/authWithGoogle";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  const loggUserIn = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      redirect: false, // Set to false to handle response locally
      email,
      password,
    });
  };
  return (
    <main className="gap-6 pt-10 flex flex-col w-full max-w-[60%] items-center max-md:pt-5 max-md:max-w-[80%] max-md:gap-4 max-sm:pt-5 max-sm:max-w-[85%]">
      <h1 className="font-medium text-center text-[25px] max-md:text-[22px] max-sm:text-[18px]">
        Welcome Back
      </h1>

      <form
        onSubmit={(e) => loggUserIn(e)}
        className="flex flex-col w-full gap-6 max-md:gap-4"
      >
        <label htmlFor="email" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Email address</p>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[8px] border p-[10px] text-[14px] w-full pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Password</p>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[8px] border p-[10px] text-[14px] pl-4 w-full outline-none border-[#CED4DA]"
          />
        </label>

        <button className="rounded-[8px] border-none p-[10px] text-[14px] bg-[#543EE0] text-white w-full active:bg-[#4131af]">
          Log In
        </button>
      </form>

      <AuthWithGoogle />
    </main>
  );
};

export default Login;
