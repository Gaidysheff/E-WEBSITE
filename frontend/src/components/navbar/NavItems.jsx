import { FaCartShopping } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NavItems = ({ mobile }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-6",
        mobile ? "flex-col" : "flex-row"
      )}
    >
      <Link
        href="/profile"
        className="flex items-center justify-between group/profile
        transition duration-300 hover:scale-110"
      >
        <div
          className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 
          border-primaryDark shadow-md mr-3"
        >
          {/* Profile picture container */}
        </div>

        <div
          className="text-lg font-medium text-primaryDark 
          group-hover/profile:text-primaryDark/50 "
        >
          Ivan Ivanov
        </div>
      </Link>

      <button className="nav-btn">Logout</button>
      <button className="nav-btn">Login</button>

      <div
        className="relative flex items-center h-[60px] w-[60px] justify-center 
        cursor-pointer group/cart hover:scale-110"
      >
        <FaCartShopping
          className="text-4xl text-primaryDark hover:text-primaryDark/50 
        transition duration-300"
        />

        <span
          className="absolute top-0 right-0 px-3 py-1 bg-red-500 rounded-full 
          text-white group-hover/cart:bg-red-400"
        >
          3
        </span>
      </div>
    </div>
  );
};

export default NavItems;
