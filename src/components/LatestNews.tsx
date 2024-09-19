import Image from "next/image";
import React from "react";
import NewsBit from "./NewsBit";

const LatestNews = () => {
  return (
    <div className="bg-white rounded-md p-4 border-4 border-green-500">
      <div className="flex items-center gap-2">
        <Image src="/icons/alert.svg" alt="alert" width={20} height={20} />
        <p className="text-lg font-bold ">Latest news</p>
      </div>
      <div className="flex-1 flex-col overflow-y-scroll max-h-[calc(65vh-6rem)]">
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
        <NewsBit />
      </div>
      <div className="flex flex-col">
        <button className="flex items-center font-medium gap-2 text-bluetitle pt-4">
          See all news
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
