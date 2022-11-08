import React from 'react'

export default function Box({ data }) {
  return (
<div className='bg-[#1e2633] h-40 md:h-44 w-full md:w-10/12 flex flex-row space-x-1 items-center'>
    <div className='bg-[#fe317e] h-32 md:h-36 basis-5/12 flex flex-col justify-center items-center space-y-2'>
        <p className='font-extrabold text-5xl md:text-7xl'>{(data.PTS / data.GP).toFixed(1)}</p>
        <p className='font-medium'>PPG</p>
    </div>
    <div className='bg-[#fe186e] h-32 md:h-36 basis-4/12 flex flex-col justify-center items-center space-y-2 opacity-95'>
        <p className='font-extrabold text-4xl md:text-6xl'>{(data.AST / data.GP).toFixed(1)}</p>
        <p className='font-medium'>AST</p>
    </div>
    <div className='bg-[#fb015f] h-32 md:h-36 basis-3/12 flex flex-col justify-center items-center space-y-2 opacity-90'>
        <p className='font-extrabold text-4xl md:text-6xl'>{(data.REB / data.GP).toFixed(1)}</p>
        <p className='font-medium'>RPG</p>
    </div>
    <div className='bg-[#fb015f] h-32 md:h-36 basis-3/12 flex flex-col justify-center items-center space-y-2 opacity-90'>
        <p className='font-extrabold text-3xl md:text-5xl'>{data.GP}</p>
        <p className='font-medium'>APPS</p>
    </div>
</div>
  )
}
