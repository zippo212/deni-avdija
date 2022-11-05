import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Around from './components/Around'
import Header from './components/Header'
import Home from './components/Home'
import { ColorRing } from  'react-loader-spinner'

function App() {

  const [ nbaApiData ,setNbaApiData ] = useState(JSON.parse(localStorage.getItem('data')) || [])

  useEffect(() => {
      const getDataFromLocalStorage = () => {
        if(localStorage.getItem('data'))
          return JSON.parse(localStorage.getItem('data')) || null;
        }

      const areDataOutdated = (receivedAt) => {
        if (!data.receivedAt || isNaN(Date.parse(receivedAt))) {
            return true;
        }
        // Basically, we take the actual date, and we removed 1 hours
        const checkDate = new Date(new Date().getTime() - (60 * 60 * 1 * 1000));
        // If the data received is lower than the checkDate, it means that data are outdated.
        return new Date(receivedAt).getTime() < checkDate.getTime();
      };

      async function fetchMyAPI() {
      try {
        const results = await Promise.all([
          fetch('https://api.npoint.io/839c22828e6d1580adc6'),
          fetch('https://api.npoint.io/2ed3576337a13a0bb5f1'),
          fetch('https://api.npoint.io/2ce9f66b5c9c19b9fbf9'),
          fetch('https://api.npoint.io/717374f16152671f95b9'),
          fetch('https://api.npoint.io/f27c7d729539df71da5f'),
          fetch('https://api.npoint.io/582e897ceb1054926f1f'),
          fetch('https://api.npoint.io/d8434e9fc3b6e9b41aa6'),
          // fetch('/nba'),
          // fetch('/game_logs'),
          // fetch('/standings'),
          // fetch('/team_lead'),
          // fetch('/player_lead'),
          // fetch('/player_info'),
          // fetch('/next_games')
        ])
        const finalData = await Promise.all(results.map(result => result.json())) 
          localStorage.setItem('data',JSON.stringify({finalData, receivedAt: new Date()}))
          setNbaApiData(JSON.parse(localStorage.getItem('data')))
      } catch (err) {
        console.error(err);
      }
    }
    const data = getDataFromLocalStorage();
    if (!data || areDataOutdated(data && data.receivedAt)) {
      // then fetch your data
      fetchMyAPI()
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
            profile={nbaApiData.finalData[5]} 
            next={nbaApiData.finalData[6].NextNGames[0]}/> : 
            <ColorRing
            visible={true}
            height="90"
            width="90"
            ariaLabel="blocks-loading"
            wrapperClass="h-screen mx-auto"
            colors={['#00b9bf', '#fe317e', '#fb015f', '#ffd600', '#00b9bf']}
            />
            } />
            <Route path='/around' element={
              nbaApiData?.finalData?.length > 0 ?
            <Around standings={nbaApiData.finalData[2].Standings} team={nbaApiData.finalData[3]} player={nbaApiData.finalData[4]}/> : 
            <ColorRing
            visible={true}
            height="90"
            width="90"
            ariaLabel="blocks-loading"
            wrapperClass="h-screen mx-auto"
            colors={['#00b9bf', '#fe317e', '#fb015f', '#ffd600', '#00b9bf']}
            />
            } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App