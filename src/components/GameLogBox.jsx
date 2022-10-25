import React from 'react'

export default function GameLogBox({ }) {
  return (
    <div className='bg-[#1e2633] h-40 md:h-44 w-full flex flex-row space-x-1 items-center'>
    <div className='bg-[#fe317e] h-32 md:h-36 flex-1 flex flex-col justify-center items-center space-y-2'>
        <p className='font-extrabold text-7xl'>{}</p>
        <p className='font-medium'>PPG</p>
    </div>
    <div className='bg-[#fe186e] h-32 md:h-36 flex-1 flex flex-col justify-center items-center space-y-2 opacity-95'>
        <p className='font-extrabold text-6xl'>{}</p>
        <p className='font-medium'>AST</p>
    </div>
    <div className='bg-[#fb015f] h-32 md:h-36 flex-1 flex flex-col justify-center items-center space-y-2 opacity-90'>
        <p className='font-extrabold text-6xl'>{}</p>
        <p className='font-medium'>RPG</p>
    </div>
    <div className='bg-[#fb015f] h-32 md:h-36 flex-1 flex flex-col justify-center items-center space-y-2 opacity-90'>
        <p className='font-extrabold text-5xl'>{}</p>
        <p className='font-medium'>APPS</p>
    </div>
    <div className='bg-[#fb015f] h-32 md:h-36 flex-1 flex flex-col justify-center items-center space-y-2 opacity-90'>
        <p className='font-extrabold text-5xl'>{}</p>
        <p className='font-medium'>APPS</p>
    </div>
</div>
  )
}
