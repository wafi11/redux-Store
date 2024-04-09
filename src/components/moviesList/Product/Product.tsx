"use client"
import ButtonAddToCart from '@/components/utils/Button/ButtonAddToCart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

const Product =({products}:any) => {
   
  return (
    <div className='border border-gray-200 ' >
        <div className='text-center border-b border-gray-200 '>
            <Link href={`/photo/${products.id}`}>
            <Image  src={products.image} alt='../' width={80} height={100} className='inline-block h-64 w-[50%] p-4' />
            </Link>
        </div>
        <div className='px-8 py-6'>
            <div className='flex justify-center items-center h-20 '>
                <h2 className='text-md'>{products.title}</h2>
            </div>
            <div className='mt-2'>
                <p className=' text-end text-gray-500 text-sm font-medium'>{products.category}</p>
            </div>
            <div className='mt-2 flex items-center justify-between text-[#ffb21d] w-[85%] '>
                <div className='flex items-center'>
                    <div className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    <p className='text-gray-600 text-sm ml-2'>{products.rating.rate}</p>
                    </div>
                    </div>
                    <div >
                        <h2 className='font-medium text-red-500 text-xl'>${products.price}</h2>
                </div>
            </div>
           <ButtonAddToCart products={products}  />
        </div>
    </div>
  )
}

export default Product