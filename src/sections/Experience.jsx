
import React from 'react';

export default function Experience() {
  return (
    <>
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
                  • Orchestrated diagnostics execution across Management &
                  Control Plane services, enabling secure log collection &
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
                    Web & Mobile App Developer
                  </h2>
                  <div
                    className="col-4 date"
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
                    className="col-8"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Adidas – ASU Center for Engagement Science
                  </a>
                  <div className="col-4" style={{ textAlign: "right" }}>
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
    </>
  );
}
