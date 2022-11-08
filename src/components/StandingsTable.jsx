import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



export default function StandingsTable({ data }) {
    const icon = <FontAwesomeIcon icon={faStar} size="sm" color="#ffd600"/>
  return (
    <div className='bg-[#1e2633]  w-full md:w-10/12 flex flex-col justify-center '>
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm text-left text-white">
                <thead className='"text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-2 md:py-3 px-3'>RANK</th>
                        <th scope='col' className='py-2 md:py-3 px-5 md:px-6'>NAME</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>W</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>L</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>PCT</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>GB</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>CONF</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>HOME</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>ROAD</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>OT</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>LAST10</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>STREAK</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>PF</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>PA</th>
                        <th scope='col' className='py-2 md:py-3 px-3'>DIFF</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((game,i) => 
                    <tr key={game.TeamID} className="border-b border-[#0b0e13] whitespace-nowrap" 
                        style={{backgroundColor: i % 2 === 0 ? "#1e2633" : "#0b0e13",
                        borderBottom: i === 5 ? '2px dashed' : i === 9 ? '2px solid' : ''
                        }}>
                        <td className="py-1 md:py-2 px-5 md:px-6">{i+1}</td>
                        <td className="py-1 md:py-2 px-5 md:px-6">{`${game.TeamCity} ${game.TeamName}`}<span className='pl-1'>{game.TeamName === 'Wizards' ? icon : ''}</span></td>
                        <td className="py-1 md:py-2 px-4">{game.WINS}</td>
                        <td className="py-1 md:py-2 px-4">{game.LOSSES}</td>
                        <td className="py-1 md:py-2 px-4">{(game.WinPCT * 100).toFixed(1)}</td>
                        <td className="py-1 md:py-2 px-4">{game.ConferenceGamesBack}</td>
                        <td className="py-1 md:py-2 px-4">{game.ConferenceRecord}</td>
                        <td className="py-1 md:py-2 px-4">{game.HOME}</td>
                        <td className="py-1 md:py-2 px-4">{game.ROAD}</td>
                        <td className="py-1 md:py-2 px-4">{game.OT}</td>
                        <td className="py-1 md:py-2 px-4">{game.L10}</td>
                        <td className="py-1 md:py-2 px-4">{game.strCurrentStreak}</td>
                        <td className="py-1 md:py-2 px-4">{game.PointsPG}</td>
                        <td className="py-1 md:py-2 px-4">{game.OppPointsPG}</td>
                        <td className="py-1 md:py-2 px-4">{game.DiffPointsPG}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        <span className='text-center text-[#718096] text-xs sm:text-sm bg-[#13181f] pt-2'>{icon} - Represents current team of Deni Avdija</span>
    </div>  
  )
}
