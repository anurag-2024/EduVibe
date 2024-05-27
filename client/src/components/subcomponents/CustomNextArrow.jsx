import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-3rem' }}
      onClick={onClick}
    >
      <FaChevronRight style={{ color: '#333', fontSize: '2rem' }} />
    </div>
  );
};

export default CustomNextArrow;
