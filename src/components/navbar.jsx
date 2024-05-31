import React from 'react'

const Navbar = () => {
  return (
    <header id='nav-header' className='shadow-effect'>
      <div className='nav-list'>
        {/* <img src="" alt="" /> */}
        <div>
            CF Logo
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

        {/* <div>
            <p>Book Now</p>
        </div> */}

        <div>
            <p>Sign in / Sign up</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
