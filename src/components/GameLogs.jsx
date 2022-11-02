import React from 'react'
import { useState } from 'react'
import GameLogBox from './GameLogBox'
import GameLogsDetailed from './GameLogsDetailed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function GameLogs({ data,next }) {
  const [isPressed , setIsPressed] = useState(false)

  function handleClick() {
    setIsPressed(!isPressed)
  }
  
  return (
<div className='flex flex-col items-center'>
    <div className='bg-[#13181f] h-80 md:h-86 lg:h-[22rem] w-full md:w-10/12 lg:w-9/12 xl:w-6/12 my-6 flex flex-col items-center py-6 space-y-7 z-40'>
        <h4 className='font-bold text-lg'>Last Games</h4>
        <GameLogBox data={data} next={next}/>
        <button
          onClick={handleClick}
          className='w-40 h-9 rounded-full bg-[#ffd600] space-x-2'>
          <span className='text-black font-semibold text-sm pl-2 pr-1'>DETAILED STATS</span> 
          <FontAwesomeIcon icon={faCirclePlus} size="lg" color="black"/>
        </button>
    </div>
    <GameLogsDetailed data={data} toggle={isPressed} handle={handleClick}/>
</div>
  )
}
