import Image from "next/image";
import NewsBit from "./NewsBit";

interface Headlines {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

const LatestNews = ({ headlines }: { headlines?: Headlines[] }) => {
  console.log(headlines);

  return (
    <div className="bg-white rounded-md p-4 flex h-[536px] flex-col justify-around row-span-2 col-start-3">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/alert.svg"
          alt="alert"
          width={20}
          height={20}
          className="animate-pulse"
        />
        <p className="text-lg font-bold ">Latest news</p>
      </div>
      <div className="flex flex-col overflow-scroll">
        <NewsBit time="10 min ago" description="Lorem ipsum dolor sit amet" />
      </div>
      <div className="flex flex-col">
        <button className="flex items-center font-medium gap-2 text-bluetitle pt-4">
          See all news
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
