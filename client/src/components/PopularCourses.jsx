import React, { useState } from 'react';
import './styles/popularcourses.scss';
import courses from '../Data/courses';
import CourseCard from './subcomponents/CourseCard';
import Button from './subcomponents/ButtonCard';
import { Link } from 'react-router-dom';
const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Design', 'Development', 'Business', 'IT & Software'];

  const filteredCourses = activeTab === 'All'
    ? courses
    : courses.filter(course => course.category === activeTab);

  return (
    <div className="popular-courses">
      <div className='popular'>
        <div className="header">
          <h2>Our Popular Courses</h2>
          <div className="tabs">
            {categories.map(category => (
              <button
                key={category}
                className={activeTab === category ? 'active ' : ''}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="courses">
          {filteredCourses.map((course, index) => (
            <CourseCard id={index} data={course} />
          ))}
        </div>
        <div className='allcourses'>
          <Link to='/search-courses'>
            <Button value='BROWSE ALL COURSES' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
