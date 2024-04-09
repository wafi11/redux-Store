"use client"
import Product from '@/components/moviesList/Product/Product'
import { addToCart } from '@/components/redux/slice/cartSlice'
import ButtonAddToCart from '@/components/utils/Button/ButtonAddToCart'
import { useStore } from '@/components/zustand/searchProduct'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'


const page = ({params} : {params : string}) => {
  const {query} : any = params
  const {searchResults,SearchProduct} = useStore()
  useEffect(() => {
    SearchProduct(query)
  },[])
  
  return (
    <div className='container mt-3 mx-auto'>
    <div className='sm:flex justify-center items-center text-center'>
        <h2 className='text-3xl font-medium '>Search for ... {query}</h2>
    </div>
    <div className='flex gap-10 justify-center items-center mt-7'>
        {
        searchResults ? searchResults?.map((product ) => {
            return (
                      <div className='w-full grid shadow justify-center items-center px-3' key={product.id}>
                    <Link href={`/photo/${product.id}`} key={product.id}>
                        <Image src={product.image} width={200} height={100} alt='../' className='max-h-64 w-full' />
                        <h3 className='text-xl font-medium text-black mt-5 w-full px-2'>{product.title}</h3>
                    </Link>
                        <p className='text-end text-gray-600 text-sm mt-5'>{product.category}</p>
                        <div className='flex justify-between'>
                            <p className='text-md text-yellow-500'>{product.rate}</p>
                            <p className='text-md text-red-500'>$ {product.price}</p>
                        </div>
                       <ButtonAddToCart products={product} />
                      </div>
                  )
                }) 
              : <p className='text-2xl font-bold text-black uppercase'>Not found</p>
            }  
    </div>
</div>
  )
}

export default page