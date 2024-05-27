import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructorCard from './subcomponents/InstructorCard';
import './styles/instructor.scss'
import instructors from '../Data/instructors';
import CustomPrevArrow from './subcomponents/CustomPrevArrow';
import CustomNextArrow from './subcomponents/CustomNextArrow';
const Instructor = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
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
            <div className="instructor">
                <div className="instructor-header">
                    <h2>Meet Our Best Instructor</h2>
                </div>
                <Slider {...settings}>
                    {instructors.map((instructor, index) => (
                        <InstructorCard id={index} data={instructor} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Instructor
