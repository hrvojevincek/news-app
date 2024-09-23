import NewsGrid from "@/components/NewsGrid";
import React from "react";

const page = () => {
  return (
    <div className="md:mt-6 w-full">
      <NewsGrid articles={[]} />
    </div>
  );
};

export default page;
