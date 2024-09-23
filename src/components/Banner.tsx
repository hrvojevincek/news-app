"use client";
import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle the "No, Thanks" button click
  const handleNoThanks = () => {
    // Trigger the animation
    setIsAnimating(true);
    // Remove the banner after the animation ends
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // match the animation duration
  };

  // Don't render the banner if it's not visible
  if (!isVisible) return null;

  return (
    <div
      className={`bg-redprimary h-[60px] relative transform transition-transform duration-500 ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container absolute inset-0 flex items-center">
        <div className="flex flex-wrap mr-auto items-center gap-4 text-white">
          <p className="md:text-md md:font-bold text-sm">
            Make MyNews your homepage
          </p>
          <p className="font-light md:block hidden">
            Every day discover what is trending on internet
          </p>
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            className="px-2 py-1 text-sm font-bold text-white rounded"
            onClick={handleNoThanks}
          >
            No, Thanks
          </button>
          <button className="px-3 py-1 bg-white text-black font-bold rounded-md">
            GET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
