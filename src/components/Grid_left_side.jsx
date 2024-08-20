import React from 'react'
import Range from './Range'

const Grid_left_side = () => {
    return (
        <>
            <div className='flex flex-col gap-4 uppercase'>
                <div className='font-bold'>
                    Shop By
                </div>
                <div>
                    Price
                </div>
                <div>
                    <Range />
                </div>
                <div>
                    Size
                </div>
                <div>
                    <hr className='w-[150px] my-0' />
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="l" id="" /> L</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="xl" id="" /> XL</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="m" id="" /> M</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="s" id="" /> S</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="xs" id="" /> XS</span>
                </div>
                <div className='font-semibold'>
                    Color
                </div>
                    <hr className='w-[150px]' />
                <div className='flex flex-col gap-2'>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="white" id="" /> White</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="black" id="" /> Black</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="grey" id="" /> Grey</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="blue" id="" /> Blue</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="brown" id="" /> Brown</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="green" id="" /> Green</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="pink" id="" /> Pink</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="red" id="" /> Red</span>
                </div>
                <div className='font-semibold'>
                    Brand
                </div>
                    <hr className='w-[150px]' />
                <div className='flex flex-col gap-2'>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="converse" id="" /> Converse</span>
                    <span className='flex gap-3'><input type="checkbox" className='size-5 border-[10px]' name="nike" id="" /> Nike</span>
                </div>
            </div>
        </>
    )
}

export default Grid_left_side
