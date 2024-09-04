import React from 'react'
import PlayerCard from './playercard'

const Players = () => {
  return (
    <div className='players-container'>
      <h3>Goalkeepers</h3>
      <div className='players-grid'>
        <PlayerCard />
        <PlayerCard />
      </div>
      <h3>Defenders</h3>
      <div className='players-grid'>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <h3>Midfielders</h3>
      <div className='players-grid'>
        <PlayerCard />
      </div>
      <h3>Attackers</h3>
      <div className='players-grid'>
        <PlayerCard />
      </div>
    </div>
  )
}

export default Players
