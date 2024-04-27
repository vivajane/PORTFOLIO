import React from "react";
import { SiVercel } from "react-icons/si";
import logo from "../images/quiz.png";
import agro from "../images/agr.png";
import cart from "../images/cart.png";
import task from "../images/taskmanager.png";
import todo from "../images/todolist.png";
import safe from "../images/safe.png";
// import port from "../images/portimg.png"
import "./Projects.css";

// import { FaLinkedin } from "react-icons/fa";
// {/* <SiVercel />
// <FaLinkedin /> */}

const Projects = () => {
  return (
    <div className="container">
      <div>
        <div className="project-container">
          <div className="my">MY PROJECTS</div>
        </div>
        <div className="project">
          <div data-aos="flip-down" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
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
          <div data-aos="flip-down" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="agroweb">
              <img src={logo} alt="" />
            </div>
            <div>
              <h2>QUIZ APPLICATION</h2>
              <div>
                <a
                  href="https://quiz-app-project-jjsq.vercel.app/"
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
          
          <div data-aos="flip-down" data-aos-delay="600" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div>
              <img src={todo} alt="todo" />
            </div>
            <div className="agroweb">
              <h2>TODO-LIST APPLICATION</h2>
              <div>
                <a
                  href="https://safe-haven-phi.vercel.app/"
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
              This is a todo list application, that allow users input task, mark
              finished task and delete aswell.{" "}
            </p>
          </div>
          <div data-aos="flip-down" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div>
              <img src={safe} alt="todo" />
            </div>
            <div className="agroweb">
              <h2>WEBSITE FOR GIRL THE GIRL CHILD </h2>
              <div>
                <a
                  href="https://todo-list-three-livid-45.vercel.app/"
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
              This is a website for organisation that strives for a just world
              by advancing the girl child rights and equality for females. 
            </p>
          </div>
          <div data-aos="flip-down" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div>
              <img src={cart} alt="" />
            </div>
            <div className="agroweb">
              <h2>E-COMMERCE WEBSITE</h2>
              <div>
                <a
                  href="https://shopping-cart-nine-jet.vercel.app/"
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
              This is an E-commerce website, where a user gets to see the list
              of produces. This is my first React appliction. It was
              instrumental to my knowledge of React Components
            </p>
          </div>
          <div data-aos="flip-down" data-aos-delay="600" data-aos-easing="ease-in-sine" data-aos-duration="600">
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
              task through a modal that displays a Form, which is being updated
              in the application. A user can delete and mark completed task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
