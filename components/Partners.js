import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto my-40">
      <Image src="/sponsor1.png" width={130} height={40} alt="partner1" className="w-26"/>
      <Image src="/sponsor2.png" width={131} height={40} alt="partner2" className="w-26"/>
      <Image src="/sponsor3.png" width={162} height={50} alt="partner3" className="w-26"/>
      <Image src="/sponsor4.png" width={162} height={32} alt="partner4"className="w-26" />
      <Image src="/sponsor5.png" width={94} height={21} alt="partner5" className="w-26"/>
    </div>
  );
};
export default Partners;
