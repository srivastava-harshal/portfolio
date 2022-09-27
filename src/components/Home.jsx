import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div>
          <div className="header-content">Hi,</div>
          <div className="header-content">
            I'm <span className="home-name-initial">H</span>arshal,
          </div>
          <div className="header-content">web developer</div>
          <div className="sub-header-content">Front End Devloper</div>
          <div onClick={() => navigate('/contact')}>
            <button className="contact-button">Contact Me</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
