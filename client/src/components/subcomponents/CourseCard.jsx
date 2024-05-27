import React from 'react';
import { FaRegStar, FaEye, FaRegClock } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";
import '../styles/substyles/coursecard.scss';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, data }) => {
    const discountPercentage = Math.round(((data.pricebefore - data.priceafter) / data.pricebefore) * 100);
    return (
        <>
            <Link to={`/course-detail/${id}`}>
                <div className='card'>
                    {discountPercentage > 0 && (
                        <div className="discount-sticker">
                            {discountPercentage}% OFF
                        </div>
                    )}
                    <div className='card-img'>
                        <img src={data?.image} alt={data.title} />
                    </div>
                    <div className='card-middle'>
                        <div className='card-title'>
                            <h3>{data?.title}</h3>
                        </div>
                        <div className='card-info'>
                            <div className='card-info-left'>
                                <img src={data?.tutorImg} alt={data?.tutor} />
                                <p>{data?.tutor}</p>
                            </div>
                            <div className='card-info-right'>
                                <p>&#8377;{data?.priceafter?.toFixed(2)}</p>
                                <p>&#8377;{data?.pricebefore?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-bottom'>
                        <div className='card-rating'>
                            <FaRegStar />
                            <p>{data?.rating}</p>
                        </div>
                        <div className='card-student'>
                            <FaEye />
                            <p>{data?.noOfStudents}</p>
                        </div>
                        <div className='card-lesson'>
                            <LuBookOpen />
                            <p>{data?.lessons} Lessons</p>
                        </div>
                        <div className='card-clock'>
                            <FaRegClock />
                            <p>{data?.duration} Hours</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CourseCard;
