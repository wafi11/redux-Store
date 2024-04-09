import React from 'react'
import { ImTruck } from 'react-icons/im'
import { MdDiscount, MdSupportAgent } from 'react-icons/md'
import { SiMoneygram } from 'react-icons/si'
import CardList from './CardList'

const Service = () => {
  const data = [
    {
        icon : <ImTruck className="text-4xl" />,
        title : "Free Delivery",
        desc : "Orders From All item"    
    },
    {
        icon : <SiMoneygram className="text-4xl" />,
        title : "Return & Refund",
        desc : "Money Back guarantee"    
    },
    {
        icon : <MdDiscount className="text-4xl" />,
        title : "Member Discount",
        desc : "On Order Over Rp.100000"    
    },
    {
        icon : <MdSupportAgent className="text-4xl" />,
        title : "Support 24/7",
        desc : "Contact Us 24 hours a day"    
    },
]

return (
    <div className='container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
        {
            data.map(item => (
                <CardList
                    key={item.title}
                    icon={item.icon}
                    title={item.title}  
                    desc={item.desc}
                />
            ))
        }
    </div>
)

}

export default Service