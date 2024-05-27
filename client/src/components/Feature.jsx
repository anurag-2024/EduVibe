import React from 'react'
import './styles/Feature.scss'
import Button from './subcomponents/ButtonCard'
import feature1 from '../assets/feature/feature1.png'
import feature2 from '../assets/feature/feature2.png'
import feature3 from '../assets/feature/feature3.jpg'
const Feature = () => {
  return (
    <>
        <div className="features">
            <div className="feature__container">
              <div className='feature-content'>
                <div>
                  <h2>
                    EduVibe Simple Learning Steps
                  </h2>
                  <div className='feature-content-text'>
                    <div className='feature-content-text1'>
                      <div>
                        <h1>01.</h1>
                      </div>
                      <div>
                        <h3>Make your Own Place</h3>
                        <p>
                          Create your own place to learn and grow with EduVibe.
                        </p>
                      </div>
                    </div>
                    <div className='feature-content-text2'>
                      <div>
                        <h1>02.</h1>
                      </div>
                      <div>
                        <h3>Find Best Course With Better Filter.</h3>
                        <p>
                          Find the best course for you with better filter options.
                        </p>
                      </div>
                    </div>
                    <div className='feature-content-text3'>
                      <div>
                        <h1>03.</h1>
                      </div>
                      <div>
                        <h3>And Become a Master in Your Field.</h3>
                        <p>
                          Learn and become a master in your field with EduVibe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='button'>
                    <Button value='START LEARNING'/>
                  </div>
                </div>
              </div>
              <div className='feature-img'>
                <img src={feature3} alt='' className='image1'/>
                <img src={feature2} alt='' className='image2'/>
                <img src={feature1} alt='' className='image3'/>
              </div>
            </div>
        </div>
    </>
  )
}

export default Feature
