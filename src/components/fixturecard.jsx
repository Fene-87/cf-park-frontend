import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import FkfLogo from "../assets/fkf-logo.png";

const FixtureCard = ({ item }) => {
  const {
    date,
    time,
    homeAway,
    homeTeam,
    awayTeam,
    location
  } = item;

  return (
    <div className='result-card shadow-effect'>
      <div className='result-date'>
        <div className='result-date-txt'>
          <img src={FkfLogo} alt="FKF Logo" className='fkf-logo' />
          <div>
            <p>{date}</p> <br />
            <p>{time}</p>
          </div>
        </div>
        <div className='home-away'>
          <p>{homeAway}</p>
        </div>
      </div>

      <div className='result-detail'>
        <p>{homeTeam}</p>
        <div className='result-detail-div'>
          <div className='score-display'>
            <p>VS</p>
          </div>
        </div>
        <p>{awayTeam}</p>
      </div>

      <div className='result-location'>
        <p><MdOutlineLocationOn /> {location}</p>
      </div>
    </div>
  )
}

export default FixtureCard
