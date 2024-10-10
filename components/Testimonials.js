import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex max-w-6xl mx-auto my-40 justify-around">
      <div className="flex flex-col gap-10 max-w-[20rem]">
        <div className="space-y-2">
          <h2 className="text-gray">TESTIMONIAL</h2>
          <h1 className="text-4xl font-volkhov font-bold">
            What People Say About Us.
          </h1>
        </div>
        <div className="text-5xl text-[#E5E5E5]">
          <span className="text-[#181e4b]">.</span> . .
        </div>
      </div>

      <div className="flex items-center relative">
        <div className="shadow-xl p-4 rounded-3xl flex">
          <div>
            <Image
              src="/testimonial.png"
              width={76}
              height={76}
              alt="testimonial"
              className=""
            />
          </div>
          <div className="space-y-6 pt-16">
            <p className="text-gray text-sm max-w-sm">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div className="space-y-1">
              <h1 className="text-gray">Mike taylor</h1>
              <p className="text-gray text-sm">Lahore,Pakistan</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 absolute bottom-6 -right-20 ">
          <ChevronUp className="text-gray" size={18}/>
          <ChevronDown size={18}/>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
