import React from 'react'
import image1 from "../assets/image1big.jpg"
import imageM1 from "../assets/icon-next.svg"
import imageM2 from "../assets/icon-previous.svg"

function Slider() {
  return (
    <div>
    <div className='relative'>
      <div className=' flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 left-4 cursor-pointer'><img src={imageM2} alt="" /></div>
      <img src={image1} alt="product image" className='w-full h-100' />
      <div className=' flex rounded-full bg-white w-10 h-10 absolute content-center items-center justify-center top-1/2 transform -translate-y-1/2 right-4 cursor-pointer'><img src={imageM1} alt="" /></div>
      </div>


    </div>
  )
}

export default Slider