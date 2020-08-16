import React from "react";

const Home = () => {
  return (
    <div>
      <ul>
        <li id ="title"><a class="active" href="#home"> <b>Skills</b>
        <b style={{color: "rgb(72, 185, 72)"}}>Marketplace </b> </a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#community">Community</a></li>
        <li id = "login"> <a href="#login">Login</a> </li>
        <li id = "getStarted"><a href="#getStarted"><b>Get Started</b></a></li>
      </ul>
      <hr></hr>
      <h1> Home</h1>

      <div>
        <h2>Hire from our exclusive network of software developers!</h2>
        <p class ="description">Build your next app, eCommerce site, or website with our network of
          software developers. Matched to you and your project needs in under 24 hours </p>
      </div>

      <div class ="enter-email">
        <input type ="email" class ="email-textbox" value="Your email address" autofocus></input>
        <input type="submit" class ="submit-btn"></input>
      </div>

      {/* Testimonalss */}
      <div class ="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial-row">
          <img class = "test-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p class ="test-review">Prow scuttle parrel provost Sail ho shrouds spirits boom 
          mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog 
          yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog 
          black jack gangway rutters.
          </p>
        </div>

        <div class="testimonial-row">
          <img class = "test2-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p class ="test-review">Deadlights jack lad schooner scallywag dance the hempen 
          jig carouser broadside cable strike colors. Bring a spring upon her cable holystone
          blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon
          chase. Belay yo-hoho keelhaul squiﬀy black spot yardarm spyglass sheet transom heave
          to.
          </p>
        </div>  

      </div>
      <h2>We provide services in the following areas</h2>
    </div>
  );
};

export default Home;
