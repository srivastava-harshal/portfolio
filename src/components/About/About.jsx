import React from 'react';
import './About.css';
import { useNavigate } from 'react-router';
// import { motion } from 'framer-motion';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      > */}
      <div className="about-wrapper">
        <div className="about">
          <div className="about-left">
            <h1 className="header">About</h1>
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <p className="about-content">
                Greetings! I'm Harshal, a passionate and dedicated frontend
                developer with a track record of 1.5 years at Optiphoenix, where
                I've been crafting seamless digital experiences for a diverse
                range of clients. My journey in the world of web development has
                been a thrilling exploration of creativity and problem-solving.
              </p>
              <p className="about-content">
                Throughout my tenure at Optiphoenix, I've had the privilege of
                contributing to the success of renowned clients, including
                Canon, Woolworths, Petdrugs Online, and CitizenM. My role has
                been dynamic, involving the development and integration of
                features that enhance the functionality and aesthetics of
                real-world websites.
              </p>
              <p className="about-content">
                From tackling easy-to-implement enhancements to overcoming
                complex integration challenges, my portfolio reflects a spectrum
                of skills and accomplishments. I take pride in transforming
                client requirements into tangible, user-friendly features that
                elevate their online presence. Whether it's optimizing user
                interfaces, implementing responsive designs, or enhancing
                overall site performance, I've been at the forefront of creating
                impactful solutions.
              </p>
              <p className="about-content">
                My development philosophy revolves around a harmonious blend of
                creativity and technical prowess. I believe in staying ahead of
                industry trends and leveraging cutting-edge technologies to
                ensure that the solutions I provide are not only functional but
                also future-proof. My commitment to delivering high-quality work
                is unwavering, and I thrive on the satisfaction of clients as
                they see their vision come to life.
              </p>
              <p className="about-content">
                In the ever-evolving landscape of web development, I recognize
                the importance of continuous learning. I am dedicated to staying
                abreast of the latest technologies, frameworks, and best
                practices, ensuring that my skills remain at the forefront of
                the industry.
              </p>
              <p className="about-content">
                I am always open to new challenges and opportunities that push
                the boundaries of what can be achieved on the web. If you're
                seeking a frontend developer who is not only skilled but also
                passionate about creating exceptional online experiences, I
                would love to connect and discuss how we can collaborate to
                bring your ideas to fruition. Thank you for visiting my
                portfolio, and I look forward to the possibility of working
                together to create innovative and impactful digital solutions.
              </p>
            </div>
          </div>
          <p onClick={() => navigate('/contact')} className="footer">
            Let's make something special.
          </p>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default About;
