import React from "react";
import "./Contact.css";
import Modal from "./Modal";
import { useState } from "react";
import { object, string, number} from 'yup';


const userSchema = object({
  fname: string().required("input can't be empty"),
  lname: string().required("input can't be empty"),
  no: number(11).required().positive().integer(),
  email: string().email("oga"),

});



const Contact = () => {
  // const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    no: "",
    email: "",
  });
  const [text, setText] = useState();
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    console.log(name, value);
  };

  const handleChange = (e) => {
    setText(e.target.value);

    console.log(text)

  }

  const onSubmitHandler = async function (e) {
    try {
      e.preventDefault();
      const schema = await userSchema.validate(formData)
      console.log(schema)
      // await userSchema.validate(formData);
      console.log("submitted");
      setShow(true);
    } catch {
      console.log("error");
    }

    setFormData({
      fname: "",
      lname: "",
      no: "",
      email: "",
     
    })
    setText({
      text: "",
    })
  };

  return (
    <div className="container" id="contact">
      <div className="contact-container">
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
            <form onSubmit={onSubmitHandler}>
              <div>
                <label htmlFor="fname">Full Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  onChange={onChangeHandler}
                  value={formData.fname}
                  
                />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  onChange={onChangeHandler}
                  value={formData.lname}
                  
                />
              </div>
              <div>
                <label htmlFor="no">Phone Number</label>
                <input
                  type="tel"
                  name="no"
                  id="no"
                  onChange={onChangeHandler}
                  value={formData.no}
                  
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChangeHandler}
                  value={formData.email}
                  
                />
              </div>
              <div>
                <textarea
                  name="text"
                  id=""
                  cols="100"
                  rows="10"
                  onChange={handleChange}
                  value={text}
                  
                ></textarea>
              </div>
              <button type="submit">LET'S COLLABORATE</button>
            </form>
          </div>
        </div>
      </div>
      {show ? <Modal setShow={setShow} /> : null}
    </div>
  );
};

export default Contact;
