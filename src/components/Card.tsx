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
  return (
    <div className="bg-white hover:shadow-lg flex flex-col rounded-lg">
      <div className="bg-black/10 h-36 rounded-t-lg relative">
        {multimedia && multimedia.length > 0 && multimedia[0]?.url ? (
          <Image
            src={multimedia[1].url}
            alt={title}
            fill={true}
            objectFit="cover"
          />
        ) : null}
      </div>
      <div className="bg-white rounded-b-lg p-3 justify-around flex flex-col min-h-[112px]">
        <div>
          <p className="text-[10px] uppercase text-bluetitle font-bold">
            {section}
          </p>
          <p className="text-base font-medium sm:truncate sm:text-wrap">
            {title && title.slice(0, 70)}...
          </p>
        </div>
        <p className="text-xs text-cardauthor hidden md:block">{byline}</p>
      </div>
    </div>
  );
};

export default Card;

// h-64 md:h-[252px] md:w-[321px]
