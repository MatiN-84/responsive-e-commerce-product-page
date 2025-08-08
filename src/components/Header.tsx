import React from "react";
const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
function Header({ setNavbar }) {
  return (
    <div className="h-16 flex items-center p-4  border-b-1 border-b-[#e8e8e8] sm:mx-5 sm:mb-20 h-25">
      <div className="flex items-center gap-3 w-full cursor-pointer "  >
        <GiHamburgerMenu size={20} color="grey" className="mt-1 min-sm:hidden" onClick={(e) => setNavbar((prev) => !prev)}/>
        <div className="font-extrabold text-2xl mr-10">sneakers</div>
        <div className="hidden sm:flex ">      
        {menuItems.map((item) => (
          <div key={item} className="   mr-6 text-[#818181] hover:text-black">
            {item}
          </div>
        ))}
      </div>
      </div>

      <div className="flex gap-8">
        <FiShoppingCart size={24} className="mt-[2px] text-greyishblue" />
        <div className="rounded-full border-2 border-gray-950"><FiUser size={24}  /></div>
      </div>
    </div>
  );
}

export default Header;
