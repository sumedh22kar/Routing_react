import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-blue-800 justify-between'>
        <h2 className='text-2xl font-bold text-white'>BroDm</h2>
        <div className='flex gap-10'>
            <Link className='text-lg font-medium text-white' to='/'>Home</Link>
            <Link className='text-lg font-medium text-white' to='/about'>About</Link>
            <Link className='text-lg font-medium text-white' to='/sarvice'>Sarvice</Link>
            <Link className='text-lg font-medium text-white' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default NavBar