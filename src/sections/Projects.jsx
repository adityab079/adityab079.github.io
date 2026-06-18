import React from 'react';
import { data } from '../data';

export default function Projects() {
  return (
    <>
      <div id="projects" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Projects /&gt;
        </div>
        <div className="project-grid">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className={`project_card wow ${
                index % 2 === 0 ? 'bounceInLeft' : 'bounceInRight'
              }`}
              style={index === 2 ? { minHeight: '272px' } : {}}
            >
              <div style={{ padding: index === 0 ? '30px 40px' : '25px 30px' }}>
                <h2 className="title">{project.title}</h2>
                <ul style={{ paddingLeft: '20px', paddingBottom: index === 1 ? '10px' : '0px' }}>
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
              <a style={{ color: 'white' }} className="techstack">
                Technologies used: {project.technologies}
              </a>
            </div>
          ))}
        </div>
      </div>
      <br />
    </>
  );
}
