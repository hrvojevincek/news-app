"use client";

import React from "react";
import { useGetTopStories } from "@/hooks/useGetTopStories";
import NewsGrid from "@/components/NewsGrid";

const Page = () => {
  const { headlines, loading, error } = useGetTopStories("home");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={headlines} category={"News"} />
    </div>
  );
};

export default Page;
