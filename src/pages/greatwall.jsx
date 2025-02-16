import React, { useEffect } from 'react'
import Footer from '../components/footer'
import LocationNav from '../components/locationnav'

import cfGreatWall from '../assets/cfgreatwall2.jpg'
import cfGreatWallOne from '../assets/academygw7.jpg'
import cfGreatWallTwo from '../assets/academygw1.jpg'
import cfGreatWallThree from '../assets/academygw2.jpg'
import cfGreatWallFour from '../assets/academygw3.jpg'
import cfGreatWallFive from '../assets/academygw4.jpg'
import cfGreatWallSix from '../assets/academygw5.jpg'
import cfGreatWallSeven from '../assets/academygw6.jpg'

const GreatWall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="banner-nav">
        <LocationNav title="CF Park Great Wall" />
      </div>
      <div>
        <div style={{ width: "100%" }}>
          <iframe 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CF%20PARK%20GREATWALL+(CF%20Park%20GreatWall)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
      <section id='academy-second'>
        <div className='academy-second-container shadow-effect'>
          <h2>Gallery</h2>
          <div className='academy-gallery'>
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWallOne} alt="academy image" />
            <img src={cfGreatWallTwo} alt="academy image" />
            <img src={cfGreatWallThree} alt="academy image" />
            <img src={cfGreatWallFour} alt="academy image" />
            <img src={cfGreatWallFive} alt="academy image" />
            <img src={cfGreatWallSix} alt="academy image" />
            <img src={cfGreatWallSeven} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default GreatWall
