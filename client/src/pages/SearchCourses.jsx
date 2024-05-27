import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import CourseCard from '../components/subcomponents/CourseCard';
import courses from '../Data/courses';
import './styles/searchCourses.scss';
import filterLogo from '../assets/filter.svg';
import {Link} from 'react-router-dom';
const SearchCourses = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showfilter,setshowfilter]=useState(false);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const coursePage = courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    const data = [
        { title: 'Category', items: ['ALL', 'Development', 'Business', 'IT & Software', 'Design', 'Entrepreneurship', 'Hardware', 'Software & Security', 'Data Science'] },
        { title: 'Level', items: ['ALL', 'Beginner', 'Intermediate', 'Advanced'] },
        { title: 'Price', items: ['ALL', 'Free', 'Under ₹3000', 'Under ₹5000', 'Under ₹10000', 'Under ₹15000', 'Under ₹25000'] },
        { title: 'Rating', items: ['ALL', '5.0', '4.5 & above', '3.5 & above'] },
        { title: 'Duration', items: ['ALL', '1-5 hours', '5-10 hours', '10-20 hours'] }
    ];

    return (
        <div className='search-courses'>
            <div className='search-courses-top'>
                <p>
                    <div className='search-courses-top-heading'>
                        <Link to='/'><span className='home'>Home</span></Link>
                        <span className='breadcrumb'> &gt; </span>
                        <Link to='/search-courses'><span className='home'>Search Courses</span></Link>
                    </div>
                </p>
            </div>
            <div className='search-courses-middle'>
                <div className='search-courses-middle-searchBox'>
                    <CiSearch className='search-icon' />
                    <input type='text' placeholder='Search Course...' className='search-input' />
                    <button className='search-btn'>SEARCH</button>
                </div>
            </div>
            <div className='search-courses-main'>
                 {window.innerWidth < 768 && <div className='filter-logo' onClick={()=>{setshowfilter(!showfilter)}}>
                     <div><img src={filterLogo}/></div>
                 </div>}
                <div className={(showfilter || window.innerWidth>768)?'filters':'filters show'} >
                    <div className='filter-container'>
                        {data.map((filter, index) => (
                            <div key={index} className='filter-container-item'>
                                <h2
                                    className={`accordian-header ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    {filter.title}
                                </h2>
                                <div className={`collapse ${activeAccordion === index ? 'show' : ''}`}>
                                    <div className='accordian-body'>
                                        {filter.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className='accordian-body-item'>
                                                <div className='check-box'>
                                                    <input type='checkbox'/>
                                                    <label>{item}</label>
                                                </div>
                                                <div className='check-details'>5</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='apply-filters'>
                                        <button>
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='results'>
                    <h2>{courses.length} results found</h2>
                    <div className='course-list'>
                        {coursePage.map((course, index) => (
                            <CourseCard id={index} data={course} />
                        ))} 
                    </div>
                    <div className='pagination'>
                        <button className='arrow left' onClick={handlePrevPage} disabled={currentPage === 1}>
                            {'<'}
                        </button>
                        {[...Array(totalPages).keys()].map((page) => (
                            <button
                                key={page + 1}
                                onClick={() => handlePageClick(page + 1)}
                                className={currentPage === page + 1 ? 'active' : ''}
                            >
                                {page + 1}
                            </button>
                        ))}
                        <button className='arrow right' onClick={handleNextPage} disabled={currentPage === totalPages}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCourses;
