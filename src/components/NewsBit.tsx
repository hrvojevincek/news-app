import { differenceInHours, format, parseISO } from "date-fns";
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
  const formatFullTime = (time: Date) => {
    const now = new Date();
    const hoursAgo = differenceInHours(now, time);

    if (hoursAgo < 24) {
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      return format(time, "HH:mm");
    }
  };

  return (
    <Link href={url ?? ""} target="_blank" className="cursor-pointer">
      <p className="text-bluetitle text-[10px] font-bold">
        {formatFullTime(parseISO(time))}
      </p>
      <p className="font-medium text-sm">{description.slice(0, 70)}...</p>
    </Link>
  );
};

export default NewsBit;
