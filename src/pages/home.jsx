import React from 'react'
import Navbar from '../components/navbar';
import { MdOutlineLocationOn } from "react-icons/md";
import Footer from '../components/footer';

const Home = () => {
  return (
    <div id='home-page'>
      <section id='home-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='banner-content'>
            <h2>Welcome to CF Park</h2>
            <h3>Your ultimate destination for football enthusiasts of all ages</h3>
            <div className='banner-btn'>
              <button className='banner-btn-book'>Book Now</button>
              <button className='banner-btn-contact'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      
      <section id='play-section'>
        <div className='play-section-content shadow-effect'>
          <h2>Come Play With Us</h2>
          <p>
            Our State of the art astro turf fields set to revolutionize the way you experience football.
            Whether you're a budding young talent, a passionate youth player, or an adult looking for some thrilling
            football action, CF Park has something exciting for everyone.
          </p>

          <div id='location-img-section'>
            <div className='cf-kite cf-container'>
              <h3><MdOutlineLocationOn /> <br />CF Park Kitengela,<br /> Chuna Estate</h3>
              <div class="bottom-left"></div>
              <div class="bottom-right"></div>
            </div>

            <div className='cf-great-wall'>
              <h3>CF Park Great Wall</h3>
            </div>
          </div>
        </div>
      </section>

      <section id='features-section'>
        <div className='features-section-container'>

        </div>
      </section>

      <section id='contact-section'>
        <div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home;
