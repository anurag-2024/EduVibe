import React from 'react'
import { FaStar } from "react-icons/fa6";
import '../styles/substyles/Reviewcard.scss'
const ReviewCard = ({ data }) => {
  return (
    <>
      <div className='reviewcard'>
        <div className='reviewcard-text'>
          <p>
            {data.review}
          </p>
        </div>
        <div className='reviewcard-bottom'>
          <div className='reviewcard-bottom-left'>
            <div className='reviewcard-bottom-left-img'>
              <img src={data.image} alt='person' />
            </div>
            <div className='reviewcard-bottom-left-text'>
              <h3>{data.name}</h3>
              <p>{data.category}</p>
            </div>
          </div>
          <div className='reviewcard-bottom-right'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewCard
