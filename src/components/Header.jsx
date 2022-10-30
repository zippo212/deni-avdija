import React from 'react'
import {Link} from 'react-router-dom';


export default function Header() {
  return (
  <>
    <nav className='py-4 bg-[#141a23] w-full sticky top-0 shadow-lg z-50'>
      <ul className='flex justify-around text-sm font-semibold'>
        <li><Link to={'/around'} >Around the Legue</Link></li>
      </ul>
    </nav>
    <div className='flex justify-center py-20'>
      <h1 className='font-extrabold text-6xl'>
        DENI
        <br/>
        AVDIJA
      </h1>
    </div>
  </>
  )
}
