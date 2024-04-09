import React from 'react'

const Top = () => {
  return (
    <div className='bg-white top-0 sticky'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <h4 className='text-md '>Shopping everyday</h4>
                <div className='flex gap-4 md:gap-8 items-center'>
                    <div className='md:flex items-center gap-3 hidden'>
                        <div className=' px-2 text-black font-semibold '>
                            <a href='#'>Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top