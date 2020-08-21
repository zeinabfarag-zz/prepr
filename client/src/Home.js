import React from "react";
import styling from "./css/base-styling.css";
import website1 from "./Images/website1.png";
import website2 from "./Images/website2.png";
import website3 from "./Images/website3.png";
import website4 from "./Images/website4.png";
import website5 from "./Images/website5.png";
import website6 from "./Images/website6.png";
import website7 from "./Images/website7.png";
import website8 from "./Images/website8.png";
import ecommerce from "./Images/ecommerce.svg";
import laptop from "./Images/laptop.svg";
import responsive from "./Images/responsive-design.svg";
import shopify from "./Images/shopify.svg";
import wordpress from "./Images/wordpress.svg";
import woocommerce from "./Images/woocommerce.svg";



const Home = () => {
  return (
    <div>
      <ul>
        <li id="title"><a class="active" href="#home"> <b>Skills</b>
          <b style={{ color: "rgb(72, 185, 72)" }}>Marketplace </b> </a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#community">Community</a></li>
        <li id="login"> <a href="#login">Login</a> </li>
        <li id="getStarted"><a href="#getStarted"><b>Get Started</b></a></li>
      </ul>

      <div>
        <h2>Hire from our exclusive network of software developers!</h2>
        <p class="description">Build your next app, eCommerce site, or website with our network of
          software developers. Matched to you and your project needs in under 24 hours </p>
      </div>

      <div class="enter-email">
        <input type="email" class="email-textbox" value="Your email address" autofocus></input>
        <input type="submit" class="submit-btn"></input>
      </div>

      <div class="website-container">
        <img class="website1" src={website1} alt="thumbnail of landing page" />
        <img class="website2" src={website2} alt="thumbnail of landing page" />
        <img class="website3" src={website3} alt="thumbnail of landing page" />
        <img class="website4" src={website4} alt="thumbnail of landing page" />
        <img class="website5" src={website5} alt="thumbnail of landing page" />
        <img class="website6" src={website6} alt="thumbnail of landing page" />
        <img class="website7" src={website7} alt="thumbnail of landing page" />
        <img class="website8" src={website8} alt="thumbnail of landing page" />
      </div>

      {/* Testimonals */}
      <div class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial-row">
          <img class="test-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p class="test-review">Prow scuttle parrel provost Sail ho shrouds spirits boom
          mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
          yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog
          black jack gangway rutters.
          </p>
        </div>

        <div class="testimonial-row">
          <img class="test2-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p class="test-review">Deadlights jack lad schooner scallywag dance the hempen
          jig carouser broadside cable strike colors. Bring a spring upon her cable holystone
          blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon
          chase. Belay yo-hoho keelhaul squiﬀy black spot yardarm spyglass sheet transom heave
          to.
          </p>
        </div>

      </div>
      <div>
        <h2>Hire the right software developer today</h2>
        <p class="description">Whether you’re building and app, and eCommerce store, or a website or need a hand from an experienced web developer. Tell us what you’re working on and your budget and you can get matched with a member of our network of developers and designers in under 24 hours.</p>
      </div>

      <div>
        <h2>We provide services in the following areas</h2>
        <div class="icon-container">
          <div class="icon">
            <img class="ecommerce" src={ecommerce} alt="shopping cart" />
            <p class="service-description">Ecommerce</p>
          </div>

          <div class="icon">
            <img class="laptop" src={laptop} alt="laptop" />
            <p class="service-description">Custom Development</p>
          </div>

          <div class="icon">
            <img class="responsive" src={responsive} alt="responsive design icon" />
            <p class="service-description">Responsive Design</p>
          </div>

          <div class="icon">
            <img class="shopify" src={shopify} alt="shopify logo" />
            <p class="service-description">Shopify Development</p>
          </div>

          <div class="icon">
            <img class="wordpress" src={wordpress} alt="wordpress logo" />
            <p class="service-description">Wordpress Development</p>
          </div>

          <div class="icon">
            <img class="woocommerce" src={woocommerce} alt="woocommerce" />
            <p class="service-description">Woo Commerce</p>
          </div>
        </div>
      </div>

      <div class="enter-email">
        <input type="email" class="email-textbox" value="Your email address" autofocus></input>
        <input type="submit" class="submit-btn"></input>
      </div>

      <div class="about-us">
        <h2>About Us</h2>
        <p class="text">Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>

      </div>

      <div class="footer">

        <p id="title"><a class="active" href="#home"> <b>Skills</b>
          <b style={{ color: "rgb(72, 185, 72)" }}>Marketplace </b></a>
        </p>

        <ul class="list">
          <li>Our Team</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Project Projection</li>
          <li>Press Kit</li>
          <li>FAQs</li>
        </ul>

        <ul class="list">
          <li>Labs</li>
          <li>Moodboard</li>
          <li>How to Build An Online Business</li>
          <li>Contact Us</li>
        </ul>

      </div>
      <p class="copyright">Copyright 2020</p>
    </div>
  );
};

export default Home;
