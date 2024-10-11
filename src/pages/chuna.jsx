import React from 'react'
import Footer from '../components/footer';

const Chuna = () => {
  return (
    <div>
      <div>
        <p>CF Park Chuna</p>
        <div style={{ width: "100%" }}>
            <iframe 
              width="100%" 
              height="600" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CF%20Park+(CF%20Park)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Chuna;
