"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthWithGoogle from "../google/authWithGoogle";

const SignUp = () => {
  const [email, setEmail] = useState<any>("");
  const [lastname, setLastName] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [firstname, setFirstName] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  const [passwordDoesntMacth, setPasswordDosentmacth] =
    useState<Boolean>(false);

  const signUpUser = (e: any) => {
    e.preventDefault();
    let name = `${firstname} ${lastname}`;

    if (password === confirmPassword) {
      signIn("credentials", {
        redirect: false, // Set to false to handle response locally
        name,
        email,
        password,
      });
    } else {
      setPasswordDosentmacth(true);
    }
  };

  return (
    <main className="gap-3 pt-3 flex flex-col w-full max-w-[60%] items-center max-md:gap-5 max-md:max-w-[80%] max-sm:pt-1 max-sm:max-w-[85%]">
      <h1 className="font-medium text-center text-[25px] max-md:text-[22px] max-sm:text-[18px]">
        Register as a Writer/Reader
      </h1>

      <form
        onSubmit={(e) => signUpUser(e)}
        className="flex flex-col w-full gap-3"
      >
        <section className="flex w-full gap-3 justify-between max-md:flex-col">
          <label
            htmlFor="firstname"
            className="flex flex-col gap-1 w-[50%] max-md:w-full"
          >
            <p className="text-[12px] font-medium">First Name</p>
            <input
              required
              type="text"
              id="firstname"
              value={firstname}
              name="firstname"
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
            />
          </label>

          <label
            htmlFor="lastname"
            className="flex flex-col gap-1 w-[50%] max-md:w-full"
          >
            <p className="text-[12px] font-medium">Last Name</p>
            <input
              required
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
            />
          </label>
        </section>

        <label className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">What Are you Joing As?</p>

          <select
            id="option"
            name="option"
            className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
          >
            <option value="Writer">Writer</option>
            <option value="Reader">Reader</option>
          </select>
        </label>

        <label htmlFor="email" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Email address</p>
          <input
            required
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="JohnDoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Password</p>
          <input
            required
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[8px] border text-[14px] p-[10px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="confirmpassword" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Confirm Password</p>
          <input
            required
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordDosentmacth(false);
            }}
            className={`rounded-[8px] border text-[14px] p-[10px] pl-4 outline-none  ${
              confirmPassword !== password
                ? "border-[#FF1400]"
                : "border-[#CED4DA]"
            }`}
          />
          <p
            className={` ${
              passwordDoesntMacth ? "flex" : "hidden"
            } text-[11px] text-[#FF1400]`}
          >
            Password Does not macth{" "}
          </p>
        </label>

        <button className="rounded-[8px] border-none p-3 text-[14px] bg-[#543EE0] text-white active:bg-[#4131af]">
          Create Account
        </button>
      </form>

      <AuthWithGoogle />
    </main>
  );
};

export default SignUp;
