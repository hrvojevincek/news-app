"use client";

import React, { useState } from "react";
import Card from "./Card";
import CardBreaking from "./CardBreaking";
import LatestNews from "./LatestNews";
import MobileButton from "./MobileButton";

const cards = [
  { id: 1, type: "normal" },
  { id: 2, type: "normal" },
  { id: 3, type: "normal" },
  { id: 4, type: "normal" },
  { id: 5, type: "breaking" },
  { id: 6, type: "normal" },
  { id: 7, type: "normal" },
  { id: 8, type: "normal" },
  { id: 9, type: "normal" },
  { id: 10, type: "normal" },
  { id: 11, type: "normal" },
  { id: 12, type: "normal" },
  { id: 13, type: "normal" },
  { id: 14, type: "normal" },
  { id: 15, type: "normal" },
  { id: 16, type: "normal" },
  { id: 17, type: "normal" },
];

const NewsGrid = () => {
  const [currentView, setCurrentView] = useState<"featured" | "latest">(
    "featured"
  );

  const handleViewChange = (view: "featured" | "latest") => {
    setCurrentView(view);
  };

  return (
    <>
      <MobileButton onSelectView={handleViewChange} />

      <div className="mt-5 sm:hidden">
        {currentView === "featured" ? <Card /> : <LatestNews />}
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-bold mb-4  leading-6">News</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-[22px]">
          {cards.map((card, index) => (
            <React.Fragment key={card.id}>
              {index === 2 ? (
                <div className="row-span-2">
                  <LatestNews />
                </div>
              ) : (
                <div>
                  {card.type === "breaking" ? <CardBreaking /> : <Card />}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
