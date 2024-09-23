import React from "react";

import { formatDistanceToNow, parseISO } from "date-fns";
import Link from "next/link";

const NewsBit = ({
  url,
  time,
  description,
}: {
  url: string;
  time: string;
  description: string;
}) => {
  const timeAgo = formatDistanceToNow(parseISO(time), { addSuffix: true });

  return (
    <Link href={url ?? ""} target="_blank" className="cursor-pointer">
      <p className="text-bluetitle text-[10px] font-bold">{timeAgo}</p>
      <p className="font-medium text-sm">{description.slice(0, 70)}...</p>
    </Link>
  );
};

export default NewsBit;
