import React, { useState } from 'react'
import cfLogo from '../assets/cf-logo.jpg'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id='nav-header' className='shadow-effect'>
      <div className='nav-list'>
        <div className='nav-logo'>
          <NavLink to='/'>
            <img src={cfLogo} alt="Logo" className='nav-image'/>
          </NavLink>
        </div>

        <ul className={`menu-list ${menuOpen ? 'active' : ''}`}>
          <NavLink to='/academy' className='navlink'>
            <li>Kids Academy</li>
          </NavLink>
          <NavLink to='/youth-leagues' className='navlink'>
            <li>FKF</li>
          </NavLink>
          <NavLink to='/adult-leagues' className='navlink'>
            <li>Adult Leagues</li>
          </NavLink>
          <NavLink to='/fitness' className='navlink'>
            <li>Fitness</li>
          </NavLink>
          <NavLink to='/events' className='navlink'>
            <li>Events</li>
          </NavLink>
          <NavLink to='/team-bookings' className='navlink'>
            <li>Team Bookings</li>
          </NavLink>
        </ul>

        <div className='cta-button'>
            <p>Be A Member</p>
        </div>

        <div className='menu'>
          <p className='menu-icon' onClick={toggleMenu}><FaBars /></p>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
