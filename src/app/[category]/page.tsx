"use client";

import React from "react";

import NewsGrid from "@/components/NewsGrid";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  return (
    <div className="md:mt-6 w-full">
      <NewsGrid category={category} />
    </div>
  );
};

export default CategoryPage;
