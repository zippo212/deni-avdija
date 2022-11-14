import React, { useState } from 'react'
import Box from './Box'
import SeasonTotalsDetailed from './SeasonTotalsDetailed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function AllTime({ data }) {
  const [isPressed , setIsPressed] = useState(false)
  const title = ['CAREER','All Career Stats','CAREER']
  
  function handleClick() {
    setIsPressed(!isPressed)
  }

  return (
    <div className='flex flex-col items-center'>
        <div className='bg-[#13181f] h-80 md:h-86 lg:h-[22rem] w-full md:w-10/12 lg:w-9/12 xl:w-6/12 my-6 flex flex-col items-center py-6 space-y-7 z-40'>
            <h4 className='font-bold text-lg'>ALL TIME CAREER</h4>
            <Box data={data}/>
            <button
              onClick={handleClick}
              className='w-40 h-9 rounded-full bg-[#ffd600] space-x-2 hover:scale-105 transition ease-in-out'>
              <span className='text-black font-semibold text-sm pl-2 pr-1'>DETAILED STATS</span> 
              <FontAwesomeIcon icon={faCirclePlus} size="lg" color="black"/>
            </button>
        </div>
        <SeasonTotalsDetailed toggle={isPressed} data={data} handle={handleClick} title={title}/>
    </div>
  )
}
