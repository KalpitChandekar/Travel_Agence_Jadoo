import { Mail } from "lucide-react";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-28 max-w-6xl mx-auto bg-[#f7f4ff] rounded-tl-[6rem] rounded-xl gap-16 my-40 relative">
      <h1 className="text-3xl text-center text-gray ">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h1>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center text-[#39425D] bg-white px-2 rounded-xl">
          <Mail size={24} />
          <input
            type="email"
            placeholder="Your email"
            className="outline-none "
          />
        </div>
        <button className="bg-orange rounded-lg px-4 py-2 text-white">
          Subscribe
        </button>
        <Image
          src="/lines1.png"
          width={390}
          height={331}
          alt="lines"
          className="absolute left-0 bottom-0"
        />
        <Image
          src="/lines2.png"
          width={264}
          height={352}
          alt="lines"
          className="absolute right-0 top-0"
        />
        <Image
          src="/location.png"
          width={70}
          height={70}
          alt="location"
          className="absolute -right-2 -top-2 w-12"
        />
        <Image
          src="/dotes.png"
          width={153}
          height={166}
          alt="dotes"
          className="absolute -z-10 -right-12 -bottom-16 rotate-90 w-24"
        />
      </div>
    </div>
  );
};
export default Subscribe;
