import React from "react";

import Link from "next/link";

import Hamburger from "./ui/Hamburger";
import Input from "./ui/Input";

const Header = () => {
  return (
    <header className="mx-auto grid sm:grid-cols-3 gap-5 sm:gap-6 md:grid-cols-12 mt-5 items-center">
      <Link
        href="/"
        className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-2"
      >
        <h1 className="text-4xl text-black font-black">
          <span className="text-redprimary">My</span>News
        </h1>
      </Link>
      <div className="md:hidden block justify-self-end">
        <Hamburger />
      </div>
      <div className="col-span-2 sm:col-span-9 md:col-span-8">
        <Input />
      </div>
      <hr className="bg-grayish col-span-12 sm:block hidden" />
    </header>
  );
};

export default Header;
