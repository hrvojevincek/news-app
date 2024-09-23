import { useGetBreakingStories } from "@/hooks/useGetBreakingStories";
import Link from "next/link";
import React from "react";

const CardBreaking = (category: { category: string }) => {
  const { headlines, loading, error } = useGetBreakingStories(
    category.category
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-cardauthor md:h-[252px] gap-3 flex flex-col justify-center items-center hover:shadow-lg rounded-lg p-4">
      <p className="text-white bg-redprimary text-xs uppercase font-bold text-center">
        Breaking
      </p>
      <Link href={headlines?.[0].url ?? ""} target="_blank">
        <p className="text-white text-2xl font-bold text-center cursor-pointer leading-8">
          {headlines?.[0].title}
        </p>
      </Link>
      <p className="text-authorgray text-xs text-center">
        {headlines?.[0].byline}
      </p>
    </div>
  );
};

export default CardBreaking;
