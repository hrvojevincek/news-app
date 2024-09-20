"use client";

import Card from "@/components/Card";
import Latest from "@/components/LatestNews";
import MobileButton from "@/components/MobileButton";
import NewsGrid2 from "@/components/NewsGrid";
import { useState } from "react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"featured" | "latest">(
    "featured"
  );

  const handleViewChange = (view: "featured" | "latest") => {
    setCurrentView(view);
  };

  return (
    <div className="mt-10 sm:mt-6">
      <MobileButton onSelectView={handleViewChange} />
      <div className="mt-5 sm:hidden">
        {currentView === "featured" ? <Card /> : <Latest />}
      </div>
      <NewsGrid2 />
    </div>
  );
}
