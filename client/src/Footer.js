import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">

        <p className="title"><a className="active" href="#home"> <b>Skills</b>
          <b style={{ color: "rgb(72, 185, 72)" }}>Marketplace </b></a>
        </p>

        <ul className="list">
          <li>Our Team</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Project Projection</li>
          <li>Press Kit</li>
          <li>FAQs</li>
        </ul>

        <ul className="list">
          <li>Labs</li>
          <li>Moodboard</li>
          <li>How to Build An Online Business</li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

      </div>
    );
}

export default Footer;
