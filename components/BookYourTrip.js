import Image from "next/image";

const Step = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Image src={imgSrc} width={47} height={48} alt="steps" className="" />
        <div>
          <h1 className="">{title}</h1>
          <p className="text-sm text-gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BookYourTrip = () => {
  return (
    <div className="flex max-w-6xl mx-auto my-40 justify-around">
      <div className="flex flex-col gap-2 max-w-sm">
        <h2 className="text-gray">Easy and Fast</h2>
        <h1 className="text-4xl font-volkhov font-bold">
          Book Your Next Trip In 3 Easy Steps
        </h1>
        <div className="mt-6 space-y-6">
          <Step
            imgSrc={"/step1.png"}
            title="Choose Destination"
            description=" Choose your destination and select the dates you want to travel"
          />
          <Step
            imgSrc={"/step2.png"}
            title="Make Payment"
            description=" Our payment gateway is highly secured and easy to use."
          />
          <Step
            imgSrc="/step3.png"
            title="Enjoy Your Trip"
            description="Enjoy your trip and make memories that last a lifetime"
          />
        </div>
      </div>

      <div className="flex items-center relative">
        <div className="shadow-xl p-4 rounded-3xl space-y-2">
          <Image
            src="/greece.jpg"
            width={321}
            height={161}
            alt="greece"
            className=""
          />
          <h1>Trip To Greece</h1>
          <p className="text-gray">14-29 June| by Robbin joseph </p>
          <div className="flex gap-2">
            <Image
              src="/leaf.png"
              width={36}
              height={36}
              alt="leaf"
              className=""
            />
            <Image
              src="/map.png"
              width={36}
              height={36}
              alt="map"
              className=""
            />
            <Image
              src="/send.png"
              width={36}
              height={36}
              alt="send"
              className=""
            />
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex gap-2">
              <Image
                src="/building.png"
                width={16}
                height={16}
                alt="building"
                className=""
              />
              <p className="text-sm text-gray">24 people going</p>
            </div>
            <Image
              src="/heart.png"
              width={20}
              height={20}
              alt="heart"
              className=""
            />
          </div>{" "}
        </div>
        <div className="shadow-xl flex gap-2 px-2 py-3 rounded-3xl absolute bottom-16 -right-36 space-y-1 bg-white">
          <div>
            <Image
              src="/rome.png"
              width={50}
              height={50}
              alt="rome"
              className=""
            />{" "}
          </div>
          <div>
            <h2 className="text-gray">Ongoing</h2>
            <h1>Trip To rome</h1>
            <div className="mt-2  space-y-2">
              <p className="text-sm">
                <span className="text-[#8A79DF]">40%</span> complete
              </p>
              <Image
                src="/progress.png"
                width={156}
                height={5}
                alt="progress"
                className=""
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default BookYourTrip;
