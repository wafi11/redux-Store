import { FaArrowRightToBracket } from 'react-icons/fa6'
import { ShoppingCart, Tv2Icon, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiGoldenline } from 'react-icons/si'

export const DatasSidebar = () => {
    const menuList = [
        {
            group : "Variants",
            items : [
                {
                    icon : <User />,
                    text : "Men"
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
}