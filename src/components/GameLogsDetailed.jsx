import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'



export default function GameLogsDetailed({ data, toggle, handle }) {
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
            tl.current.play()
            document.body.style.overflow = 'hidden';
        } else {
            tl.current.reverse()
            document.body.style.overflow = 'unset';
        }
    }, [toggle])

  return (
    <div className='fixed top-0 lg:top-5 bg-white h-full lg:h-[calc(100%-1.25rem)] w-full lg:w-[calc(100%-2rem)] z-50 shadow-lg translate-y-full hidden' ref={box}>
        <div className='bg-white pt-3 sticky top-0 shadow-lg'>
            <h2 className='flex flex-col items-center space-y-0.5'>
                <span className='text-[#a0aec0] text-xs'>DENI AVDIJA STATS</span>
                <span className='text-black font-bold text-2xl'>ALL GAME LOGS</span>
                <span className='text-[#7c8b97] text-sm font-medium'>All Game Stats</span>
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
        <div className="h-full overflow-auto pb-32">
            <h3 className='text-[#83939c] text-xs text-center py-6'>
                <span className='bg-[#edf2f7] p-2 rounded-full'>SEASON 2022-23</span>
            </h3>
            <div className="overflow-x-auto">
            <table className="table-auto w-full text-xs sm:text-sm text-left text-gray-500 whitespace-nowrap">
                <thead className='"text-xs text-[#4a5568] uppercase bg-gray-300'>
                    <tr>
                        <th scope='col' className='py-3 px-2 md:px-6'>GAME DATE</th>
                        <th scope='col' className='py-3 px-5 md:px-6'>MATCHUP</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>W/L</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>MIN</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>PTS</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FGM</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FGA</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FG%</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>3PM</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>3PA</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>3P%</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FTM</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FTA</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>FT%</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>OREB</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>DREB</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>REB</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>AST</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>STL</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>BLK</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>TOV</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>PF</th>
                        <th scope='col' className='py-3 px-2 sm:px-3'>+/-</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((game,i) => 
                    <tr key={game.Game_ID} className="md:whitespace-nowrap text-white font-semibold" style={{backgroundColor: i % 2 === 0 ? "#00b9bf" : "#fe317e"}}>
                        <td className="py-3 md:py-4 px-2 md:px-6">{game.GAME_DATE}</td>
                        <td className="py-3 md:py-4 px-5 md:px-6">{game.MATCHUP}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.WL}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.MIN}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.PTS}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FGM}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FGA}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{(game.FG_PCT *100).toFixed(1)}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FG3M}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FG3A}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{(game.FG3_PCT *100).toFixed(1)}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FTM}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.FTA}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{(game.FT_PCT *100).toFixed(1)}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.OREB}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.DREB}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.REB}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.AST}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.STL}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.BLK}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.TOV}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.PF}</td>
                        <td className="py-3 md:py-4 px-3 sm:px-4">{game.PLUS_MINUS}</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}
