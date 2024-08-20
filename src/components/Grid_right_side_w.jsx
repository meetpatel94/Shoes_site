import React from 'react'
import Shoe1 from './wshoes/shoe1'
import Shoe2 from './wshoes/shoe2'
import Shoe3 from './wshoes/shoe3'
import Shoe4 from './wshoes/shoe4'
import Shoe5 from './wshoes/shoe5'
import Shoe6 from './wshoes/shoe6'
import Shoe7 from './wshoes/shoe7'
import Shoe8 from './wshoes/shoe8'
import Shoe9 from './wshoes/shoe9'
import Shoe10 from './wshoes/shoe10'
import Shoe11 from './wshoes/shoe11'
import Shoe12 from './wshoes/shoe12'
import Shoe13 from './wshoes/shoe13'
import Shoe14 from './wshoes/shoe14'
import Label from './Label'
import One from './One'

const Grid_right_side_w = () => {
    return (
        <>
        <div className="flex flex-col">
            <Label />
        <div className="grid grid-cols-3 gap-5 my-5">
            <Shoe1 />
            <Shoe2 />
            <Shoe3 />
            <Shoe4 />
            <Shoe5 />
            <Shoe6 />
            <Shoe7 />
            <Shoe8 />
            <Shoe9 />
            <Shoe10 />
            <Shoe11 />
            <Shoe12 />
            <Shoe13 />
            <Shoe14 />
        </div>
            <One />
        </div>
        </>
    )
}

export default Grid_right_side_w
