import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container" id="experience">
      <div className="experience-container">
        <div className="con-wrapper">
          <div className="h1">
            <h1>EXPERIENCE</h1>
          </div>
          <div className="xperience">
            <div
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h2>
              Frontend Web Developer, InternPulse- Remote 
                <span>(JUNE - AUGUST  2024) </span>
              </h2>
              <span>Lagos, Nigeria</span>
            </div>

            <div>
              <ul>
                <li>
                Contributed to the development of a family account management app designed to simplify and streamline the management of financial resources for families.

                </li>
                <li>
                Developed responsive user interfaces for web applications using HTML, Tailwind  CSS, and React
                </li>
                <li>
                  Worked closely with designers to develop visually appealing
                  and user-friendly websites.
                </li>
                <li>
                  Collaborated with the back-end team to integrate front-end
                  components with server-side technologies.
                </li>
              </ul>
            </div>
          </div>
          <div className="xperience">
            <div
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h2>
              Frontend Web Developer, Elva Technologies- Remote 
                <span>(JULY 2024 - JANUARY  2025) </span>
              </h2>
              <span>Lagos, Nigeria</span>
            </div>

            <div>
              <ul>
                <li>
                Developed and optimized reusable UI components using React and Tailwind CSS.

                </li>
                <li>
                	Collaborated with the team on GitHub, contributing to feature development, bug fixes, and improvements.
                </li>
                <li>
                	Participated in code reviews, providing feedback and suggestions to improve code quality and maintainability.
                </li>
                <li>
                Worked with modern frontend tools and technologies, ensuring scalable and efficient implementations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
