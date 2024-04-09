import React from 'react'
// import { products, useProductStore } from '../zustand/productSlice'
import { useFilteredCategoryStore } from '../../zustand/productslice'


const Buttons = () => {
  const {setFilteredCategory} = useFilteredCategoryStore()

  return (
    <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0 '>
     <button className='text-black' onClick={() => setFilteredCategory("")}>All</button>
     <button className='text-black' onClick={() => setFilteredCategory("men's clothing")}>Men</button>
     <button className='text-black' onClick={() => setFilteredCategory('jewelery')}>jewelery</button>
     <button className='text-black' onClick={() => setFilteredCategory("women's clothing")}>Women</button>
     <button className='text-black' onClick={() => setFilteredCategory("electronics")}>Electronics</button>
</div>
  )
}

export default Buttons