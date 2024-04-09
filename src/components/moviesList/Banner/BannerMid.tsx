import Image from 'next/image'
import React from 'react'

const BannerMid = () => {
  return (
    <div className='container mt-32 w-full '>
        <div className='flex items-center h-full justify-center w-full'>
            <div className='h-[200px] md:h-[260px] bg-banner-bg bg-cover w-full rounded-xl p-0 md:p-16' >
                <p className='text-white text-xl font-medium'>The Best Clothes 2024</p>
                <a href="#" className='mt-6 bg-green-500 text-white w-[120px] flex items-center justify-center rounded-md 
                hover:text-green-600 hover:bg-white transition-all duration-200 font-medium'>
                  Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default BannerMid