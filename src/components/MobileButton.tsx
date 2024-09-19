"use client";

import React from "react";

const MobileButton = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex gap-2">
        <button className="bg-redprimary/10 text-redprimary px-4 py-2 rounded-3xl h-10 font-bold w-[102px] ">
          Featured
        </button>
        <button className="bg-background text-black px-4 py-2 w-[102px]">
          Latest
        </button>
      </div>
    </div>
  );
};

export default MobileButton;
