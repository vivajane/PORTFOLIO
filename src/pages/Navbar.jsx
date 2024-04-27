import React from "react";
import logo from "../images/passport.png";
import "./NavBar.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
<FaTimes />;

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <div className="img">
            <a href="/">
              <img src={logo} alt="logo" className="img" />
            </a>
          </div>
          <div className="burger" onClick={handleClick}>
            {show ? (
              <FaTimes size={"30px"} />
            ) : (
              <GiHamburgerMenu size={"30px"} />
            )}
          </div>
          <ul className={show ? "list-con active" : "list-con"}>
            <li className="list-item">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={20}
                data-aos="fade-zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Projects
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                data-aos="fade-zoom-in"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Experience
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                data-aos="fade-zoom-out"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ borderBottom: "1px solid white" }}></div>
      </header>
    </div>
  );
};

export default Navbar;
