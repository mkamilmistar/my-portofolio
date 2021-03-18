import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdHealing } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdHealing className='navbar-icon' />
              MK
            </Link>
          </div>
          <small className='website-rights'>
              <div className="powered">
                Powered By React.js
              </div>
              <div className="by">
                Copyright © M Kamil 2021
              </div>
          </small>
          <div className='social-icons'>
            <Link
              to={'//www.facebook.com/v.kamil7'}
              className='social-icon-link'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              to={'//www.instagram.com/projectanemil'}
              className='social-icon-link'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              to={'//www.twitter.com/mkamilmistar'}
              className='social-icon-link'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              to={'//id.linkedin.com/in/mkamilmistar'}
              className='social-icon-link'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;