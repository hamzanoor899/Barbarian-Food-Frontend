import React from 'react';
import { ContactUs } from './component/ContactUs';
import { Map } from './component/Map';

export const Contact = () => {
  return (
    <>
    <div className='contact_banner position-relative'>
    <div className="our_service_head">
          <h1>Contact Us</h1>
        </div>
    </div>
    <ContactUs />
    <Map />
    </>
  );
};
