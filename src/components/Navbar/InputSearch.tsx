"use client"
import {useRef} from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter} from 'next/navigation'
import { Input } from '../ui/input'
import { useSidebar } from '../zustand/sidebar'


const InputSearch = () => {
  const {Nav} = useSidebar()
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const handleSearch = (e : React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const query = ref.current?.value
      router.push(`/search/${query}`)
  } 

  return (
    <div className='relative '>
      <div className={`flex  p-2 rounded pt-4 `}>
        <Input type="text" className='focus:outline-none text-black w-full' placeholder='Search Clothes....' 
          ref={ref}
          />
        <button className='text-black absolute top-4 right-3 bottom-2' onClick={handleSearch}>
          <BiSearch size={28} />
        </button>
      </div>
    </div>
  )
}

export default InputSearch