import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex max-w-6xl justify-between items-center mx-auto mt-6">
      <a href="/">
        <Image
          src="/logo.png"
          width={114}
          height={34}
          alt="logo"
          className="w-20"
        />
      </a>
      <div className="flex items-center  gap-10">
        <ul className="flex  items-center gap-10">
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
            <a href="/">Hotels</a>
          </li>
          <li>
            <a href="/">Fights</a>
          </li>
          <li>
            <a href="/">Bookings</a>
          </li>
          <li>
            <a href="/">Destination</a>
          </li>
        </ul>
        <ul className="flex  items-center gap-10">
          <li>
            <a href="/">Login</a>
          </li>
          <button
            className="text-center py-1 px-3 border-2 rounded-lg
         border-black"
          >
            Sign up
          </button>
          <div className="flex items-center justify-center">
            EN
            <ChevronDown size="18" />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
