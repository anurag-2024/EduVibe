import React,{useState,useEffect} from 'react';
import './styles/Instructor.scss';
import educator from '../assets/instructors/instructor.jpg';
import educator2 from '../assets/instructors/instructor-mobile.jpg';
import { Link } from 'react-router-dom';

const Instructor = () => {
    const [ismobile, setIsmobile] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 768) {
            setIsmobile(true);
        }
    }, []);
    return (
        <div className="instructor-container">
            <img src={ismobile? educator2:educator} alt="Educator" />
            <div className="instructor-content">
                <h1>Come teach with us</h1>
                <p>Become an instructor and change lives — including your own</p>
                <Link to="/signup/instructor">
                <button>Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default Instructor;
