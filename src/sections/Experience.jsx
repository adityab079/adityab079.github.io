import React from 'react';
import { data } from '../data';

export default function Experience() {
  return (
    <>
      <div id="experience" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Experience /&gt;
        </div>
        <br />
        <div className="timeline container">
          {data.experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-img">
                <i className="fa fa-briefcase work-icon"></i>
              </div>
              <div
                className={`timeline-content wow ${
                  index % 2 === 0 ? 'bounceInLeft' : 'bounceInRight'
                } experience-content`}
              >
                <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                  <div className="row">
                    <h2 className="col-9 experience-heading">
                      {exp.title}
                    </h2>
                    <div className="col-3 date date-right">
                      {exp.period}
                    </div>
                  </div>
                  <div className="row experience-sub-row">
                    <a className="col-9 experience-company">
                      {exp.company}
                    </a>
                    <div className="col-3 text-right">
                      <i className="fa fa-map-marker">
                        <a> {exp.location}</a>
                      </i>
                    </div>
                  </div>
                  <p className="experience-description">
                    {exp.description ? 
                      (
                        <>
                          <br />
                          {exp.description}
                        </>
                      ) : <br />
                    }
                    {exp.achievements.map((ach, achIdx) => (
                      <React.Fragment key={achIdx}>
                        {achIdx > 0 ? <br /> : exp.description ? <><br /><br /></> : null}
                        {ach.heading && (
                          <>
                            <strong>{ach.heading}</strong>
                            <br />
                          </>
                        )}
                        {ach.points.map((point, pIdx) => (
                          <React.Fragment key={pIdx}>
                            • {point}
                            <br />
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <a className="techstack2" style={{ color: 'white' }}>
                  Technologies used: {exp.technologies}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
