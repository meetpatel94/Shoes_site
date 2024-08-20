import React from 'react'
import Grid_left_side from './Grid_left_side'
import Grid_right_side from './Grid_right_side'

const Grid_Final = () => {
  return (
    <>
    <div className='flex mx-56 my-12 justify-between gap-[50px]'>
      <Grid_left_side />
      <Grid_right_side />

    </div>
    </>
  )
}

export default Grid_Final
