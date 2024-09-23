"use client";

import React from "react";
import { useGetTopStories } from "@/hooks/useGetTopStories";
import NewsGrid from "@/components/NewsGrid";
import { Loader } from "lucide-react";

const Page = () => {
  const { headlines, loading, error } = useGetTopStories("home");

  if (loading) {
    <div className="h-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-black" />
    </div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={headlines} category={"News"} />
    </div>
  );
};

export default Page;
