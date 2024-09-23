import { useState, useEffect, useCallback, useRef } from "react";
import { useTopHeadlines } from "@/hooks/useTopHeadlines";
import Image from "next/image";
import NewsBit from "./NewsBit";
import { Loader } from "lucide-react";

const LatestNews = () => {
  const [page, setPage] = useState(1);
  const { headlines, loading, error, fetchMore } = useTopHeadlines(page);
  const [articles, setArticles] = useState([]);
  const containerRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (headlines?.articles) {
      setArticles((prevArticles) => [...prevArticles, ...headlines.articles]);
      setIsInitialLoad(false);
    }
  }, [headlines]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading]);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  if (error) return <div>Error: {error.message}</div>;

  if (isInitialLoad) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 animate-spin text-black" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md p-4 flex h-[536px] flex-col justify-around row-span-2 col-start-3">
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
        ref={containerRef}
        className="flex flex-col space-y-2 overflow-y-auto"
        style={{ height: "calc(100% - 60px)" }}
      >
        {articles.map(({ title, publishedAt, url }, index) => (
          <div key={index} className="h-24 border-b border-[#F4F5F8] pb-2">
            <NewsBit time={publishedAt} description={title} url={url} />
          </div>
        ))}
        {loading && (
          <div className="flex justify-center items-center py-4">
            <Loader className="size-6 animate-spin text-black" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNews;
