import Link from 'next/link'
import InputSearch from './InputSearch'
import Top from './Top';
import Icons from './Icons'
import Cart from './cart';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';
import ButtonLogout from '../utils/Button/ButtonLogout';
import SignInWithGithub from '../utils/Button/SignIn/SignInWithGithub';
import { MenuIcon, MenuSquare } from 'lucide-react';
import SidebarMenu from './sidebarMenu';
const Navbar = ()=> {
  return (
    <>
    <Top />
    <header className=' bg-black/85 '>
      <div className='w-full h-[70px] mx-auto flex justify-between gap-8'>
          <SidebarMenu />
          <InputSearch />
          <div className='flex gap-4 items-center px-4'>
          <Cart />
          <Icons />
          </div>
      </div>
  </header>
    </>
  )
}

export default Navbar