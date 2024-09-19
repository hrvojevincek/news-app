import React from "react";
import Input from "./ui/Input";
import Hamburger from "./ui/Hamburger";
import MobileButton from "./MobileButton";

const Header = () => {
  return (
    <header className="md:container mx-auto grid grid-cols-2 gap-5 sm:grid-cols-3 mt-5 items-center">
      <h1 className="text-4xl text-black font-black">
        <span className="text-redprimary">My</span>News
      </h1>
      <div className="sm:hidden block justify-self-end">
        <Hamburger />
      </div>
      <div className="col-span-2">
        <Input />
      </div>
      <div className="align-center sm:hidden block col-span-2">
        <MobileButton />
      </div>
    </header>
  );
};

export default Header;
