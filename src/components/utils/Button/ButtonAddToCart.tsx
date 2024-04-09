import { useCartStore } from '@/components/zustand/cartProduct'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ButtonAddToCart = ({products} : any) => {
    const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className='flex w-full gap-x-3 justify-center rounded-lg items-center mt-3
        bg-green-500 text-white px-4 py-2 cursor-pointer hover:bg-green-600'
        onClick={() => addToCart(products)}>
            <AiOutlineShoppingCart className='text-2xl '/> Add To Cart
    </div>
  )
}

export default ButtonAddToCart