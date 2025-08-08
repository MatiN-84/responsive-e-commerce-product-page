import React from "react";
import image1 from "../assets/image1big.jpg";
import imageM1 from "../assets/icon-next.svg";
import imageM2 from "../assets/icon-previous.svg";

function Slider() {
  return (
    <div>
      <div className="relative">
        <div className="sm:hidden flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
          <img src={imageM2} alt="" />
        </div>
        <div className="m-auto">
          <img
            src={image1}
            alt="product image"
            className=" w-full sm:w-100 m-auto rounded-lg lg:w-3/5 max-w-110  "
          />
        </div>
        <div className="sm:hidden flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
          <img src={imageM1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
