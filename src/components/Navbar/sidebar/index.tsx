"use client"
import { useCartStore } from '@/components/zustand/cartProduct';
import { useSidebar } from '@/components/zustand/sidebar'
import React from 'react'
import { FaArrowRightToBracket } from "react-icons/fa6";
import CartItem from './CartItem';
import Link from 'next/link';
import { FiTrash } from 'react-icons/fi';

const Sidebar = () => {
  const {Open,setIsOpen} = useSidebar()
  const {cart,clearCart,totalAmount} = useCartStore()
  return (
    <>
    {
      Open && (
    <div className={
      `${Open ? 'right-0' : '-right-full'}
       w-full bg-white fixed top-0 h-full shadow-2xl
       md:w-[35vw] xl:max-w-[30vw] transition-all duration-500
       z-20 px-4 ld:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold text-gray-700'>
          Shopping Cart {0}
        </div>
        <div 
          className='cursor-pointer w-8 h-8 flex justify-center items-center text-gray-700'
          onClick={() => setIsOpen(!Open)}>
          <FaArrowRightToBracket className='text-2xl' />
        </div>
      </div>
      <div className='text-black'>
      {
        cart.map((item : any ) => {
          return (
                <CartItem product={item} key={item.id}/>
            )
        })
      }
      </div>
      <div className='text-black flex flex-col gap-y-3 py-4 mt-4' >
        <div className='flex w-full justify-between items-center '>
          {/* Total */}
          <div className='font-semibold uppercase text-sm flex'>
            <p className='mr-2'>Total : </p>$ {totalAmount()}
          </div>
          {/* clear cart icon */}
          <div 
            className='cursor-pointer py-4 bg-red-400 text-white w-12 h-12 flex justify-center items-center text-xl'
            onClick={clearCart}>
            <FiTrash />
          </div>
        </div>
      </div>
    </div>
          
  )
}
</>

  )
} 
export default Sidebar