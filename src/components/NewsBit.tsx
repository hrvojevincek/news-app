import React from "react";

const NewsBit = ({
  time,
  description,
}: {
  time: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col h-16 gap-2 py-4">
      <p className="text-bluetitle text-xs font-bold">{time}</p>
      <p className="font-medium">{description}</p>
      <hr className="border-borderbottom mb-3" />
    </div>
  );
};

export default NewsBit;
