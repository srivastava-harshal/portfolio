import React from 'react';
// import { Link } from 'react-router-dom';
import projects from '../Projects/Projects';
import './Work.css';

const Work = () => {
  return (
    <div className="work">
      <div className="work_wrapper">
        <div className="work-header">
          <h1 className="header">My Work</h1>
          <p className="content">
            Here are some of my projects that I worked on myself. Creating some
            of them by myself was quite challenging but it was fun too. Just
            click on the project and you will be redirected to the project
            itself.
          </p>
        </div>
        <div className="projects">
          {projects.map(project => {
            return (
              <div className="project" key={project.key}>
                <div className="project-left">
                  <div>
                    <a target="_blank" href={project.appURL}>
                      <img className="project-images" src={project.imageURL} />
                    </a>
                  </div>
                </div>
                <div className="project-right">
                  <p className="project-description">
                    {project.description} Technology Used:{' '}
                    {project.techUsed.map((el, index) => (
                      <span key={index} className="project-description-pills">
                        {' '}
                        {el}{' '}
                      </span>
                    ))}{' '}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
