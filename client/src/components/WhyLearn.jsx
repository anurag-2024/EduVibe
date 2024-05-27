import React from 'react'
import './styles/whylearn.scss'
import { LuBookOpen } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
const WhyLearn = () => {
    return (
        <>
            <div className='feature'>
                <div className='feature-top'>
                    <h2>Why Learn With Us?</h2>
                    <p>Our mission is to help you learn your favorite skills faster and easier. We offer a wide range of courses to help you achieve your goals.</p>
                </div>
                <div className='feature-cards'>
                    <div className='feature-card'>
                        <div className='icon1'>
                            <div className='icon-1'>
                                <LuBookOpen />
                            </div>
                        </div>
                        <div>
                            <h1>250k Online Course</h1>
                            <p>We offer a wide range of courses to help you achieve your goals. Our courses are designed to help you learn your favorite skills faster and easier.</p>
                        </div>
                    </div>
                    <div className='feature-card'>
                        <div className='icon2'>
                            <div className='icon-2'>
                                <RiGroupLine />
                            </div>
                        </div>
                        <div>
                            <h1>Expert Instructors</h1>
                            <p>Our instructors are experts in their fields. They have years of experience and are passionate about teaching. They are dedicated to helping you learn your favorite skills.</p>
                        </div>
                    </div>
                    <div className='feature-card'>
                        <div className='icon3'>
                            <div className='icon-3'>
                                <FaRegClock />
                            </div>
                        </div>
                        <div>
                            <h1>LifeTime Access</h1>
                            <p>Once you enroll in a course, you get lifetime access to it. You can learn at your own pace and revisit the course whenever you want. You can also access the course on any device.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyLearn
