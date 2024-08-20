import React from 'react'
import img1 from '../Photos/plv3643-Blue-listing.png'

const Shoe6 = () => {
  return (
    <>
      <div className='flex flex-col text-left w-auto'>
        <div className='bg-gray-100 flex items-center justify-center'>
            <img src={img1} alt="" />
        </div>
        <span className='text-left ml-0 font-bold hover:underline cursor-pointer'>Nike react phantom run flyknit 2</span>
        <span className='text-left ml-0 font-bold'>$789.80</span>
      </div>
    </>
  )
}

export default Shoe6
