import type { Metadata } from "next";
import SideScreen from "./sidescreen/sidescreen";

export const metadata: Metadata = {
  title: "Chatter Auth",
  description: "Sign Up To Chatter App",
};

//prettier-ignore
export default function AuthLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="flex h-screen w-full">
      <SideScreen />
      {children}
    </main>
  );
}
