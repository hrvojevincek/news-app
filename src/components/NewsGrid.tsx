import Link from "next/link";
import Card from "./Card";
import LatestNews from "./LatestNews";

const isActive = false;

const NewsGrid = () => {
  return (
    <>
      <hr className="bg-grayish mb-5" />
      <div className="font-bold text-xl ml-20 mb-4">News</div>
      <div className="flex gap-5 rounded-lg">
        <div>
          <div className="grid -mt-12">
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
                    ? "flex flex-col justify-center items-center text-xs h-14 w-[63px] text-redprimary hover:bg-gray-50 transition-colors"
                    : "flex flex-col justify-center items-center text-xs h-14 w-[63px] text-grayish/70 hover:bg-gray-50 transition-colors"
                }
              >
                <img
                  src={`/icons/${link.toLowerCase()}.svg`}
                  alt={link}
                  width={20}
                  height={20}
                  className={
                    isActive
                      ? "text-redprimary filter-redprimary m-1"
                      : "text-grayish filter-grayish/70 m-1"
                  }
                />
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3 w-[322px] h-[250px]">
            <Card />
          </div>
          <div className="col-span-3 w-[322px]">
            <Card />
          </div>
          <div className="col-span-3 w-[322px]">
            <Card />
          </div>
          <div className="col-span-3 w-[322px] h-[250px]">
            <Card />
          </div>
        </div>
        <div className="flex-1">
          <LatestNews />
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
