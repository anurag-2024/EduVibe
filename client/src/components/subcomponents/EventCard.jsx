import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import '../styles/substyles/eventcard.scss';

const EventCard = ({ id, data }) => {
    return (
        <>
            <div className='event'>
                <div className='event-img'>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className='event-middle'>
                    <div className='event-title'>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                <div className='event-bottom'>
                    <div className='event-rating'>
                        <IoLocationSharp/>
                        <p>{data.location}</p>
                    </div>
                    <div className='event-lesson'>
                        <MdOutlineDateRange/>
                        <p>{data.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;
