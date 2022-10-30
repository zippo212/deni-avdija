import React from 'react'
import AllTime from './AllTime'
import GameLogs from './GameLogs'
import SeasonTotals from './SeasonTotals'
import Standings from './Standings'

export default function Home({ gameLogs,seasonData,careerData,standings }) {
  return (
    <>
        <GameLogs data={gameLogs}/>
        <SeasonTotals data={seasonData}/>
        <AllTime data={careerData}/>
        <Standings data={standings}/>
    </>
  )
}
