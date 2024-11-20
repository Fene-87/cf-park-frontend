import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import leaguesImg from '../assets/adult-leagues-3.jpg';
import { motion as m } from 'framer-motion';
import BannerButtons from '../components/bannerbuttons';

const Leagues = () => {
  return (
    <m.div 
      id='leagues-page'
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
            <div className="content-overlay"></div>
            <h2>Adult Leagues</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <BannerButtons />
          </div>
        </div>
      </section>

      <section id='leagues-first'>
        <div className='academy-first-container shadow-effect'>
          <h2>Adult Leagues</h2>
          <p>
            Embrace your love for the game in our adult leagues. With a monthly fee of KES 4,000
            and a one-time registration fee of KES 2,000 adults can enjoy regular matches, competitions,
            and camaraderie with fellow football enthusiasts.
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

export default Leagues;
