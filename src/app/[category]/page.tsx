"use client";

import React from "react";

import { Loader } from "lucide-react";

import NewsGrid from "@/components/NewsGrid";
import { useGetTopStories } from "@/hooks/useGetTopStories";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const { headlines, loading, error } = useGetTopStories(category);

  if (error) return <div>Error: {error.message}</div>;

  return loading ? (
    <div className="h-112 w-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-black" />
    </div>
  ) : (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={headlines} category={category} />
    </div>
  );
};

export default CategoryPage;
