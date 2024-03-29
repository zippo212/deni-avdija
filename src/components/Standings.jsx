import React from 'react'
import StandingsTable from './StandingsTable'

export default function Standings({ data }) {
    const east = data.filter(d => {
            return d.Conference === 'East'
    })
  return (
    <div className='flex flex-col items-center pt-6'>
        <h4 className='text-[#ffd600] font-semibold'>Standings</h4>
        <div className='bg-[#13181f] w-full md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 my-6 flex flex-col items-center py-6 space-y-7 z-40'>
            <h4 className='font-bold text-lg'>CURRENT SEASON</h4>
            <StandingsTable data={east}/>
        </div>
    </div>
  )
}
