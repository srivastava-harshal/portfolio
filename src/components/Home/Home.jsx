import React from 'react';
// import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import About from '../About/About';
import MySkills from '../MySkills/MySkills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        {/* <motion.div
          className="right"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        > */}
        <div className="home-container">
          <div className="home-wrapper">
            <div className="home-right">
              {/* <div className="home-empty-container">
                If you are wondering, this is just ICE TEA!
              </div> */}
              <div className="about-right-image">
                <img
                  className="about-image"
                  src="https://i.ibb.co/MSDb6VY/Profile.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="home-left">
              <div className="header-content">Hi,</div>
              <div className="header-content">
                I'm <span className="home-name-initial">H</span>arshal,
              </div>
              <div className="header-content">web developer</div>
              <div className="sub-header-content">Front End Devloper</div>
              <div
                className="contact-button-container"
                onClick={() => navigate('/contact')}
              >
                <button className="contact-button">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
      <About />
      <MySkills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
