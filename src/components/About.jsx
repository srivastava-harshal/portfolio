import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container">
      <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div className="about">
          <div className="about-left">
            <h1 className="header">About</h1>
            <p className="content">
              I am an aspiring Front-End Developer located in Lucknow. I have a
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences.
            </p>
            <p className="content">
              I have been preparing for Indian Engineering Services(UPSC) for
              past few years and was working as an Electrical Engineer on a
              contractual basis but have recently developed my interest in Web
              development. Looking forward to use my skills in JavaScript and
              ReactJS to develop client oriented web applications.
            </p>
            <p className="content">
              Interested in entire frontend spectrum and working on ambitious
              projects with positive people and right mindset.
            </p>
            <p className="footer">Let's make something special.</p>
          </div>
          <div className="about-right">
            <img
              className="about-image"
              src="https://i.ibb.co/HHqrB1F/IMG-0531.jpg"
              alt="image"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
