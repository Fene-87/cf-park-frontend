import React, { useEffect } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import LocationNav from '../components/locationnav'
import cfGreatWall from '../assets/cfgreatwall2.jpg'

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
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
            <img src={cfGreatWall} alt="academy image" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default GreatWall
