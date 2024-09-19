import React from "react";

const Card = () => {
  return (
    <div className="bg-white hover:shadow-lg h-64 md:h-[252px] md:w-[321px] grid grid-rows-12 rounded-lg">
      <div className="bg-black/10 w-full h-full row-span-7 rounded-t-lg"></div>
      <div className="bg-white w-full h-full row-span-5 rounded-b-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col p-4">
            <h1 className="text-sm text-bluetitle font-bold">Title</h1>
            <p className="text-base font-medium truncate text-wrap">
              Really some long title here that will be truncated Really some
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
