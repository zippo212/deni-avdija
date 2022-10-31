import React from 'react'
import AllTime from './AllTime'
import GameLogs from './GameLogs'
import Profile from './Profile'
import SeasonTotals from './SeasonTotals'
import Standings from './Standings'

export default function Home({ gameLogs,seasonData,careerData,standings,profile }) {
  return (
    <>
        <GameLogs data={gameLogs}/>
        <SeasonTotals data={seasonData}/>
        <AllTime data={careerData}/>
        <Standings data={standings}/>
        <section id='profile'>
            <Profile data={profile}/>
        </section>
        
    </>
  )
}
