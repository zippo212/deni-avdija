import React from 'react'
import deniImg from '../img/washington-wizards-deni-avdija-min--hcrs3yiz.png'

export default function Profile({ data }) {
    const info = data[0].CommonPlayerInfo ? data[0].CommonPlayerInfo[0] : []
    const headline = data[0].PlayerHeadlineStats ? data[0].PlayerHeadlineStats[0] : []
  return (
    <div className='flex flex-col items-center pt-6'>
        <h4 className='text-[#ffd600] font-semibold'>Profile</h4>
        <div className='bg-[#13181f] w-full md:w-10/12 lg:w-9/12 xl:w-6/12 my-6 flex flex-col items-center py-6 z-40'>
            <div className='w-full md:w-11/12 flex justify-between'>
                <div>
                    <h5 className='text-[#a0aec0]'>{`${info?.TEAM_CITY} ${info?.TEAM_CODE} | #${info?.JERSEY} | ${info?.POSITION}`}</h5>
                    <h4 className='font-bold text-4xl uppercase'>Deni avdija</h4>
                </div>
                <img className='h-36 w-42' src={deniImg} alt="" />
            </div>
            <div className='bg-[#1e2633] py-2 w-full md:w-11/12 flex flex-col space-y-0.5'>
                <div className='bg-[#00b9bf] w-full flex items-center'>
                    <div className='text-center flex-1'>
                            <p className='font-bold text-l'>{headline?.PTS}</p>
                            <p className='font-medium text-xs'>PPG</p>
                    </div>
                        <span className='w-0.5 h-5 bg-white'></span>
                    <div className='text-center flex-1'>
                            <p className='font-bold text-l'>{headline?.REB}</p>
                            <p className='font-medium text-xs'>RPG</p>
                    </div>
                        <span className='w-0.5 h-5 bg-white'></span>
                    <div className='text-center flex-1'>
                            <p className='font-bold text-l'>{headline?.AST}</p>
                            <p className='font-medium text-xs'>APG</p>
                    </div>
                        <span className='w-0.5 h-5 bg-white'></span>
                    <div className='text-center flex-1'>
                            <p className='font-bold text-l'>{(headline?.PIE *100).toFixed(1)}</p>
                            <p className='font-medium text-xs'>PIE</p>
                    </div>
                </div>
                <div className='w-full flex flex-col sm:flex-row space-y-0.5 sm:space-y-0 sm:space-x-1 items-center whitespace-nowrap'>
                    <div className='bg-[#fe186e] h-18 sm:h-32 md:h-36 w-full sm:basis-3/12 flex sm:flex-col justify-evenly sm:justify-center items-center sm:space-y-2'>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>6'9" (2.06m)</p>
                            <p className='font-medium text-xs'>HEIGHT</p>
                        </div>
                            <span className='w-0.5 h-8 sm:w-20 sm:h-0.5 bg-white'></span>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>21 years</p>
                            <p className='font-medium text-xs'>AGE</p>
                        </div>
                    </div>
                    <div className='bg-[#fe186e] h-18 sm:h-32 md:h-36 w-full sm:basis-3/12 flex sm:flex-col justify-evenly sm:justify-center items-center sm:space-y-2'>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>210lb (95kg)</p>
                            <p className='font-medium text-xs'>WEIGHT</p>
                        </div>
                            <span className='w-0.5 h-8 sm:w-20 sm:h-0.5 bg-white'></span>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>January 3, 2001</p>
                            <p className='font-medium text-xs'>BIRTHDATE</p>
                        </div>
                    </div>
                    <div className='bg-[#fe186e] h-18 sm:h-32 md:h-36 w-full sm:basis-3/12 flex sm:flex-col justify-evenly sm:justify-center items-center sm:space-y-2'>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>Israel</p>
                            <p className='font-medium text-xs'>COUNTRY</p>
                        </div>
                            <span className='w-0.5 h-8 sm:w-20 sm:h-0.5 bg-white'></span>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>2020 R1 Pick 9</p>
                            <p className='font-medium text-xs'>DRAFT</p>
                        </div>
                    </div>
                    <div className='bg-[#fe186e] h-18 sm:h-32 md:h-36 w-full sm:basis-3/12 flex sm:flex-col justify-evenly sm:justify-center items-center sm:space-y-2'>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>{info?.LAST_AFFILIATION}</p>
                            <p className='font-medium text-xs'>LAST ATTENDED</p>
                        </div>
                            <span className='w-0.5 h-8 sm:w-20 sm:h-0.5 bg-white'></span>
                        <div className='text-center flex-1 sm:flex-none'>
                            <p className='font-bold text-l'>{info?.SEASON_EXP} Years</p>
                            <p className='font-medium text-xs'>EXPERIENCE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
