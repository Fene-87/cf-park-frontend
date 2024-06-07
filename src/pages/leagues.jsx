import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import leaguesImg from '../assets/adult-leagues-2.jpg'
const Leagues = () => {
  return (
    <div id='leagues-page'>
      <section id='leagues-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Adult Leagues</h2>
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
    </div>
  )
}

export default Leagues;
