import React, { useEffect, useState } from "react";
import imageB1 from "../assets/image1big.jpg";
import imageB2 from "../assets/image2big.jpg";
import imageB3 from "../assets/image3big.jpg";
import imageB4 from "../assets/image4big.jpg";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const images: string[] = [imageB1, imageB2, imageB3, imageB4];
const smallImages: string[] = [image1, image2, image3, image4];
import imageM1 from "../assets/icon-next.svg";
import imageM2 from "../assets/icon-previous.svg";
import { changeImage } from "../helpers/helper";

function Slider() {
  const [imageCode, setImageCode] = useState(0)
  const [image, setImage] = useState(images[0]);
  useEffect(()=> {
    setImage(images[imageCode])
  },[imageCode])
  
  return (
    <div>
      <div className="relative">
        <div
          onClick={() => setImageCode(changeImage("MINUS",imageCode))}
          className="sm:hidden flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 left-4 cursor-pointer"
        >
          <img src={imageM2} alt="" />
        </div>
        <div className="m-auto flex justify-around md:flex-col">
          <div>
            {" "}
            <img
              src={image}
              alt="product image"
              className="w-full sm:w-100 m-auto rounded-lg lg:w-4/5 max-w-110 lg:m-2 "
            />
          </div>

          <div className="hidden sm:flex w-20  flex-col justify-between md:flex-row md:w-full md:p-10 md:justify-center lg:p-2 lg:justify-start">
            {smallImages.map((item, index) => (
              <img
                src={item}
                key={index}
                className={`rounded md:w-20 md:m-3 lg:m-1 cursor-pointer hover:opacity-50 transition-opacity duration-300   ${
                  imageCode === index ? " opacity-50 border-2 border-amber-700 " : ""
                }`}
                onClick={()=> setImageCode(index)}
              />
            ))}
          </div>
        </div>
        <div
          onClick={() => setImageCode(changeImage("MINUS",imageCode))}
          className="sm:hidden flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
        >
          <img src={imageM1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
