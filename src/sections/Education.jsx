
import React from 'react';

export default function Education() {
  return (
    <>
      <div id="education" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Education /&gt;
        </div>
        <br />
        <div className="timeline container">
          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-graduation-cap edu-icon"></i>
            </div>
            <div
              className="timeline-content wow bounceInLeft"
              style={{ color: "black", padding: "10px 30px" }}
            >
              <div className="row">
                <h2
                  className="col-8"
                  style={{
                    color: "black",
                    lineHeight: "31.6px",
                    marginBlockEnd: "0px",
                  }}
                >
                  Arizona State University
                </h2>
                <div
                  className="col-4 date"
                  style={{ textAlign: "right", width: "max-content" }}
                >
                  AUG 2019 - MAY 2021
                </div>
              </div>
              <br />
              <p style={{ fontSize: "15px" }}>
                Masters in Software Engineering
                <br />
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-graduation-cap edu-icon"></i>
            </div>
            <div
              className="timeline-content wow bounceInRight"
              style={{ color: "black", padding: "10px 30px" }}
            >
              <div style={{ textAlign: "right" }}>
                <div className="row">
                  <div className="col-4 date" style={{ textAlign: "left" }}>
                    AUG 2015 - MAY 2019
                  </div>
                  <h2
                    className="col-8"
                    style={{
                      color: "black",
                      lineHeight: "31.6px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    University of Mumbai
                  </h2>
                </div>
                <br />
                <p style={{ fontSize: "15px" }}>
                  Bachelor of Computer Engineering
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
