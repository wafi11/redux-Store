import React from "react";
import WomanImg from "../assets/women.png";

const Hero = () => {
  return (
    <div className="bg-green-100 h-[500px] bg-no-repeat bg-cover bg-center py-10 px-3 sm:px-8">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center ">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase ">
            <div className="w-10 h-[2px] bg-red-500 mr-3 "></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLE
            <br /> <span className="font-semibold">WOMENS</span>
          </h1>
          <div className="flex justify-start items-center ">
            <button className="w-[50%] bg-green-700 rounded-xl px-3 py-2 text-xl text-white font-bold">
              Buy Now
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="hidden lg:block">
          <img src={WomanImg} className="h-[100%]" alt="../" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
