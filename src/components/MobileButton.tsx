"use client";

import React, { useState } from "react";

interface MobileButtonProps {
  onSelectView: (view: "featured" | "latest") => void;
}

const MobileButton: React.FC<MobileButtonProps> = ({ onSelectView }) => {
  const [activeView, setActiveView] = useState<"featured" | "latest">(
    "featured"
  );

  const handleClick = (view: "featured" | "latest") => {
    setActiveView(view);
    onSelectView(view);
  };

  return (
    <div className="flex sm:hidden justify-center items-center mt-5">
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-3xl h-10 font-bold w-[102px] ${
            activeView === "featured"
              ? "bg-redprimary/10 text-redprimary"
              : "bg-background text-black"
          }`}
          onClick={() => handleClick("featured")}
        >
          Featured
        </button>
        <button
          className={`px-4 py-2 rounded-3xl h-10 font-bold w-[102px] ${
            activeView === "latest"
              ? "bg-redprimary/10 text-redprimary"
              : "bg-background text-black"
          }`}
          onClick={() => handleClick("latest")}
        >
          Latest
        </button>
      </div>
    </div>
  );
};

export default MobileButton;
