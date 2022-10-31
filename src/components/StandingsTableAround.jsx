import React from 'react'

export default function StandingsTableAround({ data,conf }) {
    const conference = data?.filter(d => {
        return d.Conference === conf
    })
    return (
        <div className='bg-[#1e2633]  w-full lg:w-11/12 flex flex-row space-x-1 items-center h-full'>
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
                    {conference.map((game,i) => 
                    <tbody>
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap" 
                            style={{backgroundColor: i % 2 === 0 ? "#1e2633" : "#0b0e13",
                            borderBottom: i === 5 ? '2px dashed' : i === 9 ? '2px solid' : ''
                            }}>
                            <td className="py-1 md:py-2.5 px-5 md:px-6">{i+1}</td>
                            <td className="py-1 md:py-2.5 px-5 md:px-6">{`${game.TeamCity} ${game.TeamName}`}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.WINS}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.LOSSES}</td>
                            <td className="py-1 md:py-2.5 px-4">{(game.WinPCT * 100).toFixed(1)}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.ConferenceGamesBack}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.ConferenceRecord}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.HOME}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.ROAD}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.OT}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.L10}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.strCurrentStreak}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.PointsPG}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.OppPointsPG}</td>
                            <td className="py-1 md:py-2.5 px-4">{game.DiffPointsPG}</td>
                        </tr>
                    </tbody>
                    )}
                </table>
            </div>
        </div>  
      )
}
