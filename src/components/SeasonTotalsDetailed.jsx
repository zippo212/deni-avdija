import React, { useEffect, useRef } from 'react'
import StatsBox from './StatsBox'
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function SeasonTotalsDetailed({ data, toggle, handle }) {
    const box = useRef();
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline({ paused:true })
        tl.current.to(box.current, {
            y: 0,
            duration: 0.7,
            ease: 'power3',
            display: 'block',
        })
    }, [])

    useEffect(() => {
        if(toggle) {
            document.body.style.overflow = 'hidden';
            tl.current.play()
        } else {
            tl.current.reverse()
            document.body.style.overflow = 'unset';
        }
    }, [toggle])


  return (
    <div className='fixed top-0 xl:top-5 bg-white h-full xl:h-[calc(100%-1.25rem)] w-full xl:w-[calc(100%-2rem)] z-50 shadow-md translate-y-full hidden' ref={box}
    >
        <div className='bg-white pt-3 sticky top-0 shadow-lg'>
            <h2 className='flex flex-col items-center space-y-0.5'>
                <span className='text-[#a0aec0] text-xs'>DENI AVDIJA STATS</span>
                <span className='text-black font-bold text-2xl'>CURRENT SEASON</span>
                <span className='text-[#7c8b97] text-sm font-medium'>All Season Stats</span>
                <p className='w-full pt-3 text-center'>
                    <span className='bg-[#00b9bf] w-1/2 inline-block p-1 text-white text-sm'>DENI AVDIJA</span>
                    <span className='bg-[#fe317e] w-1/2 inline-block p-1 text-white text-sm'>WASHINGTON WIZARDS</span>
                </p>
            </h2>
            <button
                onClick={() => handle(!toggle)}
                className='bg-[#ffd600] px-6 py-4 absolute top-0 right-0'>
                <FontAwesomeIcon icon={faXmark} size="lg" color="black"/>
            </button>
        </div>
        <div className='h-full overflow-auto pb-36'>
        <h3 className='text-[#83939c] text-xs text-center py-6'>
            <span className='bg-[#edf2f7] p-2 rounded-full'>SEASON 2022-23</span>
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-10  text-black text-center w-11/12 2xl:w-8/12 mx-auto">
            <StatsBox stat={data.GP} bg='#00b9bf' title='GAMES PLAYED'/>
            <StatsBox stat={(data.MIN / data.GP).toFixed(1)} bg='#fe317e' title='MINUTES PER GAME'/>
            <StatsBox stat={(data.PTS / data.GP).toFixed(1)} bg='#00b9bf' title='POINTS PER GAME'/>
            <StatsBox stat={(data.FGM / data.GP).toFixed(1)} bg='#fe317e' title='FIELD GOALS MADE'/>
            <StatsBox stat={(data.FGA / data.GP).toFixed(1)} bg='#00b9bf' title='FIELD GOALS ATTEMPTED'/>
            <StatsBox stat={(data.FG_PCT *100).toFixed(1)} bg='#fe317e' title='FIELD GOAL PERCENTAGE'/>
            <StatsBox stat={(data.FG3M / data.GP).toFixed(1)} bg='#00b9bf' title='3-POINT FIELD GOALS MADE'/>
            <StatsBox stat={(data.FG3A / data.GP).toFixed(1)} bg='#fe317e' title='3-POINT FIELD GOALS ATTEMPTED'/>
            <StatsBox stat={(data.FG3_PCT *100).toFixed(1)} bg='#00b9bf' title='3-POINT FIELD GOAL PERCENTAGE'/>
            <StatsBox stat={(data.FTM / data.GP).toFixed(1)} bg='#fe317e' title='FREE THROWS MADE'/>
            <StatsBox stat={(data.FTA / data.GP).toFixed(1)} bg='#00b9bf' title='FREE THROWS ATTEMPTED'/>
            <StatsBox stat={(data.FT_PCT *100).toFixed(1)} bg='#fe317e' title='FREE THROWS PERCENTAGE'/>
            <StatsBox stat={(data.OREB / data.GP).toFixed(1)} bg='#00b9bf' title='OFFENSIVE REBOUNDS'/>
            <StatsBox stat={(data.DREB / data.GP).toFixed(1)} bg='#fe317e' title='DEFENSIVE REBOUNDS'/>
            <StatsBox stat={(data.REB / data.GP).toFixed(1)} bg='#00b9bf' title='TOTAL REBOUNDS'/>
            <StatsBox stat={(data.AST / data.GP).toFixed(1)} bg='#fe317e' title='ASSISTS PER GAME'/>
            <StatsBox stat={(data.TOV / data.GP).toFixed(1)} bg='#00b9bf' title='TURNOVERS PER GAME'/>
            <StatsBox stat={(data.STL / data.GP).toFixed(1)} bg='#fe317e' title='STEALS PER GAME'/>
            <StatsBox stat={(data.BLK / data.GP).toFixed(1)} bg='#00b9bf' title='BLOCKS PER GAME'/>
            <StatsBox stat={(data.PF / data.GP).toFixed(1)} bg='#fe317e' title='PERSONAL FOULS PER GAME'/>
        </ul>
        </div>
    </div>
  )
}
