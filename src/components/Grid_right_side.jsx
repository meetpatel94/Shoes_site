import React from 'react'
import Shoe1 from './shoes/shoe1'
import Shoe2 from './shoes/shoe2'
import Shoe3 from './shoes/shoe3'
import Shoe4 from './shoes/shoe4'
import Shoe5 from './shoes/shoe5'
import Shoe6 from './shoes/shoe6'
import Shoe7 from './shoes/shoe7'
import Shoe8 from './shoes/shoe8'
import Shoe9 from './shoes/shoe9'
import Label from './Label'
import One from './One'

const Grid_right_side = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Label />
            <div className='grid grid-cols-3 gap-5 my-5'>
                <Shoe1 />
                <Shoe2 />
                <Shoe3 />
                <Shoe4 />
                <Shoe5 />
                <Shoe6 />
                <Shoe7 />
                <Shoe8 />
                <Shoe9 />
            </div>
                <One />
            </div>
        </>
    )
}

export default Grid_right_side
