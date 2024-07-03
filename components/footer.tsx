import Image from "next/image";
import React from "react";
import logo1 from "@/public/next.svg";
import logo2 from "@/public/vercel.svg";
const Footer = () => {
  return (
    <footer className="w-full h-[160px] border-t-2  mt-32 lg:px-20 px-4 md:px-12 py-6">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">Powered by:</p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[120px]">
            <Image src={logo1} alt="nextlog" className="cursor-pointer" />
          </div>
          <p className="font-bold text-lg mt-2">X</p>
          <div className="w-[120px]">
            <Image src={logo2} alt="nextlog" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
