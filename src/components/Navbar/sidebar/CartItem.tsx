import { CartItems, useCartStore } from '@/components/zustand/cartProduct'
import Image from 'next/image'
import Link from 'next/link'
import { describe } from 'node:test'
import React from 'react'
import { MdAdd, MdOutlineClose, MdRemove } from 'react-icons/md'


const CartItem = ({product}:any) => {
    const {removeCart,increaseAmount,decreaseAmount} = useCartStore()
    const index : CartItems = {
        id : product.id,
        price : product.price,
        rate : product.rate,
        title : product.title,
        category : product.category,
        image : product.image,
        amount : product.amount,
        description : product.description
    }
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4 '>
            {/* image */}
            <Link href={`photo/${index.id}`}>
                <Image className='max-w-[80px] ' src={index.image} alt='../' width={100} height={80} />
            </Link>
            <div className='w-full flex flex-col'>
                <div className='flex justify-between mb-2'>
                    <p className='text-sm uppercase font-medium max-w-[240px] text-gray-700 hover:underline'>{index.title}</p>
                    {/* remove icons */}
                    <div className='text-xl ' onClick={() => removeCart(product)}>
                        <MdOutlineClose className='text-gray-500 hover:text-red-500 transition'/>
                    </div>
                    
                </div>
                <div className=' flex gap-x-2 h-[36px] text-sm'>
                    {/* qty */}
                    <div className=' border border-gray-700 flex flex-1 max-w-[100px] items-center h-full text-gray-700 font-medium'>
                        {/* minus icon */}
                        <div onClick={() => decreaseAmount(product,index.amount)} className='flex-1 flex justify-center items-center cursor-pointer' >
                            <MdRemove />
                        </div>
                        {/* AMOUNT */}
                        <div className='h-full flex justify-center items-center px-2'>{index.amount}</div>
                        {/* plus */}
                        <div onClick={() => increaseAmount(product)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                            <MdAdd />
                        </div>
                    </div>
                    {/* item price */}
                    <div className='flex-1 flex items-center justify-around'>$ {index.price}</div>
                    {/* final price */}
                    <div className='flex-1 flex justify-end items-center font-medium'>
                          $ {(index.price * index.amount).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItem