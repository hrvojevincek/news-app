import Image from "next/image";
import React from "react";

const Card = ({
  title,
  multimedia,
  section,
  byline,
}: {
  multimedia?: Array<{
    [key: string]: string;
  }>;
  title: string;
  url: string;
  section: string;
  byline: string;
}) => {
  console.log(byline);

  return (
    <div className="bg-white flex flex-col hover:shadow-lg h-[252px] rounded-lg">
      <div className="bg-black/10  rounded-t-lg relative h-3/5">
        {multimedia && multimedia.length > 0 && multimedia[0]?.url ? (
          <Image
            src={multimedia[0].url}
            alt={title}
            fill={true}
            className="rounded-t-lg"
            objectFit="cover"
          />
        ) : null}
      </div>
      <div className="bg-white rounded-b-lg py-1 px-2 justify-between flex flex-col h-2/5">
        <p className="text-[10px] uppercase text-bluetitle font-bold">
          {section}
        </p>
        <p className="text-base font-medium sm:truncate sm:text-wrap">
          {title && title.slice(0, 50)}...
        </p>

        <p className="text-xs text-cardauthor hidden md:block">
          {byline.slice(3, -1)}
        </p>
      </div>
    </div>
  );
};

export default Card;

// h-64 md:h-[252px] md:w-[321px]
