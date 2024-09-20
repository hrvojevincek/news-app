import React from "react";

const NewsBit = ({
  time,
  description,
}: {
  time: string;
  description: string;
}) => {
  console.log(time);
  console.log(description);

  return (
    <div className="flex flex-col h-16 gap-1 py-4">
      <p className="text-bluetitle text-xs font-bold">{time}</p>
      <p className="font-medium text-sm">{description.slice(0, 70)}...</p>
      <hr className="border-grayish py-1" />
    </div>
  );
};

export default NewsBit;
