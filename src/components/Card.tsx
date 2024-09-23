"use client";

import { Bookmark, BookmarkXIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Multimedia = {
  [key: string]: string;
};

export type CardProps = {
  uri: string;
  multimedia?: Multimedia[];
  title: string;
  url: string;
  section: string;
  byline: string;
};

const Card = ({ uri, title, multimedia, section, byline, url }: CardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setIsBookmarked(
      bookmarks.some((bookmark: CardProps) => bookmark.uri === uri)
    );
  }, [uri]);

  const handleBookmark = useCallback(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const newBookmark = { uri, title, multimedia, section, byline, url };

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark: CardProps) => bookmark.uri !== uri
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, newBookmark])
      );
    }

    setIsBookmarked(!isBookmarked);
  }, [isBookmarked, uri, title, multimedia, section, byline, url]);

  return (
    <div className="bg-white flex relative flex-col hover:shadow-lg h-[260px] md:h-[252px] rounded-lg">
      <div className="bg-black/10  rounded-t-lg relative h-3/5">
        {multimedia && multimedia.length > 0 && multimedia[0]?.url ? (
          <Image
            src={multimedia[0].url}
            alt={title}
            priority={true}
            fill={true}
            className="rounded-t-lg"
            style={{ objectFit: "cover" }}
            sizes="auto"
          />
        ) : null}
      </div>
      <div className="bg-white rounded-b-lg sm:py-2 sm:px-2 p-3 flex flex-col h-2/5 justify-between">
        <p className="text-[10px] uppercase text-bluetitle font-bold">
          {section}
        </p>
        <Link href={url} target="_blank" className="cursor-pointer">
          <p className="text-base hidden md:block font-medium sm:truncate sm:text-wrap cursor-pointer">
            {title && title.slice(0, 50)}...
          </p>
        </Link>
        <Link href={url} target="_blank" className="cursor-pointer sm:hidden">
          <p className="text-base font-medium sm:hidden sm:text-wrap cursor-pointer">
            {title && title.slice(0, 150)}...
          </p>
        </Link>

        <p className="text-xs text-cardauthor hidden md:block truncate">
          {byline ? byline.slice(3, -1) : "No author"}
        </p>
      </div>
      <div className="absolute bottom-2 right-2 cursor-pointer">
        <button onClick={handleBookmark}>
          {isBookmarked ? (
            <BookmarkXIcon className="w-5 h-5 text-grayish/70" />
          ) : (
            <Bookmark className="w-5 h-5 text-grayish/70" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
