import React from "react";

const NewsBit = ({
  time,
  description,
}: {
  time: string;
  description: string;
}) => {
  return (
    <>
      <p className="text-bluetitle text-[10px] font-bold">{time}</p>
      <p className="font-medium text-sm">{description.slice(0, 70)}...</p>
    </>
  );
};

export default NewsBit;
