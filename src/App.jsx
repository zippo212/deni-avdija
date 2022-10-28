import React, { useState, useEffect } from 'react'
import AllTime from './components/AllTime'
import GameLogs from './components/GameLogs'
import Header from './components/Header'
import SeasonTotals from './components/SeasonTotals'
import Standings from './components/Standings'



function App() {

  const [ careerData , setCareerData ] = useState([{}])
  const [ seasonData , setSeasonData ] = useState([{}])
  const [ gameLogs, setGameLogs ] = useState([{}])
  const [ standings, setStandings ] = useState([{}])

  useEffect(() =>{
    fetch('/nba').then(res => res.json()).then(
      data => {
        setCareerData(data.CareerTotalsRegularSeason[0])
        setSeasonData(data.SeasonTotalsRegularSeason[2])
      }
      )
    fetch('/game_logs').then(res => res.json()).then(
      data => {
        setGameLogs(data.PlayerGameLog)
      }
      )
    fetch('/standings').then(res => res.json()).then(
      data => {
        setStandings(data.Standings)
      }
      )
    }, [])
  return (
    <div className='bg-[#0b0e13] text-[#fff]'>
        <Header />
        <GameLogs data={gameLogs}/>
        <SeasonTotals data={seasonData}/>
        <AllTime data={careerData}/>
        <Standings data={standings}/>
    </div>
  )
}

export default App