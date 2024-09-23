"use client";

import React from "react";

import { Loader } from "lucide-react";

import NewsGrid from "@/components/NewsGrid";
import { useGetTopStories } from "@/hooks/useGetTopStories";

const Page = () => {
  const { headlines, loading, error } = useGetTopStories("home");

  if (error) return <div>Error: {error.message}</div>;

  return loading ? (
    <div className="h-112 w-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-black" />
    </div>
  ) : (
    <div className="md:mt-6 w-full sm:px-4 md:px-0 h-80">
      <NewsGrid articles={headlines} category={"News"} />
    </div>
  );
};

export default Page;
