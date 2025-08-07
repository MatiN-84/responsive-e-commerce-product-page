import React, { useState } from "react";
import Slider from "./components/Slider";
import Info from "./components/Info";
const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
import Header from "./components/header";
import { RxCross2 } from "react-icons/rx";
import CartBox from "./components/CartBox";
function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div
        className={` h-159 w-80 z-10 p-3 absolute bg-white ${
          navbar ? "-left-0" : "-left-80"
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

      <div>
        <Header setNavbar={setNavbar} />
        <div className="">
          <Slider />
          <div className="w-9/10 m-auto">
            <Info />
            <CartBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
