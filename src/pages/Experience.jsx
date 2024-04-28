import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <div className="experience-container">
        <div className="h1">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="xperience">
          <div data-aos="flip-up" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <h2>
              FrontEnd Web Developer, PassPoint Technologies 
              <span> (January 2024- present)</span>
            </h2>
            <span>Lagos, Nigeria</span>
          </div>

          <div>
            <ul>
              <li>
                Developed responsive user interfaces for web applications using
                HTML, CSS, and JavaScript.
              </li>
              <li>
                Implemented responsive designs and optimized UI/UX for mobile
                devices resulting in a 30% reduction in load time.
              </li>
              <li>
                Collaborated with the marketing team to implement conversion
                tracking and A/B testing for landing pages.
              </li>
              <li>
                Contributed to the development of a responsive web app,
                enhancing user engagement and accessibility.
              </li>
              <li>
                Worked closely with designers to develop visually appealing and
                user-friendly websites.{" "}
              </li>
              <li>
                Collaborated with the back-end team to integrate front-end
                components with server-side technologies.
              </li>

              <li>
                Contributed to the development of a content management system,
                empowering clients to manage website content easily.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
