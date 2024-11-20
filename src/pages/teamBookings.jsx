import React, { useState } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { motion as m } from 'framer-motion';
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import coachez from '../assets/profile-placeholder.png';
import ReactCaledar from 'react-calendar';
import '../components/styles/calendar.css';
import { add, format } from 'date-fns';
import DateTimePicker from 'react-datetime-picker';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import Booking from '../components/booking';
import BannerButtons from '../components/bannerbuttons';

const TeamBookings = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options:{
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    })

    if(error) {
      alert("Error logging in to google provider with Supabase")
      console.log(error);
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut();
  }

  const [date, setDate] = useState({
    justDate: '',
    dateTime: '',
  })

  const getTimes = () => {
    if(!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: 4 });
    const end = add(justDate, { hours: 23 });
    const interval = 30

    const times = [];
    for(let i = beginning; i <=end; i = add(i, { minutes: interval })) {
      times.push(i)
    }

    return times;
  }

  const bookNow = async () => {
    console.log("Booking your slot")

    const event = {
      // "summary": eventName,
      // "description": eventDescription,
      "start": {
        "dateTime": startTime.toISOString(),
        "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      "end": {
        "dateTime": endTime.toISOString(),
        "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }

    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + session.provider_token
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      alert("Spot booked, check your google calendar")
    })
  }

  const times = getTimes();

  if(isLoading) {
    return <></>
  }
  
  return (
    <m.div 
      id='team-bookings'
      initial={{ opacity: 0.5}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <section id='booking-bg-img' className='shadow-effect'>
        <div className="bg-gradient">
          <div className="banner-nav">
            <Navbar />
          </div>
          <div className='academy-content'>
            <h2>Team Bookings</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <BannerButtons />
          </div>
        </div>
      </section>

      <section id='leagues-first'>
        <div className='academy-first-container shadow-effect'>
          <h2>Team Bookings</h2>
          <p>
            Are you part of a team? Rent our fields for exhilarating matches. Small field bookings are
            available at KES 3,000 per hour, while the big field is priced at KES 6,000 per hour.
          </p>
        </div>

      </section>


      {/* <section id='contact-section'>
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
      </section> */}
      <section id='calendar-section'>
        {/* <div className='booking-calendar'>
          <div>
            <div>
              <ReactCaledar 
                minDate={new Date()} 
                className='react-calendar'
                view='month'
                onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
              />
            </div>
          </div>

          <div className='pick-time'>
            <h4>Pick a time</h4>
              {date.justDate && (
                <div className='times-container'>
                  {times?.map((time, i) => (
                    <div key={`time-${i}`} className='available-times'>
                      <button 
                        type='button' 
                        onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
                      >
                        {format(time, 'kk:mm')}
                      </button>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div> */}

        {/* <div>
          <hr />
          <h4>Or</h4>
          <h5>Contact Us to Secure Your Booking</h5>
        </div> */}

        {/* <div>
          {session ? (
            <div>
              <div>
                <h3>Book a slot</h3>
                <p>Start of your session</p>
                <DateTimePicker 
                  onChange={setStartTime} 
                  value={startTime} 
                  className='date-picker' 
                />
                <p>End of your session</p>
                <DateTimePicker 
                  onChange={setEndTime} 
                  value={endTime} 
                  className='date-picker' 
                />
                <button onClick={bookNow}>Book Now</button>
                <br />
                <button onClick={signOut}>Sign out</button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <button onClick={googleSignIn}>Sign in with google</button>
              </div>
            </div>
          )}
        </div> */}
        <div className='calendly-booking shadow-effect'>
          <Booking />
        </div>
      </section>
      <Footer />
    </m.div>
  )
}

export default TeamBookings;
