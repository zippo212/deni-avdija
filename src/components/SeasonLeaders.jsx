import React from 'react'

export default function SeasonLeaders({ data, type }) {
    console.log(data);
  return (
    <div className='grid grid-cols-3 w-full'>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>POINTS PER GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat1?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.PTS}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>REBOUNDS PER GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat2?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.REB}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>ASSISTS PER GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat3?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.AST}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>BLOCKS PER GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat8?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.BLK}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>STEALS PER GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat4?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.STL}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>FIELD GOAL PERCENTAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat5?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.FG_PCT}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>THREE POINT PERCENTAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat7?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.FG3_PCT}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        <table className="table-auto  text-sm text-left text-white w-10/12 mx-auto mb-4">
                <thead className='text-xs text-[#4a5568] uppercase bg-[#0b0e13]'>
                    <tr>
                        <th scope='col' className='py-1 pl-1'>FREE THROW PERCENTAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.HomePageStat6?.map(stat => 
                        <tr className="border-b border-[#0b0e13] whitespace-nowrap">
                            <td className="py-2 pl-3">{stat[type]}</td>
                            <td className="py-2">{stat.FT_PCT}</td>
                        </tr>
                    )}
                </tbody>
        </table>
    </div>
  )
}
