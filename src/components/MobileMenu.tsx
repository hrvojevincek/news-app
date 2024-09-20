"use client";

import Image from "next/image";
import React from "react";
import SidebarItems from "./SidebarItems";
import Input from "./ui/Input";

interface MobileMenuProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen bg-background z-50 px-4 flex flex-col">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-5 justify-end"
      >
        <Image src="/icons/x.svg" alt="Close" width={24} height={24} />
      </button>

      <div className="mt-28 flex flex-col items-center justify-center space-y-16">
        <h1 className="text-4xl text-black font-black">
          <span className="text-redprimary">My</span>News
        </h1>
        <div className="w-full max-w-sm">
          <Input />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
          <SidebarItems setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
