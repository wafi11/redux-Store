"use client"
import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSidebar } from '../zustand/sidebar'
import SideBar from './sidebar/SideBar'

const SidebarMenu = () => {
    const {Nav,setIsNav} = useSidebar()
    console.log(Nav);    
    const handleNav = () =>  {
        setIsNav(!Nav)
    }
  return (
    <div className='flex px-3  justify-between items-center' >
        <button onClick={handleNav}>
                <MenuIcon className='text-white '/>
        </button>
          <Link href='/' className='font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl pl-2 text-white'>NEXTSTORE</Link>
          {Nav && <SideBar />}
    </div>
  )
}

export default SidebarMenu