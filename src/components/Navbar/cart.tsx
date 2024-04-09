"use client"
import React, { useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useSidebar } from '../zustand/sidebar'
import { useCartStore } from '../zustand/cartProduct'
import Sidebar from './sidebar'

const Cart = () => {
    const {Open,setIsOpen}  = useSidebar()
    const {amount,setAmount,itemAmount,cart} = useCartStore()
  
    useEffect(() => {
      itemAmount()
    },[cart])
  
    const handleCart = () => {
      setIsOpen(!Open)
    }
  return (
    <div className='text-xl text-white relative cursor-pointer ' onClick={handleCart}>
        <FiShoppingCart  size={30}/>
    <div 
      className={`${amount  ?'bg-red-500 text-white' : 'bg-none text-transparent' } 
      absolute -top-3 -right-2 w-5 h-5 bg-none rounded-full text-ellipsis
      flex items-center justify-center`}
    >{amount}</div>
    </div>
  )
}

export default Cart