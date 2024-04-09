import { useSidebar } from '@/components/zustand/sidebar'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
import React from 'react'
import { FaArrowRightToBracket } from 'react-icons/fa6'
import { ArrowBigRight, ShoppingCart, Tv2Icon, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiGoldenline } from 'react-icons/si'
import { useFilteredCategoryStore } from '@/components/zustand/productslice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const SideBar = () => {
    const {Nav,setIsNav } = useSidebar()
    const {setFilteredCategory} = useFilteredCategoryStore()
    const router = useRouter()

    const menuList = [
        {
            group : "Variants",
            items : [
                {
                    icon : <User />,
                    text : "Men",
                    link : "/men"
                }, 
                {
                    icon : <ShoppingCart />,
                    text : "Women"
                },
                {
                    icon : <SiGoldenline size={20} className='ml-1'/>,
                    text : " Jewelery"
                },
                {
                    icon : <Tv2Icon />,
                    text : "Electronics"
                },
            ]
        },
        {   
            group : "General",
            items : [
            {
                link : "/",
                icon : <User />,
                text : "Profile"
            }, 
            {
                link : "/",
                icon : <ShoppingCart />,
                text : "Cart"
            },
           
            ]
        }
    ]
  return (
    <div className={`${Nav ? 'left-0' : '-left-full'}
    w-[50%] bg-white fixed top-0 h-full shadow-2xl text-black
    md:w-[35vw] xl:max-w-[30vw] transition-all duration-400
    z-20 px-4 lg:px-[25px]`
     }>
        <div className='flex justify-between mt-5 mb-3'>
         <Link href='/' className='font-bold text-3xl  text-black pr-4'>NEXTSTORE</Link>
         <button
          className='cursor-pointer w-8 h-8 flex justify-center items-center text-gray-700'
          onClick={() => setIsNav(!Nav)}>
          <FaArrowRightToBracket className='text-2xl' />
        </button>
        </div>
        <div className='grow'>
        <Command style={{overflow : 'visible'}} className='h-full'>
            {/* <CommandInput placeholder="Type a command or search..." /> */}
            <CommandList className='mt-4 mb-8 h-full w-full'>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}
            {
                menuList.map((menu : any,key : number) => (
                    <CommandGroup key={key} heading={menu.group} >
                       {menu.items.map((option : any,optionKey:number) => 
                            <CommandItem key={optionKey} className=' flex gap-2 cursor-pointer' >
                                {option.icon} 
                            
                                {option.text}
                                
                            </CommandItem>
                        )}
                    </CommandGroup>
                ))
            }
            </CommandList>
        </Command>
        <Button className='w-full uppercase'>Login</Button>
        </div>
    </div>
  )
}

export default SideBar