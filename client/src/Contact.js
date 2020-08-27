import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <form action="mailto:SkillsMarketPlace.org" method="post">
        <h1>Contact SkillsMarketPlace</h1>
        <p>
          Interested about our services? Contact us today! We are here to help,
          email us at info@SkillsMarketPlace.org or us the form below to get in
          touch.
        </p>
        <hr />
        <input type="text" placeholder="What's your name?"></input>
        <br></br>
        <input type="text" placeholder="What's your email?"></input>
        <br></br>
        <textarea rows="4" cols="50"></textarea>
        <br></br>
        {/* <input type="submit" className="submit-btn" value="Submit"/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;