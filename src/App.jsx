import React, { useState, useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Around from './components/Around'
import Header from './components/Header'
import Home from './components/Home'
import load from './img/giphy.gif'


function App() {
  const effectRan = useRef(false)
  const [ nbaApiData ,setNbaApiData ] = useState(JSON.parse(localStorage.getItem('data')) || [])

  useEffect(() => {
    if (effectRan.current === false) {
      const getDataFromLocalStorage = () => {
        if(localStorage.getItem('data'))
          return JSON.parse(localStorage.getItem('data')) || null;
        }

      const areDataOutdated = (receivedAt) => {
        if (!data.receivedAt || isNaN(Date.parse(receivedAt))) {
            return true;
        }
        // Basically, we take the actual date, and we removed 2 hours
        const checkDate = new Date(new Date().getTime() - (60 * 60 * 2 * 1000));
        // If the data received is lower than the checkDate, it means that data are outdated.
        return new Date(receivedAt).getTime() < checkDate.getTime();
      };

      async function fetchMyAPI() {
        // const headers = {
        //   'X-Master-Key': process.env.REACT_APP_SECRET_X_KEY,
        //   'X-BIN-META': false,
        // }
      try {
        const results = await Promise.all([
          fetch(`${process.env.REACT_APP_SECRET_URL}/career_stats.json`),
          fetch(`${process.env.REACT_APP_SECRET_URL}/game_logs.json`),
          fetch(`${process.env.REACT_APP_SECRET_URL}/set_standings.json`),
          fetch(`${process.env.REACT_APP_SECRET_URL}/around.json`),
          fetch(`${process.env.REACT_APP_SECRET_URL}/info_next.json`),
        ])
        const finalData = await Promise.all(results.map(result => result.json())) 
          localStorage.setItem('data',JSON.stringify({finalData, receivedAt: new Date()}))
          setNbaApiData(JSON.parse(localStorage.getItem('data')))
      } catch (err) {
        console.error(err);
      }
    }
    const data = getDataFromLocalStorage();
    if (!data || areDataOutdated(data && data.receivedAt) || data.finalData.length < 1) {
      // then fetch your data
      fetchMyAPI()
    }
    return () => {
      effectRan.current = true
    }
    }
    }, [])

  return (
    <div className='bg-[#0b0e13] text-[#fff]'>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={
                nbaApiData?.finalData?.length > 0 ? 
            <Home 
            gameLogs={nbaApiData.finalData[1].PlayerGameLog} 
            seasonData={nbaApiData.finalData[0].SeasonTotalsRegularSeason[2]} 
            careerData={nbaApiData.finalData[0].CareerTotalsRegularSeason[0]} 
            standings={nbaApiData.finalData[2].Standings} 
            profile={nbaApiData.finalData[4]} 
            next={nbaApiData.finalData[4][1].NextNGames[0]}/> : 
            <div className='w-full absolute bottom-12 space-y-1'>
              <p className='text-center font-semibold'>Loading</p>
              <img src={load} alt="" className='h-32 w-32 mx-auto rounded-full opacity-70'/>
            </div>
            } />
            <Route path='/around' element={
              nbaApiData?.finalData?.length > 0 ?
            <Around standings={nbaApiData.finalData[2].Standings} team={nbaApiData.finalData[3][1]} player={nbaApiData.finalData[3][0]}/> : 
            <div className='w-full absolute bottom-12 space-y-1'>
              <p className='text-center font-semibold'>Loading</p>
              <img src={load} alt="" className='h-32 w-32 mx-auto rounded-full opacity-70'/>
            </div>
            } />
          </Routes>
        </BrowserRouter>
        {nbaApiData?.finalData?.length > 0 && 
        <span className='bg-[#141a23] text-[#a0aec089] py-2.5 px-2 fixed sm:sticky top-12 sm:bottom-0 right-0 sm:left-0 text-xs z-40'>{nbaApiData.finalData[4][2]['time']}</span>
        }
    </div>
  )
}

export default App