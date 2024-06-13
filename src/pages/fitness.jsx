import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { motion as m } from 'framer-motion';

const Fitness = () => {
  return (
    <m.div
      id='fitness-page'
      initial={{ opacity: 0.5}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <section id='fitness-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Fitness</h2>
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
          <h2>Fitness</h2>
          <p>
            Discover the ultimate fitness experience tailored for all ages and fitness levels 
            at our Fitness Program. Participants can enjoy a variety of group classes, 
            personal training sessions, and access to state-of-the-art facilities. Whether 
            you're looking to improve your strength, flexibility, or overall health, our 
            expert trainers are here to guide and motivate you every step of the way.
          </p>
        </div>
      </section>

      <Footer />
    </m.div>
  )
}

export default Fitness;
