import React from "react";
import "./about.css"; // Import your custom CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const user = localStorage.getItem("userEmail");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ycxv0t9",
        "template_w93onik",
        form.current,
        "-dlVCCmb5Va1LrWvJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar user={user} />

      <div className="container-fluidd custom-box">
        <div className="row">
          <div className="col left-column">
            <div className="container">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h2><b>Contact Form</b></h2>
                <div className="form-group">
                  <br></br>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    className="transparent-input"
                    required
                  />
                  <span className="input-line"></span>
                </div>
                <div className="form-group">
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Name"
                    className="transparent-input"
                    required
                  />
                  <span className="input-line"></span>
                </div>
                <div className="form-group">
          <input type="text" placeholder="Subject" className="transparent-input" required />
          <span className="input-line"></span>
        </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="transparent-input"
                    required
                  ></textarea>
                  <span className="input-line"></span>
                </div>
                {/* <button type="submit">Submit</button> */} <br></br>
                <button className="btn btn-dark" type="submit" value="Send" >submit</button>
              </form>
            </div>
          </div>
          <div className="col right-column">
            <br></br>
            <br></br>
            <div>
              <h2 className="d-flex justify-content-center">
              <b>Give us a feedback</b>
              </h2>
              <p>we would be happy if you could contact us</p>
              </div>
              <br></br>
              <br></br>
              <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="mt-1" icon={faMapMarkerAlt} />
              <p className="ms-4">Main road swabi, peshawar</p>
              </div>
              <br></br>
              <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="mt-1" icon={faPhone} />
              <p className="ms-5"> +92 3355698910 (whats)</p>
              </div>
              <br></br>
              <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="mt-1" icon={faEnvelope} />
              <p className="ms-5"> samerrkaan9@gail.com</p>
              </div>
              <br></br>
              <div className="d-flex justify-content-center">
              <FontAwesomeIcon style={{position:'sticky'}} className="mt-1" icon={faGlobe} />
              <p className="ms-5"> www.techcreatorpk.com</p>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
