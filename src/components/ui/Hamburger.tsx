"use client";

import { useState } from "react";

import Image from "next/image";

import MobileMenu from "../MobileMenu";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
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
