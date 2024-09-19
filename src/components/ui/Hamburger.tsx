"use client";

import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Image from "next/image";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="text-black pt-2 z-50 relative" onClick={toggleMenu}>
        <Image
          src="/icons/hamburger.svg"
          alt="Hamburger"
          width={24}
          height={20}
        />
      </button>
      {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Hamburger;
