import React from 'react'
import logo from '../assets/home/logo.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import './styles/footer.scss';
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <>
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <div>
              <img src={logo} />
              <div className='footer-top-left-text'>
              <p>
                EduVibe is a platform that allows you to learn from the best instructors.
                We offer a wide range of courses that will help you grow and develop your skills.
                Our goal is to provide you with the best learning experience possible.
              </p>
              </div>
              <div className='footer-links'>
              <div className='footer-links-logo'> <FaFacebookSquare /></div>
              <div className='footer-links-logo'><IoLogoYoutube /></div>
              <div className='footer-links-logo'> <FaInstagramSquare /></div>
              <div className='footer-links-logo'><FaSquareXTwitter /></div>
              <div className='footer-links-logo'><FaLinkedin /></div>
              </div>
            </div>
          </div>
          <div className='footer-top-right'>
            <div className='footer-top-right-1'>
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Career</li>
                <li>Affiliate</li>
              </ul>
            </div>
            <div className='footer-top-right-2'>
              <h3>Support</h3>
              <ul>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className='footer-top-right-3'>
               <h3>Quick Links</h3>
              <ul>
                <li>Events</li>
                <li>Become a Instructor</li>
                <li>Partnerships</li>
                <li>Get the app </li>
                </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-left'>
            <p>
              © {year} EduVibe. All rights reserved.
            </p>
            <p>
              Designed and Developed by Anurag Patel
            </p>
          </div>
          <div className='footer-bottom-right'>
            <p>
              Go to Top
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
