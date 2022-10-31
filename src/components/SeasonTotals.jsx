import React, { useState } from 'react'
import Box from './Box'
import SeasonTotalsDetailed from './SeasonTotalsDetailed'

export default function SeasonTotals({ data }) {
  const [isPressed , setIsPressed] = useState(false)

  function handleClick() {
    setIsPressed(!isPressed)
  }

  return (
    <div className='flex flex-col items-center pt-6'>
        <h4 className='text-[#ffd600] font-semibold'>All Time Stats</h4>
        <div className='bg-[#13181f] h-80 md:h-86 lg:h-[22rem] w-full md:w-10/12 lg:w-8/12 xl:w-6/12 my-6 flex flex-col items-center py-6 space-y-7'>
            <h4 className='font-bold text-lg'>CURRENT SEASON</h4>
            <Box data={data}/>
            <button
              onClick={handleClick}
              className='w-40 h-10 rounded-full bg-[#ffd600] text-black font-medium'>
              DETAILED STATS
            </button>
        </div>
        <SeasonTotalsDetailed toggle={isPressed} data={data} handle={handleClick} />
    </div>
  )
}
