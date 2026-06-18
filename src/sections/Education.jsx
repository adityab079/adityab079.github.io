import React from 'react';
import { data } from '../data';

export default function Education() {
  return (
    <>
      <div id="education" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Education /&gt;
        </div>
        <br />
        <div className="timeline container">
          {data.education.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-img">
                <i className="fa fa-graduation-cap edu-icon"></i>
              </div>
                <div
                  className={`timeline-content wow ${
                    index % 2 === 0 ? 'bounceInLeft' : 'bounceInRight'
                  } timeline-content-black`}
                >
                  <div className={index % 2 === 0 ? 'text-left' : 'text-right'}>
                    <div className="row">
                      {index % 2 === 0 ? (
                        <>
                          <h2 className="col-8 institution-heading">
                            {edu.institution}
                          </h2>
                          <div className="col-4 date date-right">
                            {edu.period}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-4 date date-left">
                            {edu.period}
                          </div>
                          <h2 className="col-8 institution-heading">
                            {edu.institution}
                          </h2>
                        </>
                      )}
                    </div>
                    <br />
                    <p className="font-15">
                      {edu.degree}
                      <br />
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
