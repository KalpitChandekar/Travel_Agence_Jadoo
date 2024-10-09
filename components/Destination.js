import { Navigation } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    imgUrl: "/destination1.png",
    width: 311,
    height: 317,
    destination: "Rome, Italy",
    price: "$5,42k",
    days: "10",
  },
  {
    imgUrl: "/destination2.png",
    width: 313,
    height: 317,
    destination: "London, UK",
    price: "$4.2k",
    days: "12",
  },
  {
    imgUrl: "/destination3.png",
    width: 313,
    height: 317,
    destination: "Full, Europe",
    price: "$15k",
    days: "28",
  },
];

const Card = ({ destination, price, imgUrl, width, height, days }) => {
  return (
    <div className="rounded-3xl flex flex-col gap-4 pb-4 shadow-xl bg-white">
      <div className="">
        <Image
          src={imgUrl}
          alt="service"
          width={width}
          height={height}
          className="rounded-3xl w-full" 
        />
      </div>

      <div className="flex justify-between text-sm text-gray px-4">
        <h1 className="">{destination}</h1>
        <p className="">{price}</p>
      </div>
      <div className="flex gap-2 px-4 items-center">
        <Navigation size={18} />
        <p className="text-sm text-gray">{days} Days Trip</p>
      </div>
    </div>
  );
};

const Destination = () => {
  return (
    <div className="text-center relative max-w-6xl mx-auto my-40 flex flex-col gap-2">
      <h2 className="text-gray">TOP SELLING</h2>
      <h1 className="text-4xl font-volkhov font-bold">Top Destinations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-8">
        {cards.map((card, index) => (
          <Card key={index} index={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Destination;
