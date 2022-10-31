import React from 'react'
import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



export default function Header() {
  return (
  <>
    <nav className='py-4 bg-[#141a23] w-full sticky top-0 shadow-lg z-50'>
      <ul className='flex justify-evenly text-sm font-semibold'>

        <li><NavLink to="/" end
        className={({ isActive }) => (isActive ? 'text-[#ffd600]' : '')}
        >Home</NavLink></li>

        <li><HashLink to='/#profile' 
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >Profile</HashLink></li>

        <li><NavLink to='/around'
        className={({ isActive }) => (isActive ? 'text-[#ffd600]' : '')}
        >Around the league</NavLink></li>

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
