import { useCallback, useRef } from "react";

import Image from "next/image";

import { useTopHeadlines } from "@/hooks/useTopHeadlines";

import NewsBit from "./NewsBit";
import { Loader } from "lucide-react";

const LatestNews = () => {
  const { headlines, loading, fetchMore } = useTopHeadlines(1);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastNewsBitRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && headlines?.articles.length) {
          fetchMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, headlines, fetchMore]
  );

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
      <div className="flex flex-col h-[calc(100vh-386px)] space-y-2 overflow-y-scroll">
        {loading && (
          <div className="h-full w-full flex items-center justify-center">
            <Loader className="size-6 animate-spin text-black" />
          </div>
        )}
        {headlines?.articles.map(({ title, publishedAt, url }, index) => (
          <div
            key={index}
            className="h-24 border-b border-gray-200 pb-2"
            ref={
              index === headlines.articles.length - 1 ? lastNewsBitRef : null
            }
          >
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
