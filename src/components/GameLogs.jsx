import React from 'react'
import GameLogBox from './GameLogBox'

export default function GameLogs({ data }) {
  return (
    <div className='flex flex-col items-center'>
    <div className='bg-[#13181f] h-80 md:h-86 lg:h-96 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 my-6 flex flex-col items-center py-6 space-y-7'>
        <h4 className='font-bold text-lg'>Last Games</h4>
        <GameLogBox data={data}/>
        <button className='w-40 h-10 rounded-full bg-[#ffd600] text-black font-medium'>
          DETAILED STATS
        </button>
    </div>
</div>
  )
}
