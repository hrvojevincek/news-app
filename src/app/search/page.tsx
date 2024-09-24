"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

import NewsGrid from "@/components/NewsGrid";
import { useGetSearchArticles } from "@/hooks/useGetSearchArticles";
import { NYTArticle } from "@/hooks/useGetTopStories";
import { Loader } from "lucide-react";

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { headlines, loading, error } = useGetSearchArticles(search);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {loading && (
        <div className="h-112 w-full flex items-center justify-center">
          <Loader className="size-6 animate-spin text-black" />
        </div>
      )}
      <div className="md:mt-6 w-full">
        <NewsGrid
          articles={headlines as unknown as NYTArticle[]}
          category={`Search Results for: ${search}`}
        />
      </div>
    </>
  );
};

export default Page;
