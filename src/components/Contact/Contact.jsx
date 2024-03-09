import React from 'react';
import './Contact.css';
// import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container">
      {/* <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      > */}
      <div className="contact">
        <div className="contact-top">
          <h1 className="header">Contact Me!</h1>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-top">
            <p className="content">
              I am interested in internship and job opportunities as well,
              especially on projects which will enhance my knowledge and skill
              set. However, if you have any other request or question, don't
              hesitate to use the form.
            </p>
            <form className="form">
              <div className="name-email">
                <input className="name" type="text" placeholder="Name" />
                <input className="email" type="text" placeholder="Email" />
              </div>
              <div>
                <input className="subject" type="text" placeholder="Subject" />
              </div>
              <div>
                <textarea
                  className="message"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button className="contact-button-2">Send Message</button>
            </form>
          </div>
          <div className="contact-bottom-bottom">
            <div className="map">
              <a
                target="_blank"
                href="https://www.google.com/maps/@26.7750081,80.9188078,15z"
              >
                <img
                  className="map-image"
                  src="https://i.ibb.co/n3PwGKq/Screenshot-2022-09-20-at-10-47-02-PM.png"
                  alt="map"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Contact;
