import React, { useState } from 'react';
import './Contact.css';
import Popup from '../Popup';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validate = (formData, setErrors) => {
  const { name, email, subject, message } = formData;
  const errors = {};

  if (!name) {
    errors.name = 'Name cannot be empty!';
  }

  if (!email) {
    errors.email = 'Email cannot be empty!';
  }

  if (!subject) {
    errors.subject = 'Subject cannot be empty!';
  }

  if (!message) {
    errors.message = 'Message cannot be empty!';
  }

  setErrors(errors);

  // Return true if there are no errors, false otherwise
  return Object.keys(errors).length === 0;
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = event => {
    setErrors(initialErrors);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    // event.preventDefault();

    if (validate(formData, setErrors)) {
      console.log('form submitted');
      setFormData(initialFormData);
      setMessageSent(true);
    }
  };

  const closePopup = () => {
    setMessageSent(false);
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="contact-top">
          <h1 className="header">Contact Me!</h1>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-top">
            <div className="form">
              <div className="name-email" style={{ position: 'relative' }}>
                <input
                  className="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      color: 'red',
                      fontSize: '14px',
                    }}
                  >
                    {errors.name}
                  </p>
                )}
                <input
                  className="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      color: 'red',
                      right: '35px',
                      fontSize: '14px',
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  className="subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      color: 'red',
                      fontSize: '14px',
                    }}
                  >
                    {errors.subject}
                  </p>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <textarea
                  className="message"
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      color: 'red',
                      fontSize: '14px',
                    }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="contact-button-2"
                onClick={handleClick}
              >
                Send Message
              </button>
            </div>
            <div className="call-button">
              <span className="call-button-text">
                Call me at{' '}
                <a href="tel:07080093213" className="call-button-anchor">
                  7080093213
                </a>
              </span>
            </div>
            <div className="mail-button">
              <span className="mail-button-text">
                Email me at{' '}
                <a
                  href="mailto:harshalsrivastava07@gmail.com"
                  className="mail-button-anchor"
                >
                  harshalsrivastava07@gmail.com
                </a>
              </span>
            </div>
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
      {messageSent && (
        <Popup
          message="This is just a dummy popup (Use other buttons instead)."
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Contact;
