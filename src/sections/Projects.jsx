
import React from 'react';

export default function Projects() {
  return (
    <>
      <div id="projects" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Projects /&gt;
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div className="project_card wow bounceInLeft">
            <div style={{ padding: "30px 40px" }}>
              <h2 className="title">
                Stress Detection and Mgt using IOT & Machine Learning
              </h2>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Detected stress using fundamentals of IOT and Machine learning
                  with an accuracy of over 91%.
                </li>
                <li>
                  Collected the heartbeat of a person using a heartbeat sensor
                  and sent the data over to a server using a NodeMCU chip.
                </li>
                <li>
                  Applied KNN algorithm on this data to detect whether the
                  person could be in stress.
                </li>
                <li>
                  Developed an Android application to show the results of the
                  model, suggest remedies and help book appointments with local
                  doctors.
                </li>
              </ul>
            </div>
            <a style={{ color: "white" }} className="techstack">
              Technologies used: C, Java, Python, Arduino IDE, Android Studio
            </a>
          </div>

          <div className="project_card wow bounceInLeft">
            <div style={{ padding: "25px 30px" }}>
              <h2 className="title">Fyltr</h2>
              <ul style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
                <li>
                  Created a website & web extension using React to suggest
                  charities to a user, depending on the nature of the news read
                  by them.
                </li>
                <li>
                  Made API calls to scrape current webpage text, extract
                  keywords & generate suggestions.
                </li>
                <li>
                  Currently developing a cross platform mobile application using
                  React Native to maximize reach.
                </li>
                <li>
                  Accepted into Mozilla’s Incubator Open Lab program for
                  Startups.
                </li>
              </ul>
            </div>
            <a style={{ color: "white" }} className="techstack">
              Technologies used: React, AWS, Python
            </a>
          </div>

          <div
            className="project_card wow bounceInRight"
            style={{ minHeight: "272px" }}
          >
            <div style={{ padding: "25px 30px" }}>
              <h2 className="title">Movie Recommendation System</h2>
              <ul style={{ padding: "10px 20px" }}>
                <li>
                  Built a recommendation system using Collaborative Filtering,
                  which suggested movies to a user based on their history.
                </li>
                <li>
                  Determined similarity between each user & the input user
                  through the Pearson Correlation Function.
                </li>
              </ul>
            </div>
            <a style={{ color: "white" }} className="techstack">
              Technologies used: Python, Pandas, Scikit-Learn
            </a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
