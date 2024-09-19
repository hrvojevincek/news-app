import Link from "next/link";
import Card from "./Card";
import LatestNews from "./LatestNews";
import CardBreaking from "./CardBreaking";

const isActive = false;

const cards = [
  { id: 1, type: "normal" },
  { id: 2, type: "normal" },
  { id: 3, type: "normal" },
  { id: 4, type: "breaking" },
  { id: 5, type: "normal" },
  { id: 6, type: "normal" },
  { id: 7, type: "normal" },
  { id: 8, type: "breaking" },
  { id: 9, type: "normal" },
  { id: 10, type: "normal" },
  { id: 11, type: "normal" },
  { id: 12, type: "breaking" },
  { id: 13, type: "normal" },
  { id: 14, type: "normal" },
  { id: 15, type: "normal" },
  { id: 16, type: "breaking" },
  { id: 17, type: "normal" },
  { id: 18, type: "normal" },
  { id: 19, type: "normal" },
  { id: 20, type: "breaking" },
];

const NewsGrid = () => {
  return (
    <>
      <hr className="bg-grayish mb-5" />
      <div className="font-bold text-xl ml-20 mb-4">News</div>
      <div className="flex gap-6 rounded-lg">
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
        <div className="grid grid-cols-6 gap-6">
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
            <CardBreaking />
          </div>
        </div>
        <div className="flex-1">
          <LatestNews />
        </div>
      </div>
      {/* <div className="grid grid-cols-9 ml-[81px] mt-5">
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
          <CardBreaking />
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-5 ml-[85px] mt-5">
        {cards.map((card, index) => (
          <div key={index} className="w-[322px] aspect-[4/3]">
            {card.type === "breaking" ? <CardBreaking /> : <Card />}
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsGrid;
