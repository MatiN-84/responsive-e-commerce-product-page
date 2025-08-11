import React from "react";
const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
import { RxCross2 } from "react-icons/rx";
function Menu({navbar , setNavbar}) {
  return (

    <div
      className={` h-159 w-80 z-10 p-3 absolute bg-white  sm:hidden z-10000 ${
        navbar ? "min-sm:-left-0" : "min-sm:-left-80"
      } transition-all duration-400 ${
        navbar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <RxCross2
        size={24}
        color="hsl(0, 0%, 30.1%) "
        style={{ cursor: "pointer" }}
        onClick={(e) => setNavbar(false)}
      />

      <div className="mt-13">
        {menuItems.map((item) => (
          <div key={item} className="mt-2 p-2 font-bold">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
