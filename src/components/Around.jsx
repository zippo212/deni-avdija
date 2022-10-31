import React, { useState } from 'react'
import SeasonLeaders from './SeasonLeaders'
import StandingsTableAround from './StandingsTableAround'

export default function Around({ standings, team, player }) {
    const [switchConference, setSwitchConference] = useState('East')
    const [ dataSet, setDataSet ] = useState(false)

  return (
    <div className='lg:flex lg:space-x-4 lg:mx-4 pb-6'>
        <div className='bg-[#13181f] w-11/12 lg:w-5/12 mt-6 flex flex-col items-center py-6 space-y-7 mx-auto'>
            <h4 className='font-bold text-lg'>standings</h4>
            <ul className='space-x-6 flex'>
                <li 
                className={`bg-[#0b0e13] border border-gray-700 ${switchConference === 'East' ? 'border-[#ffd600]' : ''} py-1 px-2`}
                onClick={() => setSwitchConference('East')}
                >East
                </li>
                <li
                className={`bg-[#0b0e13] border border-gray-700 ${switchConference === 'West' ? 'border-[#ffd600]' : ''} py-1 px-2`}
                onClick={() => setSwitchConference('West')}
                >West
                </li>
            </ul>
            <StandingsTableAround data={standings} conf={switchConference}/>
        </div>
        <div className='bg-[#13181f] w-11/12 lg:w-7/12 mt-6 flex flex-col items-center py-6 space-y-7 mx-auto'>
            <h4 className='font-bold text-lg'>season leaders</h4>
            <ul className='space-x-6 flex'>
                <li
                className={`bg-[#0b0e13] border border-gray-700 ${dataSet ? '' : 'border-[#ffd600]'} py-1 px-2`}
                onClick={() => setDataSet(false)}
                >PLAYERS
                </li>
                <li
                className={`bg-[#0b0e13] border border-gray-700 ${dataSet ? 'border-[#ffd600]' : ''} py-1 px-2`}
                onClick={() => setDataSet(true)}
                >TEAMS
                </li>
            </ul>
            <SeasonLeaders data={dataSet && dataSet ? team : player} type={dataSet ? 'TEAM_NAME' : 'PLAYER'}/>
        </div>
    </div>
  )
}
