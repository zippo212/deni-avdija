import React from 'react'

export default function StatsBox({ bg, stat, title }) {
  return (
    <li className='space-y-0.5'>
        <h4 className='w-full bg-[#e2e8f0] text-[#4a5568] font-semibold text-[0.7rem] md:text-xs py-1.5'>{title}</h4>
        <div>
            <span
            style={{backgroundColor: bg}}
            className='w-full inline-block p-2 md:p-3 text-[#fff] font-bold text-2xl md:text-3xl'>
                {stat}
            </span>
        </div>
    </li>
  )
}
