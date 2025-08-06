import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
function Header({ setNavbar }) {
  return (
    <div className="h-16 flex items-center p-4">
      <div className="flex items-center gap-3 w-full cursor-pointer"  onClick={(e) => setNavbar((prev) => !prev)}>
        <GiHamburgerMenu size={20} color="grey" className="mt-1" />
        <div className="font-extrabold text-2xl">sneakers</div>
      </div>

      <div className="flex gap-8">
        <FiShoppingCart size={24} className="mt-[2px] text-greyishblue" />
        <div className="rounded-full border-2 border-gray-950"><FiUser size={24}  /></div>
      </div>
    </div>
  );
}

export default Header;
