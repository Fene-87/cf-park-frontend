import React from 'react'
import Gakunga from '../assets/Gakunga.jpg'

const PlayerCard = () => {
  return (
    <div className='player-card'>
      <img src={Gakunga} alt="player-card" className='player-img'/>
      <div className='player-details'>
        <h4>Gakunga</h4>
        <h5>Left Back</h5>
      </div>
    </div>
  )
}

export default PlayerCard
