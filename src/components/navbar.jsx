import React from 'react'
import cfLogo from '../assets/cf-logo.jpg'

const Navbar = () => {
  return (
    <header id='nav-header' className='shadow-effect'>
      <div className='nav-list'>
        <div className='nav-logo'>
            <img src={cfLogo} alt="Logo" className='nav-image'/>
        </div>

        <ul className='menu-list'>
            <li>Kids Academy</li>
            <li>Adult Leagues</li>
            <li>Fitness</li>
            <li>Events</li>
            {/* <li>Senior Team</li> */}
            <li>Team Bookings</li>
            <li>About Us</li>
        </ul>

        <div>
            <p>Sign in / Sign up</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
