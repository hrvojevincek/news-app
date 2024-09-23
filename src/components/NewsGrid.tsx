"use client";

import React, { useState } from "react";
import Card from "./Card";
import CardBreaking from "./CardBreaking";
import LatestNews from "./LatestNews";
import MobileButton from "./MobileButton";
import { NYTArticle } from "@/hooks/useGetTopStories";

interface NewsGridProps {
  category?: string;
  articles?: NYTArticle[] | null;
}

export const NewsGrid = ({ articles, category = "Home" }: NewsGridProps) => {
  const [currentView, setCurrentView] = useState<"featured" | "latest">(
    "featured"
  );
  const handleViewChange = (view: "featured" | "latest") => {
    setCurrentView(view);
  };

  return (
    <>
      <MobileButton onSelectView={handleViewChange} />

      <div className="mt-5 md:mt-0 h-full">
        {currentView === "featured" ? (
          <>
            <h1 className="hidden md:block text-xl font-bold mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-[22px]">
              {articles?.map(
                ({ uri, byline, title, url, multimedia, section }, index) => (
                  <React.Fragment key={index}>
                    {index === 2 ? (
                      <div className="row-span-2 hidden md:block">
                        <LatestNews />
                      </div>
                    ) : (
                      <div>
                        {index === 4 ? (
                          <CardBreaking category={category} />
                        ) : (
                          <Card
                            uri={uri}
                            byline={byline}
                            title={title}
                            url={url}
                            multimedia={multimedia}
                            section={section}
                          />
                        )}
                      </div>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </>
        ) : (
          <div className="md:hidden block">
            <LatestNews />
          </div>
        )}
      </div>
    </>
  );
};

export default NewsGrid;
