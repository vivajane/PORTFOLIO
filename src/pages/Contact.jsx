import React from "react";
import "./Contact.css";
import { useState } from "react";


const Contact = () => {
  const[formData,setFormData] = useState({
    fname: "",
    lname: "",
    no: "",
    email: "",
    
  })
  const[text, setText] = useState()
  

  const onChangeHandler = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name] : value,
    })
    console.log(name,value)
  }

  return (
    <div className="container">
      <div className="contact">
        <h1>CONTACT</h1>
        <div className="form-flex">
          <div className="links">
            <div className="link">
              <h1>LINKS</h1>
              <div>
                <a href="https://www.linkedin.com/in/ojiteli/">Linkedln</a>
              </div>
              <div>
                <a href="https://github.com/vivajane">Github</a>
              </div>
            </div>
            <div className="skill">
              <h1>SKILLS</h1>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>GITHUB</li>
              </ul>
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="fname">Full Name</label>
              <input type="text" name="fname" id="fname" onChange={onChangeHandler} value={formData.fname} />
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname" id="lname" onChange={onChangeHandler}value={formData.lname}  />
            </div>
            <div>
              <label htmlFor="no">Phone Number</label>
              <input type="tel" name="no" id="no" onChange={onChangeHandler}  value={formData.no} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={onChangeHandler} value={formData.email}  />
            </div>
            <div>
              <textarea name="" id="" cols="100" rows="10" onChange={(e) => setText(e.target.value)} ></textarea>
            </div>
            <button type="submit">LET'S COLLABORATE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
