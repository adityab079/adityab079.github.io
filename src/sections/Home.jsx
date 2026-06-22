
import React from 'react';

export default function Home() {
  return (
    <>
      <div id="home" className="header">
        <div id="particles-js"></div>

        <div className="header-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <img
                  id="profile-img"
                  src="../../images/IMG_2924.jpg"
                  className="img-vresponsive rounded-circle"
                  alt="Aditya Bajaj"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span className="name">Hi, I'm Aditya Bajaj</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span className="title">
                  Senior Software Engineer · Cloud · AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
