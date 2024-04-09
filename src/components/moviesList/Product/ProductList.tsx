"use client"
import React, { useEffect } from 'react'
import Product from './Product'
import { useFilteredCategoryStore } from '@/components/zustand/productslice'
import { apiProduct } from '@/components/libs/api'
import Link from 'next/link'
import Buttons from '@/components/utils/Button/buttonFilter'

const ProductList =() => {
    const {products,category,fetchProducts} = useFilteredCategoryStore()
    useEffect(() => {
        fetchProducts()
    },[category])
  return (
    <div className='container mt-32'>
        <div className='sm:flex justify-between items-center'>
            <h2 className='text-4xl font-medium '>Products</h2>
            <Buttons />
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
            {
                products?.map((product : any) => {
                    return (
                      
                            <Product 
                            products={product}
                            id={product.id}
                            key={product.id}
                            />
                        )
                    })
            }
        </div>
    </div>
  )
}

export default ProductList