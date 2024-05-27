import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './subcomponents/ButtonCard';
import './styles/categories.scss'
import categories from '../Data/categories';
import CustomNextArrow from './subcomponents/CustomNextArrow';
import CustomPrevArrow from './subcomponents/CustomPrevArrow';
import { Link } from 'react-router-dom';

const Categories = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
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
            <div className='categories'>
                <div>
                    <div>
                        <h1>Browse Course With Top Categories</h1>
                    </div>
                    <div className='slider-container'>
                        <Slider {...settings} className='slider'>
                            {categories.map((category) => (
                                <div className='item' key={category.id}>
                                    <div className='item-icon'>
                                        <img src={category.image} alt=''/>
                                    </div>
                                    <div className='item-text'>
                                        <h6>
                                            {category.name}
                                        </h6>
                                        <p>{category.noOfCourses} courses</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div>
                    <Link to='/search-courses'>
                    <Button value='BROWSE ALL COURSES'/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Categories;
