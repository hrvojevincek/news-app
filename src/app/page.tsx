"use client";

import { useState } from "react";
import Latest from "@/components/LatestNews";
import Card from "@/components/Card";
import MobileButton from "@/components/MobileButton";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  const [currentView, setCurrentView] = useState<"featured" | "latest">(
    "featured"
  );

  const handleViewChange = (view: "featured" | "latest") => {
    setCurrentView(view);
  };

  return (
    <div className="sm:container mt-10 sm:mt-6">
      <MobileButton onSelectView={handleViewChange} />
      <div className="mt-5 sm:hidden">
        {currentView === "featured" ? <Card /> : <Latest />}
      </div>
      <NewsGrid />
    </div>
  );
}
