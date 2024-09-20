import React from "react";

const Card = () => {
  return (
    <div className="bg-white hover:shadow-lg flex flex-col rounded-lg">
      <div className="bg-black/10 h-36 rounded-t-lg">slike</div>
      <div className="bg-white h-28 rounded-b-lg p-3 justify-around flex flex-col">
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

// h-64 md:h-[252px] md:w-[321px]
