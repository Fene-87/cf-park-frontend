import React from 'react'
import Gakunga from '../assets/Gakunga.jpg';
import Gakunga2 from '../assets/Gakunga2.jpg';

const PlayerCard = () => {
  return (
    <div className='player-card'>
      <img src={Gakunga} alt="player-card" className='player-img'/>
      <img src={Gakunga2} alt="player-card" className='hover-img'/>
      
      <div className="jersey-no">4</div>
      
      <div className='player-details'>
        <h4>Gakunga</h4>
        <h5>Left Back</h5>
      </div>
    </div>
  )
}

export default PlayerCard
