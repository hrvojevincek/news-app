"use client";

import React from "react";
import { useGetTopStories } from "@/hooks/useGetTopStories";
import NewsGrid from "@/components/NewsGrid";
import { Loader } from "lucide-react";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const { headlines, loading, error } = useGetTopStories(category);

  if (error) return <div>Error: {error.message}</div>;

  if (loading) {
    <div className="h-full flex items-center bg-red-600 justify-center">
      <Loader className="size-6 animate-spin text-black" />
    </div>;
  }

  return (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={headlines} category={category} />
    </div>
  );
};

export default CategoryPage;
