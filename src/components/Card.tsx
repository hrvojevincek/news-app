import React from "react";

const Card = () => {
  return (
    <div className="bg-white hover:shadow-lg h-64 md:h-[252px] md:w-[321px] grid grid-rows-12 rounded-lg">
      <div className="bg-black/10 w-full h-full row-span-6 rounded-t-lg"></div>
      <div className="bg-white row-span-5 md:row-span-6 rounded-b-lg p-3 justify-around flex flex-col">
        <div>
          <h1 className="text-[10px] uppercase text-bluetitle font-bold">
            Title
          </h1>
          <p className="text-base font-medium truncate text-wrap">
            Really some long title here that will be truncated Really some
          </p>
        </div>
        <p className="text-xs text-cardauthor hidden md:block">Martina Lopez</p>
      </div>
    </div>
  );
};

export default Card;
