import Navbar from "./navbar/navbar";

export default function SubAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-[55%] items-center justify-center max-lg:w-full">
      <Navbar />
      {children}
    </main>
  );
}
