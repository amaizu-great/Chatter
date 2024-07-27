"use client";
import { useState } from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

//prettier-ignore
export default function FeedsLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [sideBar , setSideBar] = useState(false)

  const toggleSideBar = () =>{
    if(sideBar){
      setSideBar(false)
    }else{
      setSideBar(true)
    }
  }
  
  return (
    <main className="flex">
      <Sidebar toggle={sideBar} />
      <main className="flex flex-col w-full gap-8 items-center">
        <Navbar toggle={sideBar} togglefunction={toggleSideBar}/>
        {children}
      </main>
    </main>
  );
}
