import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

export default function FeedsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <Sidebar />
      <main className="flex flex-col w-full">
        <Navbar />
        {children}
      </main>
    </main>
  );
}
