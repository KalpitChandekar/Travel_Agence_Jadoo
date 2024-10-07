import { Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex max-w-5xl mt-7 mb-20 items-center mx-auto">
      <div className="w-1/2 flex flex-col gap-6 max-w-md mr-auto">
        <h2 className="text-orange font-bold">
          BEST DESTINATION AROUND THE WORLD
        </h2>
        <h1 className="text-7xl font-bold font-volkhov">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="text-gray font-normal text-sm">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex gap-10 items-center">
          <button className="bg-yellow rounded-lg px-4 py-2 text-white">
            Find out more
          </button>
          <div className="flex gap-2 items-center">
            <div className="p-3 rounded-full bg-orange">
              <Play size="14" className="text-white" fill="white" />
            </div>
            <p className="text-gray text-sm">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/hero.png"
          width={784}
          height={776}
          alt="hero"
          className="w-[32rem]"
        />
      </div>
    </div>
  );
};
export default Hero;
