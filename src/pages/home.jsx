import React from 'react'
import Navbar from '../components/navbar';
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Footer from '../components/footer';
import cfpark from '../assets/cfpark-background.jpg';
import coachez from '../assets/profile-placeholder.png';

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

            <div className='cf-great-wall cf-container'>
              <h3><MdOutlineLocationOn /> <br />CF Park,<br /> Great Wall</h3>
              <div class="bottom-left"></div>
              <div class="bottom-right"></div>
            </div>
          </div>
        </div>
      </section>

      <section id='programs-section'>
        <div className='shadow-effect programs-section-container'>
          <h3>Programs</h3>
          <div className='program shadow-effect'>
            <div>
              <img src={cfpark} alt="kids-academy" className='program-img'/>
            </div>
            <div className='program-content'>
              <h4>KIDS ACADEMY</h4>
              <p>
                Unlock your child's potential at the Kids Academy. For just KES 12,000
                one-time fee and subsequent monthly fees of KES 3,000 your child can
                participate in weekend sessions filled with fun, learning and skill development.
              </p>
            </div>
          </div>

          <div className='program shadow-effect'>
            <div className='program-content'>
              <h4>YOUTH LEAGUE</h4>
              <p>
                Calling all youth players. Join our vibrant youth league and showcase your talent
                on the field. Get ready for intense matches, coaching sessions, and a chance to shine
              </p>
            </div>

            <div>
              <img src={cfpark} alt="kids-academy" className='program-img'/>
            </div>
          </div>

          <div className='program shadow-effect'>
            <div>
              <img src={cfpark} alt="kids-academy" className='program-img'/>
            </div>

            <div className='program-content'>
              <h4>ADULT LEAGUES</h4>
              <p>
                Embrace your love for the game in our adult leagues. With a monthly fee of KES 4,000
                and a one-time registration fee of KES 2,000 adults can enjoy regular matches, competitions,
                and camaraderie with fellow football enthusiasts.
              </p>
            </div>
          </div>

          <div className='program shadow-effect'>
            <div className='program-content'>
              <h4>TEAM BOOKINGS</h4>
              <p>
                Are you part of a team? Rent our fields for exhilarating matches. Small field bookings are
                available at KES 3,000 per hour, while the big field is priced at KES 6,000 per hour.
              </p>
            </div>

            <div>
              <img src={cfpark} alt="kids-academy" className='program-img'/>
            </div>
          </div>
        </div>
      </section>

      <section id='contact-section'>
        <div className='contact-container shadow-effect'>
          <h3>Contact Us</h3>
          <div className='contact-options'>
            <div className='contact-person shadow-effect'>
              <img src={coachez} alt="coach-eddy-image" className='coach-img' />
              <div className='contact-icons'>
                <FiPhone />
                <FaRegMessage />
                <FaWhatsapp />
              </div>
              <h4 className='phone-no'>+254746033896</h4>
              <h4 className='coach-text'>
                CONTACT COACH EDDY FOR INQUIRIES, BOOKINGS, AND REGISTRATIONS
              </h4>
              <h4 className='coach-content-txt'>
                Get ready to kick off an unforgetable football journey at any of our facilities
              </h4>
            </div>

            <div className='contact-form'>
              <h3>Get In Touch</h3>
              <form>
                <label htmlFor="name" className='hidden'>Full Name</label>
                <input type="text" id='name' className='form-input' placeholder='Full name'/>

                <label htmlFor="email" className='hidden'>Email Address</label>
                <input type="email" id='email' className='form-input' placeholder='Email address' />

                <label htmlFor="phone" className='hidden'>Phone Number</label>
                <input type="text" id='phone' className='form-input' placeholder='Phone number' />

                <label htmlFor="message" className='hidden'>Get in touch</label>
                <textarea name="message" id="message" className='form-input form-text' placeholder='Get in touch...'></textarea>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home;
