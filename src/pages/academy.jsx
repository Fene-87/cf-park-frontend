import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import academyImg from '../assets/academy.jpg';
import { motion as m } from 'framer-motion';

const Academy = () => {
  return (
    <m.div 
      id='academy-page'
      initial={{ opacity: 0.5}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
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
              <h5>Discovery Phase</h5>
              <p>
                Aims to create a positive first experience with football, 
                teaching fundamental skills in an enjoyable and engaging setting. 
                This approach fosters essential social and cognitive abilities, 
                enabling the kids to connect basic techniques with their application 
                in football as they progress to the next stage of their development.
              </p>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U9</h4>
              <h5>Foundation Phase</h5>
              <p>
                Focuses on connecting fundamental movements to the technical aspects of 
                football. Players will enhance their skills in ball control, passing and 
                receiving, and goal scoring as part of the Pro Football Academy curriculum. 
                This is achieved in an environment that encourages risk-taking, self-expression, 
                and problem-solving.
              </p>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U11</h4>
              <h5>Building Skills Phase</h5>
              <p>
                Focuses on bridging basic movements with the technical aspects of football. 
                Players will advance their abilities in ball control, passing, receiving, 
                and goal scoring following the CF Park Academy curriculum. This takes place in 
                a supportive setting that fosters creativity, confidence, and strategic thinking.
              </p>
            </div>
            <div className='category-card shadow-effect'>
              <h4>U13</h4>
              <h5>Youth Development</h5>
              <p>
                Cultivate an individual grasp of when and where to utilize the technical fundamentals 
                taught at the Pro Football Academy. Subsequently, we concentrate on enhancing teamwork 
                skills in more competitive settings.
              </p>
            </div>
          </div>

          <div className='why-join-academy'>
            <div className='why-join-left'>
              <h3>Why Join Us</h3>
              <h5>Life is like football,<br />We need goals.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil ipsam eum blanditiis 
                maxime, sunt sint repudiandae veniam in laudantium?
              </p>
              <hr />
            </div>

            <div className='why-join-right'>
              <div className='detail-card shadow-effect'>
                <h4>Professional Coach</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
              <div className='detail-card shadow-effect'>
                <h4>Private Coaching</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
              <div className='detail-card shadow-effect'>
                <h4>Tactical Mastery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
              <div className='detail-card shadow-effect'>
                <h4>Skills Training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
              <div className='detail-card shadow-effect'>
                <h4>State of the art facilities</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
              <div className='detail-card shadow-effect'>
                <h4>School Holiday Program</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                  distinctio animi at tempore illum totam aliquam?
                </p>
              </div>
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
    </m.div>
  )
}

export default Academy;
