import React, { useState } from 'react';
import logo from "../assets/home/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import './styles/header.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 548);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const closeSearch = () => {
        setSearchOpen(false);
    };

    return (
        <>
            {searchOpen && (
                <div className="search-overlay">
                    <ImCross className='cross' onClick={closeSearch} />
                    <div className="search-box">
                        <input type="text" placeholder="What courses do you want..." />
                        <button onClick={closeSearch}><p className='head-search'>Search</p></button>
                    </div>
                </div>
            )}
            <div className='head'>
                <div className='header ml-2 mr-4 flex'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='' />
                        </Link>
                    </div>
                    {isMobile ? (
                        <>
                            <div className='menu' onClick={toggleMenu}>
                                <IoMenu />
                            </div>
                            {menuOpen && (
                                <div className='dropdown-menu'>
                                    <ul className='flex' onClick={closeMenu}>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><a>About</a></li>
                                        <li><a>Explore</a></li>
                                        <li><a>Events</a></li>
                                        <li><a>Contact</a></li>
                                        <li><Link to='/search-courses'>My Courses</Link></li>
                                        <li><Link>My Cart</Link></li>
                                        <li><Link to='/signin'>Login</Link></li>
                                        <li><a>Sign Up</a></li>
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <nav className='flex'>
                                <ul className='flex'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><a>About</a></li>
                                    <li><Link to='/search-courses'>Explore</Link></li>
                                    <li><a>Events</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </nav>
                            <div className='right flex'>
                                <div className='search' onClick={toggleSearch}>
                                    <CiSearch />
                                </div>
                                <div className='mycourses'>
                                    <FaBookReader />
                                </div>
                                <div className='cart'>
                                    <IoCartOutline />
                                </div>
                                <Link to='signin'><button className='btn btn-login'>Login</button></Link>
                                <button className='btn btn-signup'>Sign Up</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
