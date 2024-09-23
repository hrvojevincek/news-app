"use client";

import { useGetTopStories } from "@/hooks/useGetTopStories";
import React, { useState } from "react";
import Card from "./Card";
import CardBreaking from "./CardBreaking";
import LatestNews from "./LatestNews";
import MobileButton from "./MobileButton";

const NewsGrid = () => {
  const [currentView, setCurrentView] = useState<"featured" | "latest">(
    "featured"
  );

  const handleViewChange = (view: "featured" | "latest") => {
    setCurrentView(view);
  };

  const { headlines, loading, error } = useGetTopStories();

  console.log(headlines);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <MobileButton onSelectView={handleViewChange} />

      <div className="mt-5 md:mt-0">
        {currentView === "featured" ? (
          <>
            <h1 className="hidden md:block text-xl font-bold mb-2">News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-[22px]">
              {headlines?.map(
                ({ byline, title, url, multimedia, section }, index) => (
                  <React.Fragment key={index}>
                    {index === 2 ? (
                      <div className="row-span-2 hidden md:block">
                        <LatestNews />
                      </div>
                    ) : (
                      <div>
                        {index === 4 ? (
                          <CardBreaking />
                        ) : (
                          <Card
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
          <LatestNews />
        )}
      </div>
    </>
  );
};

export default NewsGrid;
