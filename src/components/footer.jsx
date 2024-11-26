import React from 'react';
import cfLogo from '../assets/logo.png'
import { FaInstagram, FaXTwitter, FaYoutube, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const tiktokGradientStyle = {
    background: "linear-gradient(45deg, #69C9D0, #EE1D52)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <footer id='footer'>
      <div className='footer-container'>
        <img src={cfLogo} alt="footer-image" />
        <p className='footer-txt'>
          Building future stars, fueling professional dreams, and honoring 
          legends who never hang up their boots. Our academy, pro team, and 
          adult league keep the beautiful game alive for all. Karibu!
        </p>
        <div className='footer-social-icons'>
          <a href="#">
            <span><FaInstagram /></span>
          </a>
          <a href="">
            <span><FaXTwitter /></span>
          </a>
          <a href="#">
            <span><FaYoutube /></span>
          </a>
          <a href="https://www.facebook.com/CFPark254?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <span><FaSquareFacebook /></span>
          </a>
          <a href="#">
          <span style={tiktokGradientStyle}><FaTiktok /></span>
          </a>
        </div>

        <hr />

        <p className='footer-copyright'>&copy; 2022 CF PARK - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
