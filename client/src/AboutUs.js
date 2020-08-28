import React from "react";
import business from "./Images/business-owner.svg";
import student from "./Images/student.svg";
import together from "./Images/together.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Styles/AboutUs.css";


const AboutUs = () => {
    return (
        <div>
            <Navbar/>

            <div className="aboutus">
                <h2>About Us</h2>
                <div className="aboutus-row">
                    <img src={business}/>
                    <p>During these uncertain times, we understand that it can be difficult for businesses.
                        Stores are closed and people are staying in to continue social distancing.
                    </p>
                </div>
                <div className="aboutus-row">
                    <img src={student}/>
                    <p>We also understand that it would be difficult for students and recent graduates.
                        Internships are getting cancelled and companies have stopped hiring.
                    </p>
                </div> 
                <div className="aboutus-row">
                    <img src={together}/>
                    <p>So why not have the both of them help eachother?
                        <br/>Businesses can transition to an online platform to continue social distancing 
                        with the help of web developers who have been left out-of-work.
                        Skills Marketplace aims to match business owners to the right developer so they
                        can get their eCommerce platform up and running in no time.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;