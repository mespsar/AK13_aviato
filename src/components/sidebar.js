import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// Tags to Render On Menu Selection


//href
//href="/Trolley"
//href="/CheckIn"
//href="Baggage"
//href="/FeedBack"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Parking">
        Parking
      </a>

      <a className="menu-item">
        Trolley
      </a>

      <a className="menu-item">
        Check-In Counter 
      </a>

      <a className="menu-item">
        Baggage Counter
      </a>

      <a className="menu-item" href="/Forecast">
        Forecast
      </a>

      <a className="menu-item">
        Flyer FeedBack
      </a>
    </Menu>
  );
};
