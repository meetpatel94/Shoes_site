import React from 'react'

const Label = () => {
  return (
    <>
        <div className='flex items-center justify-end mx-4 gap-2'>
            <span>Sort By: </span>
            <div>
                <select className='py-4 px-10 border-2 rounded-xl' name="sorting" id="">
                    <option value="default">Default</option>
                    <option value="price">Price</option>
                    <option value="value">Value</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default Label
