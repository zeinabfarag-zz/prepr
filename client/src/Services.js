import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Styles/Services.css";

const Services = () => {
    return (
      <div>
        <Navbar />
        <div className="services">
          <h2>Web Design and Development</h2>
        </div>
        <div className="features-container">
          <div class="row">
            <div class="col-lg-4">
              <i class="feature-icon fas fa-lightbulb"></i>
              <h4>Step 1</h4>
              <h3>Choose solution</h3>
              <p>Explain business model and discuss layout of the site.</p>
            </div>

            <div class="col-lg-4">
              <i class="feature-icon fas fa-palette"></i>
              <h4>Step 2</h4>
              <h3>Design</h3>
              <p>Create wireframes and mockups.</p>
            </div>

            <div class="col-lg-4">
              <i class="feature-icon fas fa-file-code"></i>
              <h4>Step 3</h4>
              <h3>Development</h3>
              <p>Develop the website with functionalities based on mockups.</p>
            </div>

            <div class="col-lg-4">
              <i class="feature-icon fas fa-rocket"></i>
              <h4>Step 4</h4>
              <h3>Launch</h3>
              <p>Launch the site (with google analytics).</p>
            </div>

            <div class="col-lg-4 eval">
              <i class="feature-icon fas fa-check-circle"></i>
              <h4>Step 5</h4>
              <h3>Evaluate</h3>
              <p>Evaluate the sites performance and improve if needed.</p>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Services;