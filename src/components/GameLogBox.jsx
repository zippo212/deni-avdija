import React from 'react'

export default function GameLogBox({ data }) {
    
  return (
    <div className='bg-[#1e2633] h-40 md:h-44 w-full flex flex-row space-x-1 items-center'>
    {data.slice(0, 5).map(game => 
        <div className='bg-[#00b9bf] h-32 md:h-36 flex-1 flex flex-col justify-center items-center'>
            <p className='font-extrabold text-sm'>{game.MATCHUP}</p>
            <p className='font-extrabold text-sm'>PTS: {game.PTS}</p>
            <p className='font-extrabold text-sm'>AST: {game.AST}</p>
            <p className='font-extrabold text-sm'>REB: {game.REB}</p>
            <p className='font-extrabold text-sm'>MIN: {game.MIN}</p>
            <p className='font-medium'>{game.WL}</p>
        </div>
    )}
</div>
  )
}
