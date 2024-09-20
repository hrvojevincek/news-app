import Image from "next/image";
import Link from "next/link";
import React from "react";

const isActive = false;

const Sidebar = () => {
  return (
    <div className="mt-5 hidden lg:block">
      {[
        "Home",
        "General",
        "Business",
        "Health",
        "Science",
        "Sports",
        "Technology",
      ].map((link, index) => (
        <Link
          key={index}
          href="#"
          className={
            isActive
              ? "flex flex-col justify-center items-center text-xs h-14 text-redprimary hover:bg-gray-50 transition-colors"
              : "flex flex-col justify-center items-center text-xs h-14 text-grayish/70 hover:bg-gray-50 transition-colors"
          }
        >
          <Image
            src={`/icons/${link.toLowerCase()}.svg`}
            alt={link}
            width={20}
            height={20}
            className={
              isActive
                ? "text-redprimary filter-redprimary m-1"
                : "text-grayish filter-grayish/70 m-1 hover:to-black"
            }
          />
          {link}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
