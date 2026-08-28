import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
export default function Nav() {
  return (
    <>
      <div className='flex flex-wrap justify-between items-center  h-full  w-full sticky bg-emerald-600 p-3 text-white font-extrabold font-serif text-sm lg:text-2xl '>
        <div className='border-2 m-2 border-b-fuchsia-800 p-2 rounded '>
          <h1 className='hover:underline inline-block hover:text-red-300'>Test Your Self </h1>
        </div>
        <div className='flex gap-4 flex-wrap border-2 border-amber-200 p-2 rounded'>
          <Link className='hover:underline inline-block hover:text-blue-600' to='/'>Two Digit</Link>
          <Link className='hover:underline inline-block hover:text-pink-500' to='/three'>Three Digit</Link>
          <Link className='hover:underline inline-block hover:text-yellow-500' to='/four'>Four Digit </Link>
        </div>
      </div>
    </>
  )
}
