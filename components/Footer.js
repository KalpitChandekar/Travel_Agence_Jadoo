import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-auto max-w-6xl my-10">
      <div className="flex justify-between ">
        <div className="space-y-4">
          <a href="/">
            <Image src="/footerlogo.png" width={116} height={35} alt="logo" />
          </a>
          <p className="text-sm text-gray">
            Book your trip in minute, get full <br /> Control for much longer.
          </p>
        </div>
        <div className="flex gap-28">
          <div className="space-y-4">
            <h1 className="font-bold text-lg">Company</h1>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Mobile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-lg">Contact</h1>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray text-sm">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-lg">More</h1>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray text-sm">
                  Airlinefees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Airline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-sm">
                  Low for tips
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex">
            <a href="/">
              <Image
                src="/facebook.png"
                width={61}
                height={61}
                alt="facebook"
              />
            </a>
            <a href="/">
              <Image src="/insta.png" width={65} height={65} alt="insta" />
            </a>
            <a href="/app">
              <Image src="/x.png" width={61} height={61} alt="x" />
            </a>
          </div>
          <p className="text-gray">Discover our app</p>
          <div className="flex gap-2 pt-2">
            <a href="/">
              <Image src="/apple.png" width={100} height={35} alt="appstore" />
            </a>
            <a href="/">
              <Image
                src="/playstore.png"
                width={107}
                height={35}
                alt="playstore"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-gray text-sm mt-12">
          All rights reserved@jadoo.co
        </p>
      </div>
    </div>
  );
};
export default Footer;
