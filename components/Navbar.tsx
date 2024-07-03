import Link from "next/link";
import React from "react";
import logo from "@/public/next.svg";
import Image from "next/image";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] bg-[#0000001b] backdrop:blur-lg backdrop-blur-2xl">
      <div className="fixed w-full h-full">
        <div className="flex items-center justify-between lg:px-20 px-8 py-8">
          <div className="w-[120px] h-full">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-full h-full" />
            </Link>
          </div>
          <Menu className="text-[#896efd] block md:hidden lg:hidden" />
          <div className="lg:flex md:flex hidden  items-center justify-center">
            <ul className="flex items-center justify-center gap-8 font-semibold">
              <li className="cursor-pointer">JavaScript</li>
              <li className="cursor-pointer">React Js</li>
              <li className="cursor-pointer">Next Js</li>
              <li className="cursor-pointer">TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
