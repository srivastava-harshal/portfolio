import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './MySkills.css';
// import { motion } from 'framer-motion';

const MySkills = () => {
  return (
    <div className="container">
      {/* <motion.div
        className="right"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      > */}
      <div className="my-skills">
        <div className="my-skills-top">
          <h1 className="header">Skills</h1>
        </div>
        <div className="my-skills-bottom">
          <div className="my-skills-bottom-left">
            <p className="my-skills-content">
              I possess a robust set of problem-solving skills, exemplified by
              my ability to dissect intricate issues and develop effective
              solutions. My approach involves critical thinking, coupled with a
              knack for troubleshooting, enabling me to navigate challenges
              adeptly. My track record showcases a talent for identifying root
              causes and implementing strategic fixes. Furthermore, as a
              collaborative team player, I bring excellent interpersonal skills
              to the table. I've successfully contributed to diverse teams,
              fostering positive and inclusive work environments. My
              communication skills shine in cross-functional settings,
              facilitating effective collaboration towards shared objectives.
            </p>
            <p className="my-skills-content">
              My proficiency extends to writing scalable and reusable code,
              meticulously crafted in adherence to industry best practices. I
              prioritize code quality, implementing thorough testing and
              engaging in comprehensive code reviews. The application of design
              patterns and architectural principles is integral to my
              development process, ensuring the creation of maintainable
              software. I am committed to maintaining coding standards,
              employing version control systems, and actively participating in
              collaborative development workflows. This dedication to coding
              excellence reflects my adaptability to emerging technologies and
              industry trends.
            </p>
            <p className="my-skills-content">
              Documenting solutions is a key aspect of my skill set,
              encompassing code, processes, and comprehensive technical
              documentation. This commitment enhances knowledge transfer within
              the team, contributing to a more informed and efficient work
              environment. I exhibit leadership qualities by taking initiative
              in guiding and mentoring team members. My ability to lead
              discussions, make collaborative decisions, and foster a positive
              team culture underscores my leadership capabilities. Finally, my
              time management skills and adaptability stand out, ensuring the
              timely delivery of high-quality solutions, even in the face of
              changing requirements and evolving project scopes.
            </p>
          </div>
          <div className="my-skills-bottom-right">
            <div className="skills-header">
              I know I cannot quantify my skills, but this does look great on a
              page. Right?
            </div>
            <div>
              <p className="progressBar-header">HTML</p>
              <ProgressBar bgcolor="#08fdd8" progress="95" />
            </div>
            <div>
              <p className="progressBar-header">CSS</p>
              <ProgressBar bgcolor="rgb(255, 34, 83)" progress="90" />
            </div>
            <div>
              <p className="progressBar-header">JavaScript</p>
              <ProgressBar bgcolor="rgb(210, 108, 213)" progress="97.5" />
            </div>
            <div>
              <p className="progressBar-header">ReactJS</p>
              <ProgressBar bgcolor="rgb(173, 75, 26)" progress="95" />
            </div>
            <div>
              <p className="progressBar-header">NodeJS</p>
              <ProgressBar bgcolor="#41B3A3" progress="75" />
            </div>
            <div>
              <p className="progressBar-header">ExpressJS</p>
              <ProgressBar bgcolor="#C38D9E" progress="75" />
            </div>
          </div>
        </div>
        <a
          style={{ textDecoration: 'none' }}
          href="https://www.linkedin.com/in/harshal-srivastava/"
          target="_blank"
        >
          <p className="footer">Visit my LinkedIn profile!</p>
        </a>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default MySkills;
