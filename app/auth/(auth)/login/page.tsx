import AuthWithGoogle from "../google/authWithGoogle";

const Login = () => {
  return (
    <main className="gap-6 pt-10 flex flex-col w-full max-w-[60%] items-center">
      <h1 className="font-medium text-[25px]">Welcome Back</h1>

      <form className="flex flex-col w-full gap-6">
        <label htmlFor="email" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Email address</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="rounded-[8px] border p-3 text-[14px] pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1 w-full">
          <p className="text-[12px] font-medium">Password</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-[8px] border p-3 pl-4 outline-none border-[#CED4DA]"
          />
        </label>

        <button className="rounded-[8px] border-none p-3 text-[14px] bg-[#543EE0] text-white ">
          Log In
        </button>
      </form>
      
      <AuthWithGoogle />
    </main>
  );
};

export default Login;
