import React from 'react';
import cfLogo from '../assets/cf-logo.jpg'
import { FaInstagram, FaXTwitter, FaYoutube, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <img src={cfLogo} alt="footer-image" />
        <p className='footer-txt'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi 
          natus aperiam omnis reiciendis nesciunt cupiditate sunt. Id minus nulla 
          laudantium, harum numquam perferendis hic dolorum totam similique est. 
          Dolor, praesentium.
        </p>
        <div className='footer-social-icons'>
          <span><FaInstagram /></span>
          <span><FaXTwitter /></span>
          <span><FaYoutube /></span>
          <span><FaSquareFacebook /></span>
          <span><FaTiktok /></span>
        </div>

        <hr />

        <p className='footer-copyright'>&copy; 2022 CF PARK - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
