import React from 'react';
import './styles/hero.scss';
import image1 from '../assets/hero/hero-banner-1.jpg';
import image2 from '../assets/hero/hero-banner-2.jpg';
import image3 from '../assets/hero/hero-shape-2.png';
import image4 from '../assets/hero/hero-contact.svg';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Unlock Knowledge Anywhere, Anytime With Experts.</h1>
        <p>
          Our commitment is to guide you to the finest online courses, offering expert insights whenever and wherever you are.
        </p>
        <div className='buttons'>
          <button className='btn-login'>
          <Link to='/signin'>
          <span>Login <FaArrowRight/></span>
          </Link>
          </button>
          <button className='btn-explore'>
            <Link to='/search-courses'>
            <span>Explore <FaArrowRight/></span>
            </Link> 
          </button>
        </div>
      </div>
      <div className='hero-banner'>
        <div className='hero-banner-1'>
          <img src={image1} alt='hero-banner' />
        </div>
        <div className='hero-banner-2'>
          <img src={image2} alt='hero-banner' />
        </div>
        <div className='hero-shape-2'>
          <img src={image3} alt='hero-banner' />
        </div>
        <div className='hero-contact'>
          <img src={image4} alt='hero-banner' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
