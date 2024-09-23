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
    <div className="bg-white flex flex-col hover:shadow-lg h-[260px] md:h-[252px] rounded-lg">
      <div className="bg-black/10  rounded-t-lg relative h-3/5">
        {multimedia && multimedia.length > 0 && multimedia[0]?.url ? (
          <Image
            src={multimedia[0].url}
            alt={title}
            priority={true}
            fill={true}
            className="rounded-t-lg"
            style={{ objectFit: "cover" }}
            sizes="auto"
          />
        ) : null}
      </div>
      <div className="bg-white rounded-b-lg sm:py-2 sm:px-2 p-3 flex flex-col h-2/5 justify-between">
        <p className="text-[10px] uppercase text-bluetitle font-bold">
          {section}
        </p>
        <p className="text-base hidden md:block font-medium sm:truncate sm:text-wrap">
          {title && title.slice(0, 50)}...
        </p>
        <p className="text-base font-medium sm:hidden sm:text-wrap">
          {title && title.slice(0, 150)}...
        </p>

        <p className="text-xs text-cardauthor hidden md:block">
          {byline ? byline.slice(3, -1) : "No author"}
        </p>
      </div>
    </div>
  );
};

export default Card;

// h-64 md:h-[252px] md:w-[321px]
