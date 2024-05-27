import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-3rem' }}
      onClick={onClick}
    >
      <FaChevronLeft style={{ color: '#333', fontSize: '2rem' }} />
    </div>
  );
};

export default CustomPrevArrow;
