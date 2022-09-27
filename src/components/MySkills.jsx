import React from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';

const MySkills = () => {
  return (
    <div className="container">
      <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div className="my-skills">
          <div className="my-skills-left">
            <h1 className="header">Skills</h1>
            <p className="content">
              Since beginning of my journey as a frontend developer nearly 3
              months ago, I have developed some basic apps which have given me a
              good insight of the web development world. The main area of my
              expertise is frontend development, HTML, CSS, JavaScript, ReactJS,
              building small and medium web apps, features and coding
              interactive layouts. I am into creating responsive websites that
              are fast, easy to use and built following the best practices.
            </p>
            <p className="content">
              Well organized person, problem solver with attention to details.
              Possess a Bachelors of Technology degree in Electrical and
              Electronics and have developed a keen interest in Web
              Devlopment.Being a sincere and punctual individual, my primary
              focus is always on the given task and to complete it before the
              deadline. Formerly I have led a team of 10 members as an
              Electrical Engineer, where my task was quality assurance.
            </p>
            <p className="content">
              P.S - Appart from the technologies mentioned above, currently I am
              learning the backnend technologies like NodeJS, Express, MongoDB,
              API and Restful API as well, which will help me become a more
              complete web developer.
            </p>
            <p className="footer">
              Visit my LinkedIn profile or just contact me!
            </p>
          </div>
          <div className="my-skills-right">
            <div className="skills-header">
              I know I cannot quantify my skills, but this does look great on a
              page. Right?!
            </div>
            <div>
              <p className="progressBar-header">HTML</p>
              <ProgressBar bgcolor="#08fdd8" progress="90" />
            </div>
            <div>
              <p className="progressBar-header">CSS</p>
              <ProgressBar bgcolor="rgb(255, 34, 83)" progress="90" />
            </div>
            <div>
              <p className="progressBar-header">JavaScript</p>
              <ProgressBar bgcolor="rgb(210, 108, 213)" progress="80" />
            </div>
            <div>
              <p className="progressBar-header">ReactJS</p>
              <ProgressBar bgcolor="rgb(173, 75, 26)" progress="85" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default motion(MySkills);
