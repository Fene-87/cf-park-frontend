import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import FkfLogo from "../assets/fkf-logo.png";

const FixtureCard = () => {
  return (
    <div className='result-card shadow-effect'>
      <div className='result-date'>
        <div className='result-date-txt'>
          <img src={FkfLogo} alt="FKF Logo" className='fkf-logo' />
          <div>
            <p>Sun 8 Sep</p> <br />
            <p>9:00 AM</p>
          </div>
        </div>
        <div className='home-away'>
          <p>H</p>
        </div>
      </div>

      <div className='result-detail'>
        <p>C.F. Park FC</p>
        <div className='result-detail-div'>
          <div className='score-display'>
            <p>VS</p>
          </div>
        </div>
        <p>Hope Stars FC</p>
      </div>

      <div className='result-location'>
        <p><MdOutlineLocationOn /> Arena Park</p>
      </div>
    </div>
  )
}

export default FixtureCard
