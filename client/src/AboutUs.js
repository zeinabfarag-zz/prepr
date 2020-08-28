import React from "react";
import business from "./Images/business-owner.svg";
import student from "./Images/student.svg";
import together from "./Images/together.svg";
import Navbar from "./Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar/>

            <div>
                <h2>About Us</h2>
                <div className="aboutus-row">
                    <img src={business}/>
                    <p>During these uncertain times, we understand that it can be difficult for businesses.
                        People are staying in to continue social distancing.
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
                        Businesses can transition to an online platform to continue social distancing 
                        with the help of web developers who have been left out-of-work.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;