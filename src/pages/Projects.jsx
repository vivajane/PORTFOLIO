import React from "react";
import { SiVercel } from "react-icons/si";
import logo from "../images/react-quiz-app.png";
import agro from "../images/agr.png";
import cart from "../images/cart.png";
import task from "../images/taskmanager.png";
import todo from "../images/todolist.png";
import vivys from "../images/vivysfashion.png";
import elva from "../images/elva.png";
// import safe from "../images/safe.png";
import safe from "../images/mini.png";

// import port from "../images/portimg.png"
import "./Projects.css";

// import { FaLinkedin } from "react-icons/fa";
// {/* <SiVercel />
// <FaLinkedin /> */}

const Projects = () => {
  return (
    <div className="container" id="project">
      <div className="project-content">
        <div className="project-wrapper">
          <div className="project-container">
            <h4 className="my">MY PROJECTS</h4>
          </div>
          <div className="project">
            <div
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={agro} alt="" />
              </div>
              <div className="agroweb">
                <h2>AGRO WEBSITE</h2>
                <div>
                  <a
                    href="https://agrolink-wheat.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>

              <p>
                This is a website that serves as a digital marketplace ,
                empowering farmers to showcase their products directly to
                consumers with any middleman.
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={vivys} alt="todo" />
              </div>
              <div className="agroweb">
                <h2>VIVY'S FASHION</h2>
                <div>
                  <a
                    href="https://vivys-fashion-house.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      {" "}
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>
              <p>
                This is a fashion website where users get to see list of displayed proudct, add to cart and view cart.
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={elva} alt="todo" />
              </div>
              <div className="agroweb">
                <h2>PROJECT-ELVA</h2>
                <div>
                  <a
                    href="https://elva-project-9ibi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      {" "}
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>
              <p>
                Elva Project is a mini e-commerce website
              </p>
            </div>

            <div
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={safe} alt="" />
              </div>
              <div className="agroweb">
                <h2>MINI-PORTFOLIO</h2>
                <div>
                  <a
                    href="https://mini-portfolio-blush-rho.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>

              <p>
                This is a mini portfolio, here, some questions about my career
                were answered.
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="500"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="agroweb">
                <img src={logo} alt="" />
              </div>
              <div>
                <h2>QUIZ APPLICATION</h2>
                <div>
                  <a
                    href="https://react-quiz-app-green.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>

              <p>
                This is a quiz application, that allow users choose correct
                answers from an array of questions after which they are graded
                on submission.
              </p>
            </div>
            
            <div
              data-aos="flip-down"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={task} alt="" />
              </div>
              <div className="agroweb">
                <h2>A TASK MANAGER APPLICATION</h2>
                <div>
                  <a
                    href="https://task-manager-brown-iota.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      {" "}
                      <SiVercel size={30} />
                    </div>
                  </a>
                </div>
              </div>
              <p>
                This is a task manager application, that allow users input their
                task through a modal that displays a Form, which is being
                updated in the application. A user can delete and mark completed
                task.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
