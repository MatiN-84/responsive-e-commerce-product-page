import  { useState } from "react";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Header from "./components/Header";

import CartBox from "./components/CartBox";
import Menu from "./components/Menu";
function App() {
  const [navbar, setNavbar] = useState(false);
  const [cart, setCart] = useState(0)
  return (
    <>
    <Menu navbar={navbar} setNavbar={setNavbar}/>

      <div>
        <Header setNavbar={setNavbar} cart={cart} setCart={setCart} />
        
        <div className="lg:flex">
          <Slider />
          <div className="w-9/10 m-auto lg:w-6/10">
            <Info />
            <CartBox setCart={setCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
