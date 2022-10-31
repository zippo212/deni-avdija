import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Around from './components/Around'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  const [ careerData , setCareerData ] = useState([{}])
  const [ seasonData , setSeasonData ] = useState([{}])
  const [ gameLogs, setGameLogs ] = useState([{}])
  const [ standings, setStandings ] = useState([{}])
  const [ teamLead, setTeamLead ] = useState([{}])
  const [ playerLead, setPlayerLead ] = useState([{}])
  const [ playerInfo, setPlayerInfo ] = useState([{}])

  useEffect(() =>{
    fetch('/nba').then(res => res.json()).then(data => {
        setCareerData(data.CareerTotalsRegularSeason[0])
        setSeasonData(data.SeasonTotalsRegularSeason[2])
      })
      
    fetch('/game_logs').then(res => res.json()).then(data => {
        setGameLogs(data.PlayerGameLog)
      })
      
    fetch('/standings').then(res => res.json()).then(data => {
        setStandings(data.Standings)
      })

    fetch('/team_lead').then(res => res.json()).then(data => {
      setTeamLead(data);
      })

    fetch('/player_lead').then(res => res.json()).then(data => {
      setPlayerLead(data);
      })

    fetch('/player_info').then(res => res.json()).then(data => {
      setPlayerInfo(data)
      })
    }, [])

  return (
    <div className='bg-[#0b0e13] text-[#fff]'>

        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home gameLogs={gameLogs} seasonData={seasonData} careerData={careerData} standings={standings} profile={playerInfo}/>} />
            <Route path='/around' element={<Around standings={standings} team={teamLead} player={playerLead}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App