import React from 'react';
import './WelcomeBox.css';

function WelcomeBox() {
  return (
    <div className='welcome-box'>
      <p className='welcome-title'>EXPLORE THE BOOKSHELVES</p>
      <p className='welcome-message'>Expand Your Horizons<br />
        <span className='welcome-submessage'>Discover a World of Stories</span>
      </p>
    </div>
  );
}

export default WelcomeBox;
