import React, { useState } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import leaguesImg from '../assets/adult-leagues-3.jpg';
import { AnimatePresence, motion as m } from 'framer-motion';
import Players from '../components/players';
import LeagueTable from '../components/leaguetable';

const YouthLeagues = () => {
  const [active, setActive] = useState('Players');

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
            <h2>FKF League</h2>
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
          <h2>FKF League</h2>
          <p>
            Calling all youth players. Join our vibrant youth league and showcase your talent
            on the field. Get ready for intense matches, coaching sessions, and a chance to shine
          </p>
        </div>
      </section>

      <section id='academy-second'>
        <div className='fkf-second-container shadow-effect'>
          <ul className='fkf-nav'>
            <li
              className={active === 'Players' ? 'active' : ''}
              onClick={() => setActive('Players')}
            >Players</li>
            <li
              className={active === 'League Table' ? 'active' : ''}
              onClick={() => setActive('League Table')}
            >League Table</li>
            <li
              className={active === 'Fixtures/Results' ? 'active' : ''}
              onClick={() => setActive('Fixtures/Results')}
            >Fixtures/Results</li>
          </ul>

          <div className="fkf-details-container">
            <AnimatePresence mode='wait'>
              {active === "Players" && (
                <m.div
                  key="Players"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Players />
                </m.div>
              )}

              {active === "League Table" && (
                <m.div
                  key="LeagueTable"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <LeagueTable />
                </m.div>
              )}

              {active === "Fixtures/Results" && (
                <m.div
                  key="Fixtures/Results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                ></m.div>
              )}
            </AnimatePresence>   
          </div>
        </div>
      </section>
      <Footer />
    </m.div>
  )
}

export default YouthLeagues;
