import { useTopHeadlines } from "@/hooks/useTopHeadlines";
import Image from "next/image";
import NewsBit from "./NewsBit";

const LatestNews = () => {
  const { headlines, loading, error } = useTopHeadlines();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
      <div className="flex flex-col space-y-2 overflow-scroll">
        {headlines?.articles?.map(({ title, publishedAt }, index) => (
          <div key={index} className=" h-24 border-b border-[#F4F5F8] pb-2">
            <NewsBit key={index} time={publishedAt} description={title} />
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
