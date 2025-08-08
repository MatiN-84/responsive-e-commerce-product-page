import React, { useState } from "react";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Header from "./components/header";

import CartBox from "./components/CartBox";
import Menu from "./components/Menu";
function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <Menu navbar={navbar} setNavbar={setNavbar}/>

      <div>
        <Header setNavbar={setNavbar} />
        <div className="lg:flex">
          <Slider />
          <div className="w-9/10 m-auto ">
            <Info />
            <CartBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
