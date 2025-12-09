import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-300 sm:flex-row">
      {/* Hero Left Side */}
      <div className="w-full flex flex-col items-center justify-center py-10 sm:w-[90%] md:w-[70%] lg:w-[60%]">
        <div className="text-gray-700">
          {/* Bestseller Section */}
          <div className="flex items-center gap-2">
            <p className="w-8 h-0.5 bg-gray-700"></p>
            <p className="font-medium text-sm sm:text-[15px] lg:text-base">OUR HOT ITEM</p>
          </div>
          {/* Title */}
          <h1 className="font-serif text-[30px] leading-[28px] sm:py-3 md:text-[32px] lg:text-[40px]">Available Now</h1>
          {/* Shop Section */}
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm sm:text-[15px] lg:text-base">SHOP NOW</p>
            <p className="w-8 h-px bg-gray-700 sm:w-[44px]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full h-full">
        <img src={assets.Hero_img} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Hero