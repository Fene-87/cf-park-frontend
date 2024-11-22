import React from 'react'
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className='booking-widget'>
      <div className='widget-style'>
        <InlineWidget 
          url="https://calendly.com/markfen87"
          styles={{ height: "60vh" }} />
      </div>

      <div className='widget-style'>
        <InlineWidget 
          url="https://calendly.com/markfen87"
          styles={{ height: "60vh" }} />
      </div>
    </div>
  )
}

export default Booking;
