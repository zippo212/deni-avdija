import React from 'react'
import AllTime from './AllTime'
import GameLogs from './GameLogs'
import Profile from './Profile'
import SeasonTotals from './SeasonTotals'
import Standings from './Standings'

export default function Home({ gameLogs,seasonData,careerData,standings,profile,next }) {
  return (
    <> 
      <section id='game-logs'>
          <GameLogs data={gameLogs} next={next}/>
      </section>
      <section id='season-totals'>
        <SeasonTotals data={seasonData}/>
      </section>
      <section id='all-time'>
        <AllTime data={careerData}/>
      </section>
      <section id='standings'>
        <Standings data={standings}/>
      </section>
      <section id='profile'>
          <Profile data={profile}/>
      </section>
    </>
  )
}
