import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { motion as m } from 'framer-motion';
import BannerButtons from '../components/bannerbuttons';

const Events = () => {
  return (
    <m.div
      id='fitness-page'
      initial={{ opacity: 0.5}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <section id='events-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Events</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <BannerButtons />
          </div>
        </div>
      </section>

      <section id='events-section'>
        <div className="events-container">
          <div></div>
          <div className='recent-events-container'>
            <h3>Recent Events</h3>
            <div className='event-card'>
              <div>
                <p>NOV</p>
                <p>16</p>
                <p>2024</p>
              </div>

              <div className='event-card-content'>
                <h2>Featured <span>November 2024</span></h2>
                <h4>Majanja Cup Memorial Tournament</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing 
                  elit. Odit voluptate numquam ad eum. Repudiandae 
                  laboriosam expedita tempora alias. Quos, provident. 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Libero dolorem facere voluptatem vitae asperiores? 
                  Consequuntur doloremque alias saepe sapiente suscipit, 
                  consectetur quibusdam facilis voluptates quia officia quas,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </m.div>
  )
}

export default Events;
