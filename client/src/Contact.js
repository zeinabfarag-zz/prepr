import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Contact = () => {
  return (
<div>
<NavBar/>    
<div className="contact-container">
      <form action="mailto:SkillsMarketPlace.org" method="post" enctype="text/plain">
        <h1>Contact Us</h1>
        <p>
          Interested about our services? Contact us today! We are here to help,
          email us at info@SkillsMarketPlace.org or us the form below to get in
          touch.
        </p>
        <hr />
        <input type="text" name="yourName" placeholder=" Name *"></input>
        <br></br>
        <input type="text" name="yourEmail" placeholder="Email *"></input>
        <br/>
        <textarea name="yourMessage" rows="7" cols="100" placeholder="Message *"></textarea>
        <br></br>
        <button class="submit-btn" type="submit">Submit</button>
      </form>
    </div>
<Footer/>
</div>
  );
};

export default Contact;
