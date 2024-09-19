import React from "react";

const CardBreaking = () => {
  return (
    <div className="bg-cardauthor hover:shadow-lg md:h-[252px] md:w-[321px] rounded-lg flex flex-col items-center justify-center gap-2 p-4">
      <p className="text-white bg-redprimary text-xs uppercase font-bold">
        Breaking
      </p>
      <p className="text-white text-2xl font-bold text-center leading-8">
        Really some long title here that will be truncated Really some
      </p>
      <p className="text-authorgray text-xs">Darko Podravec</p>
    </div>
  );
};

export default CardBreaking;
