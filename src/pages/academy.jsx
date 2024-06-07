import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import academyImg from '../assets/academy.jpg';

const Academy = () => {
  return (
    <div id='academy-page'>
      <section id='academy-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Kid's Academy</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='banner-btn'>
              <button className='banner-btn-book'>Book Now</button>
              <button className='banner-btn-contact'>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id='academy-first'>
        <div className='academy-first-container shadow-effect'>
          <h2>CF Park Academy</h2>
          <p>
            Unlock your child's potential at the Kids Academy. For just KES 12,000
            one-time fee and subsequent monthly fees of KES 3,000 your child can
            participate in weekend sessions filled with fun, learning and skill development.
          </p>

          <h3>Categories</h3>
          <div className='academy-categories'>
            <div className='category-card shadow-effect'>
              <h4>U7</h4>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U9</h4>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U11</h4>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U13</h4>
            </div>
          </div>
        </div>
      </section>

      <section id='academy-second'>
        <div className='academy-second-container shadow-effect'>
          <h2>Gallery</h2>
          <div className='academy-gallery'>
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
            <img src={academyImg} alt="academy image" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Academy;
