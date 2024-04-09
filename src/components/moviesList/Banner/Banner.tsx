import Image from 'next/image'
import React from 'react'
import Images from '../../utils/image'



const Banner  = () => {
  return (
    <div className="bg-[#e3edf6] bg-banner1-bg pt-4 h-[300px] md:h-[400px] bg-cover bg-left-center w-full relative">
      <div className="px-10 grid py-2 sm:py-8 md:px-20">
          <div className="max-w-[400px] space-y-4 absolute ">
            <h1 className='text-pink-500 font-bold text-lg text-start'>TRENDING CLOTHES</h1>
            <h2 className="text-black font-bold text-3xl md:text-4xl uppercase">
              The best clothes collection 2024
            </h2>
            <h3 className="text-xl md:text-3xl font-semibold">Eid-fitri special offer  
            <span className="text-red-400 font-secondary font-medium"> 10% discount</span></h3>
            <a href="#" className="inline-block bg-black text-white rounded-md px-6 py-3 hover:bg-pink-600 transition-all duration-200">
                Shop Now
            </a>
          </div>
      </div>
    </div>
  )
}

export default Banner