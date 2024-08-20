import React from 'react'
import { Link } from 'react-router-dom'

const Goto = () => {
  return (
    <div className='mx-56 my-6 flex gap-2 text-xl'>
      <span className='text-blue-600 cursor-pointer'><Link to="/">Home</Link></span><span>/</span><span>Men</span>
    </div>
  )
}

export default Goto
