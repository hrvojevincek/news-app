import { useTopHeadlines } from "@/hooks/useTopHeadlines";
import { Loader } from "lucide-react";
import Image from "next/image";
import NewsBit from "./NewsBit";
import { useEffect, useRef } from "react";

const LatestNews = () => {
  const { headlines, loading, error, fetchMore } = useTopHeadlines(1);
  const containerRef = useRef(null);

  // const handleScroll = () => {
  //   console.log("HEIGHT", document.documentElement.scrollHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="bg-white border-2 rounded-md p-4 md:h-[536px] flex flex-col justify-around row-span-2 col-start-3">
      <div className="flex items-center gap-2 mb-2">
        <Image
          src="/icons/alert.svg"
          alt="alert"
          width={20}
          height={20}
          className="animate-pulse"
        />
        <p className="text-lg font-bold">Latest news</p>
      </div>
      <div
        className="flex flex-col h-[calc(100vh-380px)] space-y-2 overflow-y-scroll"
        ref={containerRef}
      >
        {headlines?.articles.map(({ title, publishedAt, url }, index) => (
          <div key={index} className="h-24 border-b border-gray-200 pb-2">
            <NewsBit time={publishedAt} description={title} url={url} />
          </div>
        ))}
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
