import React from 'react';
import './Footer.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-data'>
        <div className='contact-details'>
          <h1>Contact Us</h1>
          <p>Librarian</p>
          <p>Private School</p>
          <p>Kolkata-700119</p>
          <p>West Bengal</p>
          <p>India</p>
          <p style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'mailto:adnansameer400@gmail.com'}>
            <b>Email:</b> adnansameer400@gmail.com
        </p>
        </div>
        <div className='useful-links'>
          <h1>Useful Links</h1>
          <a href='#home'>Link-1</a>
          <a href='#home'>Link-2</a>
          <a href='#home'>Link-3</a>
          <a href='#home'>Link-4</a>
        </div>
        <div className='librarian-details'>
          <h1>Librarian</h1>
          <p>Name: Adnan Sameer</p>
          <p>Education: MSIT</p>
          <p>Contact: +91 9007990854</p>
        </div>
      </div>
      <div className='contact-social'>
        <a href='#home' className='social-icon'>
          <TwitterIcon style={{ fontSize: 40 }} />
        </a>
        <a href='#home' className='social-icon'>
          <LinkedInIcon style={{ fontSize: 40 }} />
        </a>
        <a href='#home' className='social-icon'>
          <TelegramIcon style={{ fontSize: 40 }} />
        </a>
        <a href='#home' className='social-icon'>
          <InstagramIcon style={{ fontSize: 40 }} />
        </a>
      </div>
      <div className='copyright-details'>
        <p className='footer-copyright'>&#169; 2023 copyright all rights reserved</p>
        <span>Designed with ❤️ by Adnan Sameer</span>
      </div>
    </div>
  );
}

export default Footer;
