import React, { useEffect, useState } from 'react'
import './styles/course-details.scss'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar, FaEye, FaRegClock } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaRegFilePowerpoint } from "react-icons/fa6";
import { BsFileEarmarkBreak } from "react-icons/bs";
import { GoDeviceDesktop } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import courses from '../Data/courses'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import relatedCourses from '../Data/relatedCourses';
import CourseCard from '../components/subcomponents/CourseCard';
import CustomNextArrow from '../components/subcomponents/CustomNextArrow';
import CustomPrevArrow from '../components/subcomponents/CustomPrevArrow';
const CourseDetails = () => {
    const { id } = useParams();
    const [expandedSections, setExpandedSections] = useState({});
    const [activeTab, setactiveTab] = useState('overview');
    const course = courses.find(course => course.id === Number(id) + 1);
    const videos = ['Get Started', 'The Project Brief', 'Low Fidelity Wireframes'];
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="course-details">
                <div className="course-details__header">
                    <div className='course-details__header-content'>
                        <div className='course-details__header-upper'>
                            <Link to='/'><span className='home'>Home</span></Link>
                            <span className='breadcrumb'> &gt; </span>
                            <Link to='/search-courses'><span className='home'>Search Courses</span></Link>
                            <span className='breadcrumb'> &gt; </span>
                            <Link to={`/course-detail/${id}`}><span className='home'>{course?.title}</span></Link>
                        </div>
                        <div className='course-details__header-main'>
                            <div className='course-details__header-main-left'>
                                <h2>
                                    {course?.title}
                                </h2>
                                <div className='course-teacher'>
                                    <div className='course-teacher-img'>
                                        <img src={course?.tutorImg} />
                                    </div>
                                    <div className='course-teacher-name'>
                                        <h2>Created By</h2>
                                        <p>
                                            {course?.tutor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-details__header-main-right'>
                                <div className='course-details__header-main-right-container'>
                                    <div className='course-details__header-main-right-container-top'>
                                        <div className='course-details__header-main-right-container-top-left'>
                                            <FaRegStar />
                                            <p> {course?.rating} Star (2,34,567) </p>
                                        </div>
                                        <div className='course-details__header-main-right-container-top-right'>
                                            <FaRegClock />
                                            <p>{course?.duration} Hours</p>
                                        </div>
                                    </div>
                                    <div className='course-details__header-main-right-container-bottom'>
                                        <div className='course-details__header-main-right-container-bottom-left'>
                                            <FaEye />
                                            <p>{course?.noOfStudents} Enrolled</p>
                                        </div>
                                        <div className='course-details__header-main-right-container-bottom-right'>
                                            <LuBookOpen />
                                            <p>{course?.lessons} Lessons</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-details__content">
                    <div className='course-details__content-left'>
                        <div className='course-details__content-left-image'>
                            <img src={course?.image} />
                        </div>
                        <ul className='course-details__content-left-text-listItems'>
                            <div className='course-details__content-left-text-listItems-underline'>
                                <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => { setactiveTab('overview') }}>Overview</li>
                                <li className={activeTab === 'curriculum' ? 'active' : ''} onClick={() => { setactiveTab('curriculum') }}>Curriculum</li>
                                <li className={activeTab === 'instructor' ? 'active' : ''}
                                    onClick={() => { setactiveTab('instructor') }}>Instructor</li>
                                <li className={activeTab === 'review' ? 'active' : ''} onClick={() => { setactiveTab('review') }}>Review</li>
                            </div>
                        </ul>
                        <div className='course-details__content-left-text-desc'>
                            {activeTab === 'overview' && (
                                <div className='overview'>
                                    <div>
                                        <h2>Description</h2>
                                        <p>Dive into the world of web development with a comprehensive bootcamp covering both front-end and back-end technologies. From HTML and CSS to server-side scripting, this course will equip you with the skills to build dynamic and interactive web applications.</p>
                                    </div>
                                    <div>
                                        <h2>Requirements</h2>
                                        <p>Basic understanding of HTML and CSS; familiarity with programming concepts is beneficial but not required.</p>
                                    </div>
                                    <div>
                                        <h2>Who This Course is For</h2>
                                        <p>Dive into the world of web development with a comprehensive bootcamp covering both front-end and back-end technologies. From HTML and CSS to server-side scripting, this course will equip you with the skills to build dynamic and interactive web applications.</p>
                                    </div>
                                    <div>
                                        <h2>What You Will be Learn</h2>
                                        <p>Dive into the world of web development with a comprehensive bootcamp covering both front-end and back-end technologies. From HTML and CSS to server-side scripting, this course will equip you with the skills to build dynamic and interactive web applications.</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'curriculum' && (
                                <div className='curriculum'>
                                    {videos.map((section, index) => (
                                        <div key={index} className='curriculum-section'>
                                            <div className='curriculum-container' onClick={() => toggleSection(section)}>
                                                <div className='curriculum-container-left'>
                                                    <p><span><FaAngleDown /></span> <span>{section}</span></p>
                                                </div>
                                                <div className='curriculum-container-right'>
                                                    <div className='curriculum-container-right-lesson'>
                                                        <LuBookOpen className='green-icon' />
                                                        <p>4 Lesson</p>
                                                    </div>
                                                    <div className='curriculum-container-right-hours'>
                                                        <FaRegClock className='yellow-icon' />
                                                        <p> 3H 13M</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {expandedSections[section] && (
                                                <div className='curriculum-container-videos'>
                                                    <div className='video-container'>
                                                        {Array(3)
                                                            .fill(0)
                                                            .map((_, videoIndex) => (

                                                                <div key={videoIndex} className='curriculum-container-video'>
                                                                    <div className='curriculum-container-video-left'>
                                                                        <FaRegPlayCircle />
                                                                        <p>1. Introduction to Web Development</p>
                                                                    </div>
                                                                    <div className='curriculum-container-video-right'>
                                                                        <div>12:34</div>
                                                                        <div>
                                                                            <IoLockClosedOutline />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'instructor' && (
                                <div className='instructor'>
                                    <div className='instructor-top'>
                                        <div className='instructor-img'>
                                            <img src={course?.tutorImg} />
                                        </div>
                                        <div className='instructor-top-name'>
                                            <div className='instructor-top-name-text'>
                                                <h1>
                                                    {course?.tutor}
                                                </h1>
                                                <p>Animation Expert</p>
                                            </div>
                                            <div className='instructor-top-name-bottom'>
                                                <div className='instructor-top-name-bottom-top'>
                                                    <div className='icon-red'><FaRegStar /></div>
                                                    <p>4.9 Star Rating</p>
                                                </div>
                                                <div className='instructor-top-name-bottom-down'>
                                                    <div className='icon-green'><LuBookOpen /></div>
                                                    <p>5 courses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='instructor-bottom'>
                                        <h2>
                                            2D Animation and Short Video Ads Specialist
                                        </h2>
                                        <p>Thouhid is an Animation Expert and Video/Graphics Instructor known for her innovative approach to storytelling through animation. With a background in both 2D and 3D animation, Emily guides students through the world of visual storytelling, helping them unleash their creative potential.</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'review' && (
                                <div className='review'>
                                    <div className='review-top'>
                                        <div className='review-top-left'>
                                            <h2>4.6</h2>
                                            <div>
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                                <FaRegStar />
                                            </div>
                                            <p>Course Rating</p>
                                        </div>
                                        <div className='review-top-right'>
                                            <div className='review-top-right-box'>
                                                <div>
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </div>
                                                <div className='review-top-right-line'>
                                                </div>
                                                <div>59%</div>
                                            </div>
                                            <div className='review-top-right-box'>
                                                <div>
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </div>
                                                <div className='review-top-right-line'>
                                                </div>
                                                <div>20%</div>
                                            </div>
                                            <div className='review-top-right-box'>
                                                <div>
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </div>
                                                <div className='review-top-right-line'>
                                                </div>
                                                <div>5%</div>
                                            </div>
                                            <div className='review-top-right-box'>
                                                <div>
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </div>
                                                <div className='review-top-right-line'>
                                                </div>
                                                <div>2%</div>
                                            </div>
                                            <div className='review-top-right-box'>
                                                <div>
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                    <FaRegStar />
                                                </div>
                                                <div className='review-top-right-line'>
                                                </div>
                                                <div>1%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='review-main'>
                                        <div className='review-main-top'>
                                            <div className='review-main-top-left'>
                                                <p>Students Feedback <span>(56,789)</span></p>
                                            </div>
                                            <div className='review-main-top-right'>
                                                <p>Sort By:</p>
                                                <span>All Rating <FaCaretDown /></span>
                                            </div>
                                        </div>
                                        <div className='review-main-middle'>
                                            <div className='review-main-middle-box'>
                                                <div className='review-main-middle-box-top'>
                                                    <div className='review-main-middle-box-top-name'>
                                                        <div>
                                                            <img src={course?.tutorImg} />
                                                        </div>
                                                        <div className='review-main-middle-box-top-name-text'>
                                                            <h3>Harry Pinsky</h3>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                    </div>
                                                    <div className='review-main-middle-box-top-stars'>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                </div>
                                                <div className='review-main-middle-box-bottom'>
                                                    <p>Aliquam eget leo quis neque molestie dictum. Etiam ut tortor tempor, vestibulum ante non, vulputate nibh. Cras non molestie diam. Great Course for Beginner </p>
                                                </div>
                                            </div>
                                            <div className='review-main-middle-box'>
                                                <div className='review-main-middle-box-top'>
                                                    <div className='review-main-middle-box-top-name'>
                                                        <div>
                                                            <img src={course?.tutorImg} />
                                                        </div>
                                                        <div className='review-main-middle-box-top-name-text'>
                                                            <h3>Harry Pinsky</h3>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                    </div>
                                                    <div className='review-main-middle-box-top-stars'>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                </div>
                                                <div className='review-main-middle-box-bottom'>
                                                    <p>Aliquam eget leo quis neque molestie dictum. Etiam ut tortor tempor, vestibulum ante non, vulputate nibh. Cras non molestie diam. Great Course for Beginner </p>
                                                </div>
                                            </div>
                                            <div className='review-main-middle-box'>
                                                <div className='review-main-middle-box-top'>
                                                    <div className='review-main-middle-box-top-name'>
                                                        <div>
                                                            <img src={course?.tutorImg} />
                                                        </div>
                                                        <div className='review-main-middle-box-top-name-text'>
                                                            <h3>Harry Pinsky</h3>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                    </div>
                                                    <div className='review-main-middle-box-top-stars'>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                </div>
                                                <div className='review-main-middle-box-bottom'>
                                                    <p>Aliquam eget leo quis neque molestie dictum. Etiam ut tortor tempor, vestibulum ante non, vulputate nibh. Cras non molestie diam. Great Course for Beginner </p>
                                                </div>
                                            </div>
                                            <div className='review-main-middle-box'>
                                                <div className='review-main-middle-box-top'>
                                                    <div className='review-main-middle-box-top-name'>
                                                        <div>
                                                            <img src={course?.tutorImg} />
                                                        </div>
                                                        <div className='review-main-middle-box-top-name-text'>
                                                            <h3>Harry Pinsky</h3>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                    </div>
                                                    <div className='review-main-middle-box-top-stars'>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                </div>
                                                <div className='review-main-middle-box-bottom'>
                                                    <p>Aliquam eget leo quis neque molestie dictum. Etiam ut tortor tempor, vestibulum ante non, vulputate nibh. Cras non molestie diam. Great Course for Beginner </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='review-button'>
                                            <button>
                                                LOAD MORE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='course-details__content-right'>
                        <div className='cart'>
                            <div className='cart-price'>
                                <div className='cart-price-current'>
                                    <h3>&#8377; {course?.priceafter + ".00"}</h3>
                                    <p>&#8377; {course?.pricebefore + ".00"}</p>
                                </div>
                                <div className='cart-price-discount'>
                                    <p>{Math.round(((course.pricebefore - course.priceafter) / course.pricebefore) * 100)}% off</p>
                                </div>
                            </div>
                            <div className='cart-buttons'>
                                <p className='time-left'>
                                    <span>5 hours</span> to remaining this price
                                </p>
                                <button className='add-to-cart'>ADD TO CART</button>
                                <button className='buy-now'>BUY NOW</button>
                            </div>
                            <div className='cart-details'>
                                <h4>This course includes:</h4>
                                <ul>
                                    <li>
                                        <span>
                                            <RiMoneyRupeeCircleLine />
                                        </span>
                                        <p>Full Lifetime Access</p>
                                    </li>
                                    <li>
                                        <span>
                                            <FaRegClock />
                                        </span>
                                        <p>30 Days Money Back Guarantee</p>
                                    </li>
                                    <li>
                                        <span>
                                            <FaRegFilePowerpoint />
                                        </span>
                                        <p>Free Exercises File</p>
                                    </li>
                                    <li>
                                        <span>
                                            <GoDeviceDesktop />
                                        </span>
                                        <p>Access on Mobile , Tablet and TV</p>
                                    </li>
                                    <li>
                                        <span>
                                            <BsFileEarmarkBreak />
                                        </span>
                                        <p>Certificate of Completion</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='cart-share'>
                                <h2>Share This Course</h2>
                                <ul>
                                    <li>
                                        <FaInstagramSquare />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <FaFacebookSquare />
                                    </li>
                                    <li>
                                        <IoLogoYoutube />
                                    </li>
                                    <li>
                                        <FaSquareXTwitter />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-details__footer">
                    <div className='courses'>
                        <div>
                            <h2>Related Course</h2>
                        </div>
                        <div>
                            <Slider {...settings}>
                                {relatedCourses.map((course,index) => (
                                    <CourseCard id={index} data={course} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetails
