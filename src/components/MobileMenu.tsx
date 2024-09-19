import React from "react";
import Input from "./ui/Input";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const isActive = false;

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
          {[
            "Home",
            "General",
            "Business",
            "Health",
            "Science",
            "Sports",
            "Technology",
          ].map((link, index) => (
            <Link
              key={index}
              href="#"
              className={
                isActive
                  ? "flex flex-col justify-center items-center text-sm font-bold h-20 border border-gray-200 rounded-lg text-redprimary bg-white shadow-lg hover:bg-gray-50 transition-colors"
                  : "flex flex-col justify-center items-center text-sm font-bold h-20 border border-gray-200 rounded-lg text-grayish bg-white shadow-lg hover:bg-gray-50 transition-colors"
              }
            >
              <Image
                src={`/icons/${link.toLowerCase()}.svg`}
                alt={link}
                width={24}
                height={24}
                className={
                  isActive
                    ? "text-redprimary filter-redprimary m-1"
                    : "text-grayish filter-grayish m-1"
                }
              />
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
