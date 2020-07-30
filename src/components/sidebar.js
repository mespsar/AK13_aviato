import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// Tags to Render On Menu Selection


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Parking">
        Parking 
      </a>

      <a className="menu-item" href="/Trolley">
        Trolley  
      </a>

      <a className="menu-item" href="/CheckIn">
        Check-In Counter 
      </a>

      <a className="menu-item" href="Baggage">
        Baggage Counter
      </a>

      <a className="menu-item" href="/Forecast">
        Forecast
      </a>

      <a className="menu-item" href="/FeedBack">
        Flyer FeedBack
      </a>
    </Menu>
  );
};