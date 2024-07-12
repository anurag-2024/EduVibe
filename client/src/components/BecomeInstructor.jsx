import React from 'react';
import './styles/Becomeinstructor.scss';
import educator from '../assets/educator.png';
import business from '../assets/business.png';
import { Link } from 'react-router-dom';
const BecomeInstructor = () => {
  return (
    <div className='becomeInstructor'>
      <div className='becomeInstructor-container'>
        <div className='becomeInstructor-container-1'>
          <img src={educator} alt='Educator'/>
          <div className='becomeInstructor-container-1-educator'>
            <h1>Become an Instructor</h1>
            <p>
              Teach what you love. EduVibe gives you the tools to create an online course. 
              Start teaching and earn money. Share your knowledge with a community of eager learners. 
              Develop your own unique teaching style. 
            </p>
            <Link to='/become-instructor'>
            <button className='instructor-button'>APPLY AS INSTRUCTOR</button>
            </Link>
          </div>
        </div>
        <div className='becomeInstructor-container-2'>
          <img src={business} alt='Business'/>
          <div className='becomeInstructor-container-1-business'>
            <h1>Use EduVibe For Business</h1>
            <p>
              Get your team access to 5,000+ top Udemy courses anytime, anywhere. 
              Enhance your employees' skills with the best courses available. 
              Boost productivity and performance through continuous learning.  
            </p>
            <button className='business-button'>GET EDUVIBE FOR BUSINESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeInstructor;
