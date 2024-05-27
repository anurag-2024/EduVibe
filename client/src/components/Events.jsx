import React from 'react'
import Button from './subcomponents/ButtonCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/events.scss'
import  events  from '../Data/events'
import EventCard from './subcomponents/EventCard'
import CustomNextArrow from './subcomponents/CustomNextArrow';
import CustomPrevArrow from './subcomponents/CustomPrevArrow';
const Events = () => {
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
      <div className='events'>
         <div>
            <h2>Latest Events</h2>
         </div>
         <div>
          <Slider {...settings}>
            {events.map((event) => (
              <EventCard key={event.id} data={event} />
            ))}
          </Slider>
         </div>
         <div>
           <Button value='BROWSE ALL EVENTS'/>
         </div>
      </div>
    </>
  )
}

export default Events
