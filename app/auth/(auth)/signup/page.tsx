import AuthWithGoogle from "../google/authWithGoogle";

const SignUp = () => {
  return (
    <main className="gap-3 pt-3 flex flex-col w-full max-w-[60%] items-center">
      <h1 className="font-medium text-[25px]">Register as a Writer/Reader</h1>

      <form className="flex flex-col w-full gap-3">
        <section className="flex w-full gap-3 justify-between">
          <label htmlFor="firstname" className="flex flex-col gap-1 w-full">
            <p className="text-[12px] font-medium">First Name</p>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="John"
              className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
            />
          </label>

          <label htmlFor="lastname" className="flex flex-col gap-1 w-full">
            <p className="text-[12px] font-medium">Last Name</p>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Doe"
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
            id="email"
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
            className="rounded-[8px] border p-[10px] text-[14px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Password</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-[8px] border p-[10px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="confirmpassword" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Confirm Password</p>
          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            className="rounded-[8px] border p-[10px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <button className="rounded-[8px] border-none p-3 text-[14px] bg-[#543EE0] text-white ">
          Create Account
        </button>
      </form>

      <AuthWithGoogle />
    </main>
  );
};

export default SignUp;
