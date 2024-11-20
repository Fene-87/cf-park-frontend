import React, { useState } from 'react'
import cfLogo from '../assets/cf-logo.jpg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LocationNav = ({ title }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const handleGoToHome = () => {
    navigate("/");
    setTimeout(() => {
        const section = document.getElementById("play-section");
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    })
  }

  return (
    <header id='nav-header' className='shadow-effect'>
      <div className='nav-list'>
        <div className='nav-logo'>
          <NavLink to='/'>
            <img src={cfLogo} alt="Logo" className='nav-image'/>
          </NavLink>
        </div>

        <div className='menu-list'>
            <h2>{title}</h2>
        </div>

        <button onClick={handleGoToHome} className={`cta-button ${ctaVisible ? 'active' : ''}`}>
            Back to Home
        </button>
      </div>
    </header>
  )
}

export default LocationNav;
