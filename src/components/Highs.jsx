import React from 'react'

export default function Highs({ data }) {

    function getSeasonData(stat) {
        const result = data.SeasonHighs.filter(data => data.STAT === stat)
        return result[0]
    }

    function getCareerData(stat) {
        const result = data.CareerHighs.filter(data => data.STAT === stat)
        return result[0]
    }

  return (
    <div className='bg-[#1e2633] w-full'>
        <table className="table-auto  text-sm text-left text-white w-full">
            <thead className='text-sm text-[#a0aec0] uppercase bg-[#0b0e13]'>
                <tr>
                    <th scope='col' className='py-2 md:py-3 px-3'>Stat</th>
                    <th scope='col' className='py-2 md:py-3'>Current Season</th>
                    <th scope='col' className='py-2 md:py-3'>Career</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-[#0b0e13] bg-[#1e2633]">
                    <td className="py-2 px-3 font-semibold">Points</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('PTS').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('PTS').VS_TEAM_CITY} on ${getSeasonData('PTS').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('PTS').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('PTS').VS_TEAM_CITY} on ${getCareerData('PTS').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#0b0e13]">
                    <td className="py-2 px-3 font-semibold">Rebounds</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('REB').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('REB').VS_TEAM_CITY} on ${getSeasonData('REB').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('REB').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('REB').VS_TEAM_CITY} on ${getCareerData('REB').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#1e2633]">
                    <td className="py-2 px-3 font-semibold">Assists</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('AST').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('AST').VS_TEAM_CITY} on ${getSeasonData('AST').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('AST').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('AST').VS_TEAM_CITY} on ${getCareerData('AST').GAME_DATE}`}</span></td>
                </tr> 
                <tr className="border-b border-[#0b0e13] bg-[#0b0e13]">
                    <td className="py-2 px-3 font-semibold">Steals</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('STL').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('STL').VS_TEAM_CITY} on ${getSeasonData('STL').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('STL').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('STL').VS_TEAM_CITY} on ${getCareerData('STL').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#1e2633]">
                    <td className="py-2 px-3 font-semibold">Field Goals Made</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('FGM').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('FGM').VS_TEAM_CITY} on ${getSeasonData('FGM').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('FGM').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('FGM').VS_TEAM_CITY} on ${getCareerData('FGM').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#0b0e13]">
                    <td className="py-2 px-3 font-semibold">Free Throws Made</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('FTM').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('FTM').VS_TEAM_CITY} on ${getSeasonData('FTM').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('FTM').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('FTM').VS_TEAM_CITY} on ${getCareerData('FTM').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#1e2633]">
                    <td className="py-2 px-3 font-semibold">Three Pointers Made</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('FG3M').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('FG3M').VS_TEAM_CITY} on ${getSeasonData('FG3M').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('FG3M').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('FG3M').VS_TEAM_CITY} on ${getCareerData('FG3M').GAME_DATE}`}</span></td>
                </tr>
                <tr className="border-b border-[#0b0e13] bg-[#0b0e13]">
                    <td className="py-2 px-3 font-semibold">Blocks</td>
                    <td className="py-2"><span className="font-extrabold">{getSeasonData('BLK').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getSeasonData('BLK').VS_TEAM_CITY} on ${getSeasonData('BLK').GAME_DATE}`}</span></td>
                    <td className="py-2"><span className="font-extrabold">{getCareerData('BLK').STAT_VALUE}</span><span className='px-1 md:px-2'>vs</span><span className='text-xs md:text-sm font-semibold'>{`${getCareerData('BLK').VS_TEAM_CITY} on ${getCareerData('BLK').GAME_DATE}`}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
