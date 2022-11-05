import React from 'react'
import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import teamLogo from '../img/kindpng_1911128.png'



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
    <div className='flex justify-center py-20 relative'>
    <img className='h-[450px] md:h-[600px] lg:h-[650px] xl:h-[700px] absolute -top-24 -left-24 md:-top-28 md:-left-28 lg:-top-32 lg:-left-32 xl:-top-36 xl:-left-36 opacity-5' src={teamLogo} alt="" />
      <h1 className='font-extrabold text-6xl'>
        DENI
        <br/>
        AVDIJA
      </h1>
    </div>
  </>
  )
}
