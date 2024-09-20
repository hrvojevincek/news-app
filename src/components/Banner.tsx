import React from "react";

const Banner = () => {
  return (
    <div className="bg-redprimary h-[60px] relative">
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
          <button className="px-2 py-1 text-sm font-bold text-white rounded">
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
