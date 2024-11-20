import React from 'react'
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div>
      <InlineWidget 
        url="https://calendly.com/markfen87"
        styles={{ height: "90vh" }} />
    </div>
  )
}

export default Booking;
