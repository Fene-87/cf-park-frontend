import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { motion as m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

import academyImg from '../assets/academy.jpg';
import academyImg1 from '../assets/academy1.jpg';
import academyImg2 from '../assets/academy2.jpg';
import academyImg3 from '../assets/academy3.jpg';
import academyImg4 from '../assets/academy4.jpg';
import academyImg5 from '../assets/academy5.jpg';
import academyImg6 from '../assets/academy6.jpg';
import academyImg7 from '../assets/academy7.jpg';
import academyImg8 from '../assets/academy8.jpg';
import academyImg9 from '../assets/academy9.jpg';
import academyImg10 from '../assets/academy10.jpg';
import BannerButtons from '../components/bannerbuttons';

const Academy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <div className='academy-content fade-in'>
            <div className="content-overlay"></div>
            <h2>Kid's Academy</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <BannerButtons />
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

            <div className='why-join-right-container'>
            {isMobile ? (
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{el:'.swiper-pagination', clickable:true}}
                navigation={{
                  nextEl:'.swiper-button-next',
                  prevEl:'.swiper-button-prev',
                  clickable:true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper-container-academy'
              >    
                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>Professional Coach</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>Private Coaching</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>Tactical Mastery</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>Skills Training</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>State of the art facilities</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='detail-card shadow-effect'>
                      <h4>School Holiday Program</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ad dolore et ab 
                        distinctio animi at tempore illum totam aliquam?
                      </p>
                    </div>
                  </SwiperSlide>

                <div className="slider-controler .slider-controller-academy">
                  <div className="swiper-button-prev slider-arrow">
                    <GrFormPreviousLink />
                  </div>
                
                  <div className="swiper-button-next slider-arrow">
                    <GrFormNextLink />
                  </div>

                  <div className="swiper-pagination"></div>
                  
                </div>
              </Swiper>
              ) : (
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
            )}
            </div>
            
          </div>
        </div>
      </section>

      <section id='academy-second'>
        <div className='academy-second-container shadow-effect'>
          <h2>Gallery</h2>
          <div className='academy-gallery'>
            <img src={academyImg} alt="academy image" />
            <img src={academyImg1} alt="academy image" />
            <img src={academyImg2} alt="academy image" />
            <img src={academyImg3} alt="academy image" />
            {/* <img src={academyImg4} alt="academy image" /> */}
            <img src={academyImg5} alt="academy image" />
            <img src={academyImg6} alt="academy image" />
            <img src={academyImg7} alt="academy image" />
            {/* <img src={academyImg8} alt="academy image" /> */}
            <img src={academyImg9} alt="academy image" />
            <img src={academyImg10} alt="academy image" />
          </div>
        </div>
      </section>

      <Footer />
    </m.div>
  )
}

export default Academy;
