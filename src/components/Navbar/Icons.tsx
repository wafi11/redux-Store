import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useSidebar } from '../zustand/sidebar'
import Sidebar from './sidebar'
import { useCartStore } from '../zustand/cartProduct'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import ButtonLogout from '../utils/Button/ButtonLogout'
import { useLoginStore } from '../zustand/Login'

const Icons = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      {
        session ? (
        <div className='hidden sm:flex'>
          <div 
              className='rounded-full text-2xl w-10 h-10 flex 
              items-center justify-center cursor-pointer 
              transition-all duration-200'>
                    <FaUser className='text-white'/> 
            </div> 
              <ButtonLogout />
        </div> ): null
      }
    </>
  )
}

export default Icons