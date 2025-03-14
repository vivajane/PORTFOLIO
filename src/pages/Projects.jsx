import React from "react";
import { SiVercel } from "react-icons/si";
import logo from "../images/react-quiz-app.png";
import agro from "../images/agr.png";
import cart from "../images/cart.png";
import task from "../images/taskmanager.png";
import todo from "../images/todolist.png";
import vivys from "../images/vivysfashion.png";
import elva from "../images/elva.png";
import famtrust from "../images/famtrustproject.png";
import laundry from "../images/laundyEase.png";
import safe from "../images/mini.png";
import timbu from "../images/timbu.png";
import "./Projects.css";

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
                <img src={laundry} alt="" />
              </div>
              <div className="agroweb">
                <h2>LAUNDRY EASE</h2>
                <div>
                  <a
                    href="https://laundry-ease.vercel.app/"
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
                The laundry website allows users to schedule and manage their
                laundry services online. It provides features like service
                selection, pricing details. 
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={agro} alt="agro" />
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
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={timbu} alt="timbu" />
              </div>
              <div className="agroweb">
                <h2>TIMBU WEBSITE</h2>
                <div>
                  <a
                    href="https://timbu-e-commerce-app-82zw.vercel.app/"
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
                Timbu is an e-commerce site where sales and purchases take place
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div>
                <img src={famtrust} alt="" />
              </div>
              <div className="agroweb">
                <h2>FARMTRUST</h2>
                <div>
                  <a
                    href="http://famtrustproject.vercel.app/"
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
                Family account management app designed to simplify and
                streamline the management of financial resources for families.
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
                This is a fashion website where users get to see list of
                displayed proudct, add to cart and view cart.
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
                    href="https://elva-project.vercel.app/"
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
              <p>Elva Project is a mini e-commerce website</p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
