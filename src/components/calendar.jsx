import React from 'react';
import ReactCaledar from 'react-calendar';
import './styles/calendar.css';

const Calendar = () => {
  return (
    <div>
      <ReactCaledar 
        minDate={new Date()} 
        className='react-calendar'
        view='month'
        onClickDay={(date) => console.log(date)}
      />
    </div>
  )
}

export default Calendar;
