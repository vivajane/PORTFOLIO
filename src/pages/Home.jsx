import React from "react";
import "./Home.css";
// import "../App"
import  image from "../images/portimg.png"
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
<div className="container" id="/">
<div className="homecontainer">
      <div className="home">
        <div className="img-flex">
          <div className='flex-content'>
           <h2 data-aos="slide-left" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="600">Welcome to my World</h2>
           <p className="para" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500" data-aos-easing="ease-in-out-sine"  >
           My name is <span data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="600" >Ojiteli Kosisochukwu Vivian. </span>I am a Frontend Web
           Developer. Experienced in building responsive web designs, highly
           curious about new technologies and driven to finding ways to
           implementing and tackling new challenges. Great appetite to learn and
           improve my skills on Frontend Web Development. I am a passionate
           Frontend Web Developer focused on building exceptional digital
           experience. I hope to explore more technological roles in the future.
           </p>
           <div className="links">LINKS</div>
           <div className="socials">
            <button data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <a href="https://github.com/vivajane" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
            </button>
            <button data-aos="slide-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <a href="https://www.linkedin.com/in/vivianojiteli/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
            </button>
            <button data-aos="slide-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <a href="mailto:obuekwekosi@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail />
              </a>
            </button>
          </div>
          </div>
        
          <div className="div-img">
           <img src={image}alt="img" className="hero-img" data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in" data-aos-duration="900" />
          </div>
        </div>
      
      </div>
      
    </div>
   
</div>
  );
};

export default Home;
