import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import leaguesImg from '../assets/adult-leagues-3.jpg';
import { motion as m } from 'framer-motion';

const YouthLeagues = () => {
  return (
    <m.div 
      id='youth-leagues-page'
      initial={{ opacity: 0.5}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <section id='leagues-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Youth Leagues</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='banner-btn'>
              <button className='banner-btn-book'>Book Now</button>
              <button className='banner-btn-contact'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id='leagues-first'>
        <div className='academy-first-container shadow-effect'>
          <h2>Youth Leagues</h2>
          <p>
            Calling all youth players. Join our vibrant youth league and showcase your talent
            on the field. Get ready for intense matches, coaching sessions, and a chance to shine
          </p>
        </div>
      </section>

      <section id='academy-second'>
        <div className='academy-second-container shadow-effect'>
          <h2>Gallery</h2>
          <div className='academy-gallery'>
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
            <img src={leaguesImg} alt="academy image" />
          </div>
        </div>
      </section>
      <Footer />
    </m.div>
  )
}

export default YouthLeagues;
