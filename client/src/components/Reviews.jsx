import React from 'react'
import './styles/Reviews.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {reviews,logos} from '../Data/reviews'
import ReviewCard from './subcomponents/ReviewCard'
const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
    var setting = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
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
            <div className='review'>
                <div>
                    <h1>What Our Students Says About Our Services</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {reviews.map((data, index) => {
                            return <ReviewCard key={index} data={data} />
                        })}
                    </Slider>
                </div>
                <div className='review-text'>
                    <h1>Over 30,000+ Schools & College Learning With Us.</h1>
                    <p>Join the community of over 30,000+ schools and colleges learning with us.
                        We offer a wide range of courses that will help you achieve your goals.
                        Whether you are looking to learn something new or improve your skills,
                        we have the right course for you. Our courses are designed to be flexible
                        and convenient, so you can learn at your own pace and on your own schedule.
                        Join us today and start learning!</p>
                </div>
                <div>
                    <Slider {...setting}>
                        {logos.map((logo) => {
                            return <div className='review-logo'>
                                <img src={logo} />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Reviews;
