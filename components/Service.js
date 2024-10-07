import Image from "next/image";

const cards = [
  {
    imgUrl: "/service1.png",
    width: 92,
    height: 78,
    title: "Calculate weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    imgUrl: "/service2.png",
    width: 118,
    height: 88,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    imgUrl: "/service3.png",
    width: 67,
    height: 75,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    imgUrl: "/service4.png",
    width: 77,
    height: 66,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];

const Card = ({ title, description, imgUrl, width, height, index }) => {
  return (
    <div
      className={`${
        index === 1 ? "shadow-lg" : ""
      } rounded-3xl flex flex-col gap-4 items-center justify-center py-8 bg-white`}
    >
      <Image
        src={imgUrl}
        alt="service"
        width={width}
        height={height}
        className="w-20"
      />
      <h1 className="">{title}</h1>
      <p className="text-sm text-gray max-w-40 mx-auto">{description}</p>
    </div>
  );
};

const Service = () => {
  return (
    <div className="text-center relative max-w-6xl mx-auto my-20 flex flex-col gap-2">
      <h2 className="text-gray">CATEGORY</h2>
      <h1 className="text-4xl font-volkhov font-bold">
        We Offer Best Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-8">
        {cards.map((card, index) => (
          <Card key={index} index={index} {...card} />
        ))}
      </div>

      <Image
        src="/servicebg.png"
        width={100}
        height={100}
        alt="servicebg"
        className="absolute -bottom-10 left-64 -z-20"
      />
    </div>
  );
};

export default Service;
