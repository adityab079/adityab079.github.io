export default function PortfolioContent() {
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
                  src="images/IMG_2924.jpg"
                  className="img-vresponsive rounded-circle"
                  alt="Aditya Bajaj"
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

      <div id="about" name="about" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; About /&gt;
        </div>
        <div className="section-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-10 mb-20 text-center">
                Hello there, I'm Aditya Bajaj, a Senior Software Engineer
                currently based in Seattle, WA. I'm working at Oracle (OCI -
                OKE), where I focus on cluster node observability, and managing
                cloud infrastructure at scale. Previously, I was a Software
                Development Engineer at Amazon, where I was a core developer of
                the next-generation container execution data store for Middle
                Mile Sortation and Transportation technology.
                <br />
                <br />
                I completed my Masters in Software Engineering at Arizona State
                University, USA, after my Bachelors in Computer Engineering from
                the University of Mumbai, India.
                <br />
                <br />
                I'm committed to maintaining cutting-edge technical skills and
                am always looking for opportunities to leverage my developer
                skill sets. I demonstrate quick grasping power &amp; strong work
                ethics, along with a good sense of responsibility and leadership
                in all of my work.
                <br />
                <br />
                When I'm not thinking about tech, I'm probably playing Chess or
                the Piano, or reading some Jack Reacher novel.
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div id="experience" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Experience /&gt;
        </div>
        <br />
        <div className="timeline container">
          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-briefcase work-icon"></i>
            </div>
            <div
              className="timeline-content wow bounceInLeft"
              style={{
                color: "black",
                paddingBottom: "0px",
                paddingTop: "10px",
                position: "relative",
              }}
            >
              <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div className="row">
                  <h2
                    className="col-9"
                    style={{
                      color: "black",
                      textAlign: "left",
                      lineHeight: "30px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    Senior Software Engineer
                  </h2>
                  <div
                    className="col-3 date"
                    style={{ textAlign: "right", width: "max-content" }}
                  >
                    Oct 2024 – Present
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5px", fontSize: "15px" }}
                >
                  <a
                    className="col-9"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Oracle (OKE)
                  </a>
                  <div className="col-3" style={{ textAlign: "right" }}>
                    <i className="fa fa-map-marker">
                      <a> Seattle</a>
                    </i>
                  </div>
                </div>
                <p style={{ fontSize: "15px", paddingBottom: "15px" }}>
                  <br />
                  Focused on enhancing node visibility &amp; observability
                  within Oracle Kubernetes Engine (OKE) to optimize speed and
                  performance.
                  <br />
                  <br />
                  <strong>Architecture Agnostic Instance Launch</strong>
                  <br />
                  • Migrated from CPU-specific to multi-architecture nodepools,
                  eliminating duplicate configs &amp; cutting setup time by ~60%
                  across 36 teams.
                  <br />
                  • Supported 10,000+ daily node launches by integrating
                  ComputeManagement &amp; adding backward-compatible API
                  routing.
                  <br />
                  • Reduced MTTR by ~40% by shipping 20+ integration tests and
                  ensuring full operational readiness.
                  <br />
                  <br />
                  <strong>Diagnostics Data Platform</strong>
                  <br />
                  • Designed a one-click, self-service diagnostics workflow
                  using TypeScript, replacing manual log collection from
                  customer nodes.
                  <br />
                  • Orchestrated diagnostics execution across Management &amp;
                  Control Plane services, enabling secure log collection &amp;
                  retrieval from nodes.
                  <br />
                  • Eliminated customer-driven log collection and SSH
                  dependency, reducing turnaround time from days to minutes.
                  <br />
                  • Built real-time status tracking &amp; idempotent request
                  controls, preventing conflicts &amp; improving reliability
                  under concurrent usage.
                  <br />
                  • Persisted log bundles to OCI Object Storage and exposed
                  pre-authenticated request (PAR) URLs for secure self-service
                  retrieval.
                  <br />
                  • Enabled AI-assisted analysis of support bundles using Codex
                  skills, surfacing likely root causes and reducing manual log
                  inspection.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <a className="techstack2" style={{ color: "white" }}>
                Technologies used: Java, Python, Go, Terraform, Docker,
                Kubernetes, Helm, TypeScript, OCI – OKE, Compute, Object Storage
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-briefcase work-icon"></i>
            </div>
            <div
              className="timeline-content wow bounceInRight"
              style={{
                color: "black",
                paddingBottom: "0px",
                paddingTop: "10px",
                position: "relative",
              }}
            >
              <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div className="row">
                  <h2
                    className="col-9"
                    style={{
                      color: "black",
                      textAlign: "left",
                      lineHeight: "30px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    Software Development Engineer
                  </h2>
                  <div
                    className="col-3 date"
                    style={{ textAlign: "right", width: "max-content" }}
                  >
                    July 2021 – Oct 2024
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5px", fontSize: "15px" }}
                >
                  <a
                    className="col-9"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Amazon (SortTech)
                  </a>
                  <div className="col-3" style={{ textAlign: "right" }}>
                    <i className="fa fa-map-marker">
                      <a> Tempe</a>
                    </i>
                  </div>
                </div>
                <p style={{ fontSize: "15px", paddingBottom: "15px" }}>
                  <br />
                  • Core developer of the next-gen container store &amp;
                  execution for Amazon Middle Mile, built to sustain 10x growth
                  in package volumes.
                  <br />
                  <br />
                  <strong>Package Load Securement Photo Validation</strong>
                  <br />
                  • Devised a frontend workflow in the associate dock safety
                  handheld tool to detect package securement issues in outbound
                  trucks.
                  <br />
                  • Utilized AWS Rekognition to ensure packages in trucks are
                  properly strapped &amp; sealed before closing.
                  <br />
                  • Identified an avg of 3,000 defects per week globally, with a
                  decreasing trend attributed to heightened associate awareness.
                  <br />
                  <br />
                  <strong>Sideline Package Process App</strong>
                  <br />
                  • Created an innovative service for virtually handling
                  problematic packages within a facility, which earlier required
                  dev intervention.
                  <br />
                  • Strategically used AWS Lambda for processing low-traffic
                  events, emphasizing optimal resource utilization and
                  cost-effectiveness.
                  <br />
                  • Achieved 30% improvement over the previous manual process,
                  translating to global cost savings of $6 million.
                  <br />
                  <br />
                  <strong>Compliance Process App</strong>
                  <br />
                  • Transitioned the EU customs declaration process from a
                  manual paper-based system to a streamlined virtual process.
                  <br />
                  • Orchestrated declaration of packages via SQS events &amp;
                  detection of package count discrepancies using AWS Fargate.
                  <br />
                  • Achieved a 3-hour reduction in processing time at facilities
                  and an annual cost saving of over $3 million.
                  <br />
                  <br />
                  <strong>EventBus Migration</strong>
                  <br />
                  • Led an org-wide campaign of 28 teams to migrate their
                  services off of EventBus &amp; onto SNS for message
                  publishing.
                  <br />
                  • Ensured seamless client transition preventing any data loss
                  by dual-publishing events via SNS alongside EventBus.
                  <br />
                  • Achieved annual savings of $360k &amp; 25% decrease in CPU
                  usage for our 1.5M messages/min traffic.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <a className="techstack2" style={{ color: "white" }}>
                Technologies used: Java, Spring, React, AWS – SNS, SQS, S3,
                CloudFormation, DynamoDB, ECS Fargate, Lambda, IAM, Rekognition
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-briefcase work-icon"></i>
            </div>

            <div
              className="timeline-content wow bounceInLeft"
              style={{
                color: "black",
                paddingBottom: "0px",
                paddingTop: "10px",
                position: "relative",
              }}
            >
              <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div className="row">
                  <h2
                    className="col-9"
                    style={{
                      color: "black",
                      textAlign: "left",
                      lineHeight: "30px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    Web & Mobile App Developer
                  </h2>
                  <div
                    className="col-3 date"
                    style={{ textAlign: "right", width: "max-content" }}
                  >
                    AUG 2020 - May 2021
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5px", fontSize: "15px" }}
                >
                  <a
                    className="col-9"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Adidas – ASU Center for Engagement Science
                  </a>
                  <div className="col-3" style={{ textAlign: "right" }}>
                    <i className="fa fa-map-marker">
                      <a> Tempe</a>
                    </i>
                  </div>
                </div>
                <p style={{ fontSize: "15px", paddingBottom: "15px" }}>
                  <br />
                  • Developed a Python program to analyze emotions &
                  attentiveness of individuals in a meeting.
                  <br />
                  • Devised an online game to quantify the perception of various
                  psycho physical metrics in a simulated dynamic environment.
                  <br />
                  • Used AWS S3 for hosting, AWS Rekognition for image analysis
                  & Firebase for maintaining a real time NoSQL Database.
                  <br />
                  <br />
                </p>
              </div>
              <a className="techstack2" style={{ color: "white" }}>
                Technologies used: Python, AWS, OpenCV, HTML, CSS, JavaScript,
                Firebase
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-briefcase work-icon"></i>
            </div>
            <div
              className="timeline-content wow bounceInRight"
              style={{ color: "black" }}
            >
              <div style={{ padding: "10px 30px" }}>
                <div className="row">
                  <div
                    className="col-4 date"
                    style={{
                      textAlign: "left",
                      backgroundImage:
                        "linear-gradient(\n                                            to right,\n                                            #179be2,\n                                            #6bccef\n                                        )",
                    }}
                  >
                    FEB 2018 - APR 2018
                  </div>
                  <h2
                    className="col-8"
                    style={{
                      color: "black",
                      textAlign: "right",
                      lineHeight: "31.6px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    Head App Developer
                  </h2>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5px", fontSize: "15px" }}
                >
                  <div className="col-6">
                    <i
                      className="fa fa-map-marker"
                      style={{ textAlign: "left" }}
                    >
                      <a> Mumbai</a>
                    </i>
                  </div>
                  <a
                    className="col-6"
                    style={{ color: "black", textAlign: "right" }}
                  >
                    Shree Pratishthan NGO
                  </a>
                </div>

                <p style={{ fontSize: "15px" }}>
                  <br />
                  • Crafted an Android app using Android Studio to bolster the
                  NGO’s digital presence & facilitate effective communication
                  with clients.
                  <br />
                  • Implemented a Gallery module & Firebase database for users
                  to enrich user experience.
                  <br />
                  <br />
                </p>
              </div>
              <a className="techstack2" style={{ color: "white" }}>
                Technologies used: Android Studio, Java, Firebase
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img">
              <i className="fa fa-briefcase work-icon"></i>
            </div>

            <div
              className="timeline-content wow bounceInLeft"
              style={{
                color: "black",
                paddingBottom: "0px",
                paddingTop: "10px",
              }}
            >
              <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div className="row">
                  <h2
                    className="col-8"
                    style={{
                      color: "black",
                      textAlign: "left",
                      lineHeight: "31.6px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    Intern
                  </h2>
                  <div
                    className="col-4 date"
                    style={{ textAlign: "right", width: "max-content" }}
                  >
                    JULY 2018 - AUG 2018
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5px", fontSize: "15px" }}
                >
                  <a
                    className="col-8"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    SKADA Technology Pvt Ltd
                  </a>
                  <div className="col-4" style={{ textAlign: "right" }}>
                    <i className="fa fa-map-marker">
                      <a> Mumbai</a>
                    </i>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  <br />
                  • Implemented programs on Raspberry Pi & sensors such as DHT11
                  & PIR using Python. <br />• Low cost home automation
                  alternatives such as Temperature manager & Smart Lighting
                  systems were designed & developed. <br />
                  <br />
                  Technologies used:
                  <i>
                    <strong>Python, C, Raspberry Pi</strong>
                  </i>
                </p>
              </div>
              <a className="techstack2" style={{ color: "white" }}>
                Technologies used: Python, AWS, OpenCV, HTML, CSS, JavaScript,
                Firebase
              </a>
            </div>
          </div>
        </div>
      </div>

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

      <div id="portfolio" className="section">
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
      <div id="skills" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Skills /&gt;
        </div>
        <div style={{ fontSize: "1.75rem" }} className="text-center">
          <div className="link-cont">
            <br />
            <div className="link-wrapper wow slideInLeft">
              <a className="link" style={{ padding: "5px" }}>
                Python • Java • Go • C • C++ • C# • SQL • TypeScript
              </a>
            </div>
            <div className="link-wrapper wow slideInRight">
              <a className="link" style={{ padding: "5px" }}>
                HTML5 • CSS • JavaScript • Node.js • React.js • React Native •
                PHP
              </a>
            </div>
            <div className="link-wrapper wow slideInLeft">
              <a className="link" style={{ padding: "5px" }}>
                PostgreSQL • MySQL • MongoDB • Spring • REST API • Git • Linux
              </a>
            </div>
            <div className="link-wrapper wow slideInRight">
              <a className="link" style={{ padding: "5px" }}>
                Docker • Kubernetes • Helm • Terraform • MCP • AI Agent
                Orchestration
              </a>
            </div>
            <div className="link-wrapper wow slideInLeft">
              <a className="link" style={{ padding: "5px" }}>
                AWS : - Lambda • Fargate • SNS • SQS • S3 • DynamoDB • EC2 •
                Rekognition • CloudWatch
              </a>
            </div>
            <div className="link-wrapper wow slideInRight">
              <a className="link" style={{ padding: "5px" }}>
                OCI : - OKE • Compute • Object Storage • IAM • Registry
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />

      <div id="certifications" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Certifications /&gt;
        </div>
        <div style={{ fontSize: "1.75rem" }} className="text-center">
          <div className="link-cont wow slideInLeft">
            <div className="link-wrapper">
              <br />
              <a
                className="link hover-6"
                href="https://www.youracclaim.com/badges/01c1506d-199c-4b15-bf83-62d156d4810a/public_url"
                target="_blank"
              >
                Applied Data Science with Python
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://www.youracclaim.com/badges/cb9bae82-4506-4b8b-8da8-28e5dc1f90b1/public_url"
                target="_blank"
              >
                Applied Data Science with R
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://www.youracclaim.com/badges/b6346111-2ef2-4cff-8f1b-50395b44acdf/public_url"
                target="_blank"
              >
                Build Your Own Chatbot
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://www.youracclaim.com/badges/1ef01d85-a48b-4666-92e6-845bfc25ec36/public_url"
                target="_blank"
              >
                Deep Learning
              </a>
            </div>
          </div>

          <div className="link-cont">
            <div className="link-wrapper wow slideInRight">
              <a
                className="link hover-6"
                href="https://courses.cognitiveclass.ai/certificates/2d86d53d00f741daaf1a2759a58558cd"
                target="_blank"
                style={{ paddingTop: "15px" }}
              >
                Data Analysis with Python
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://courses.cognitiveclass.ai/certificates/5c655e1029bd480bb55f4a96341224a4"
                target="_blank"
              >
                Data Visualization with Python
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://courses.cognitiveclass.ai/certificates/0b58ecf59b83429f83325d77b2cc33ec"
                target="_blank"
              >
                Machine Learning with Python
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://www.udemy.com/certificate/UC-U4I7J05B/"
                target="_blank"
                style={{ paddingTop: "15px" }}
              >
                AWS Concepts
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://www.udemy.com/certificate/UC-8PQIBYSZ/"
                target="_blank"
              >
                AWS Essentials
              </a>
            </div>
          </div>

          <div className="link-cont wow slideInLeft">
            <div className="link-wrapper">
              <a
                className="link hover-6"
                href="http://coursera.org/verify/8JSWEUEKV8YR"
                target="_blank"
                style={{ paddingTop: "15px" }}
              >
                Front-End Web UI Frameworks and Tools: Bootstrap 4
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="http://coursera.org/verify/67WCVGH453ZM"
                target="_blank"
              >
                Front-End Web Development with React
              </a>
              {" • "}
              <a
                className="link hover-6"
                href="https://coursera.org/share/295039d113d0b2bc6f3efacd1ab3ef7a"
                target="_blank"
              >
                Multiplatform Mobile App Development with React Native
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>

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
                  Seattle, Washington, USA
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
                    anbajaj@asu.edu
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer text">
        <span>Aditya Bajaj &copy; 2026</span>
      </div>
    </>
  );
}
