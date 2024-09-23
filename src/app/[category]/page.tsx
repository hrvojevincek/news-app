"use client";

import React from "react";
import { useGetTopStories } from "@/hooks/useGetTopStories";
import NewsGrid from "@/components/NewsGrid";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  const { headlines, loading, error } = useGetTopStories(category);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={headlines} category={category} />
    </div>
  );
};

export default CategoryPage;
