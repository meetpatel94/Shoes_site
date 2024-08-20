import React from 'react'
import Grid_left_side from './Grid_left_side'
import Grid_right_side_w from './Grid_right_side_w'

const Grid_Final_w = () => {
  return (
    <>
    <div className="flex mx-56 my-12 justify-between gap-[50px]">
      <Grid_left_side />
      <Grid_right_side_w />
    </div>
    </>
  )
}

export default Grid_Final_w
