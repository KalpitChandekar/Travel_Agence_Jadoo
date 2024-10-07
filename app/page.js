import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="relative pt-6">
        <Navbar />
        <Hero />
        <Image
          src="/mainbg.png"
          width={704}
          height={724}
          alt="mainbg"
          className="absolute top-0 right-0 -z-20 w-[35rem]"
        />
      </div>
    </div>
  );
};
export default Page;
