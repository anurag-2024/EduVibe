import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import '../styles/substyles/instructorCard.scss';

const InstructorCard = ({ data }) => {
  return (
    <>
      <div className="instructor-card">
        <div className="instructor-card-image">
          <img src={data.image} alt={data.name} />
          <div className="instructor-card-icons">
            <FaLinkedin className="icon" />
            <FaSquareXTwitter className="icon" />
            <FaInstagramSquare className="icon" />
            <FaFacebookSquare className="icon" />
            <FaGithubSquare className="icon" />
          </div>
        </div>
        <div className="instructor-card-content">
          <h3>{data.name}</h3>
          <p>{data.subject}</p>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
