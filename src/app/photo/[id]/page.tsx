"use client"
import { apiProduct } from '@/components/libs/api'
import ButtonAddToCart from '@/components/utils/Button/ButtonAddToCart'
import { CartItems } from '@/components/zustand/cartProduct'
import { useFilteredCategoryStore } from '@/components/zustand/productslice'
import Image from 'next/image'
import React, { useEffect } from 'react'


const PhotoPage = ({params : {id}} : any) => {
  console.log(id)
  const {fetchDetails,details} = useFilteredCategoryStore()
  useEffect(() => {
    fetchDetails(id)
  },[id])
  const item = details.find((index : any) => {
    return index.id === parseInt(id)
  })

  return (
    <div className='py-20 pb-12 flex items-center'> 
      <div className='container mx-auto'>
          {
            item ? (
                <div className='flex flex-col lg:flex-row items-center'>
                  <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                    <Image src={item.image} alt={item.image} width={200} height={300} className='max-w-[200px] lg:max-w-sm'/>
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-[26px] font-medium mb-5 max-w-[450px] mx-auto'>{item.title}</h1>
                    <p className='text-gray-600 mb-2 text-center mr-auto lg:mr-7  lg:text-right'>{item.category}</p>
                    <div className='text-xl text-red-500 font-medium mb-3'> $ {item.price}</div>
                    <p className='mb-8'>{item.description}</p>
                    <ButtonAddToCart products={item} />
                  </div>
                </div> 
          )
                : (<p>loading...</p>)
        }
      </div>
    </div>
  )
}

export default PhotoPage