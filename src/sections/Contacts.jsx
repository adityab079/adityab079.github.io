
import React from 'react';

export default function Contacts() {
  return (
    <>
      <div id="contacts" className="section">
        <div className="section-heading text-center wow fadeIn">
          <br />
          &lt; Contacts /&gt;
        </div>
        <div className="section-content">
          <div className="container-fluid">
            <div className="row justify-content-center mb-20">
              <div className="col-4 text-center wow zoomIn">
                <h3 className="subsection-title">AROUND THE WEB</h3>
                <h4>
                  <a
                    href="https://www.linkedin.com/in/adityabajaj-1/"
                    target="_blank"
                    className="fa-stack-link"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x"></i>
                    </span>
                  </a>
                  <a
                    href="https://github.com/adityab079"
                    target="_blank"
                    className="fa-stack-link"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x"></i>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="col-4 text-center wow zoomIn"
                data-wow-delay="0.3s"
              >
                <h3 className="subsection-title">CURRENT LOCATION</h3>
                <h4 className="location">
                  <i className="fa fa-map-marker"></i>
                  <a> Seattle, Washington, USA</a>
                </h4>
              </div>

              <div
                className="col-4 text-center wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h3 className="subsection-title">GET IN TOUCH</h3>
                <h4>
                  <a
                    className="d-block mb-3"
                    href="mailto:alfonso_cerrato@yahoo.it"
                  >
                    <i className="fa fa-paper-plane"></i>
                    <a> anbajaj@asu.edu</a>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
