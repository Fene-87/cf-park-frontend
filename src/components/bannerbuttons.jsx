import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const BannerButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToBookings = () => {
    navigate("/team-bookings");
  }

  const handleScrollIntoContact = () => {
    if(location.pathname === "/") {
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth"});
    } else {
        navigate("/")

        setTimeout(() => {
            const section = document.getElementById("contact-section");
            if(section) {
                section.scrollIntoView({ behavior: "smooth"});
            }
        }, 0)
    }
  }

  return (
    <div className='banner-btn'>
        <button onClick={handleGoToBookings} className='banner-btn-book home-btn fade-in'>Book Now</button>
        <button onClick={handleScrollIntoContact} className='banner-btn-contact home-btn fade-in'>Contact Us</button>
    </div>
  )
}

export default BannerButtons;
