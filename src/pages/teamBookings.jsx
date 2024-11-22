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

      <section id='calendar-section'>
        <div className='calendly-booking shadow-effect'>
          <Booking />
        </div>
      </section>
      <Footer />
    </m.div>
  )
}

export default TeamBookings;
