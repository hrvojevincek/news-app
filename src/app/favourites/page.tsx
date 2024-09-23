"use client";

import React, { useEffect, useState } from "react";

import Card from "@/components/Card";
import { CardProps } from "@/components/Card";

const FavouritesPage = () => {
  const [bookmarks, setBookmarks] = useState<CardProps[] | []>([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("bookmarks") || "[]",
    );
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div className="w-full mt-6">
      <h1 className="text-xl font-bold mb-4">Favourites</h1>

      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookmarks.map((bookmark, index) => (
            <Card key={index} {...bookmark} />
          ))}
        </div>
      ) : (
        <div className="text-center flex items-center justify-center h-full text-black">
          You have no bookmarks!
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
