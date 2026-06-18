export const data = {
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Oracle (OKE)",
      location: "Seattle",
      period: "Oct 2024 – Present",
      description: "Focused on enhancing node visibility & observability within Oracle Kubernetes Engine (OKE) to optimize speed and performance.",
      achievements: [
        {
          heading: "Architecture Agnostic Instance Launch",
          points: [
            "Migrated from CPU-specific to multi-architecture nodepools, eliminating duplicate configs & cutting setup time by ~60% across 36 teams.",
            "Supported 10,000+ daily node launches by integrating ComputeManagement & adding backward-compatible API routing.",
            "Reduced MTTR by ~40% by shipping 20+ integration tests and ensuring full operational readiness.",
          ],
        },
        {
          heading: "Diagnostics Data Platform",
          points: [
            "Designed a one-click, self-service diagnostics workflow using TypeScript, replacing manual log collection from customer nodes.",
            "Orchestrated diagnostics execution across Management & Control Plane services, enabling secure log collection & retrieval from nodes.",
            "Eliminated customer-driven log collection and SSH dependency, reducing turnaround time from days to minutes.",
            "Built real-time status tracking & idempotent request controls, preventing conflicts & improving reliability under concurrent usage.",
            "Persisted log bundles to OCI Object Storage and exposed pre-authenticated request (PAR) URLs for secure self-service retrieval.",
            "Enabled AI-assisted analysis of support bundles using Codex skills, surfacing likely root causes and reducing manual log inspection.",
          ],
        },
      ],
      technologies: "Java, Python, Go, Terraform, Docker, Kubernetes, Helm, TypeScript, OCI – OKE, Compute, Object Storage",
    },
    {
      title: "Software Development Engineer",
      company: "Amazon (SortTech)",
      location: "Tempe",
      period: "July 2021 – Oct 2024",
      description: "Core developer of the next-gen container store & execution for Amazon Middle Mile, built to sustain 10x growth in package volumes.",
      achievements: [
        {
          heading: "Package Load Securement Photo Validation",
          points: [
            "Devised a frontend workflow in the associate dock safety handheld tool to detect package securement issues in outbound trucks.",
            "Utilized AWS Rekognition to ensure packages in trucks are properly strapped & sealed before closing.",
            "Identified an avg of 3,000 defects per week globally, with a decreasing trend attributed to heightened associate awareness.",
          ],
        },
        {
          heading: "Sideline Package Process App",
          points: [
            "Created an innovative service for virtually handling problematic packages within a facility, which earlier required dev intervention.",
            "Strategically used AWS Lambda for processing low-traffic events, emphasizing optimal resource utilization and cost-effectiveness.",
            "Achieved 30% improvement over the previous manual process, translating to global cost savings of $6 million.",
          ],
        },
        {
          heading: "Compliance Process App",
          points: [
            "Transitioned the EU customs declaration process from a manual paper-based system to a streamlined virtual process.",
            "Orchestrated declaration of packages via SQS events & detection of package count discrepancies using AWS Fargate.",
            "Achieved a 3-hour reduction in processing time at facilities and an annual cost saving of over $3 million.",
          ],
        },
        {
          heading: "EventBus Migration",
          points: [
            "Led an org-wide campaign of 28 teams to migrate their services off of EventBus & onto SNS for message publishing.",
            "Ensured seamless client transition preventing any data loss by dual-publishing events via SNS alongside EventBus.",
            "Achieved annual savings of $360k & 25% decrease in CPU usage for our 1.5M messages/min traffic.",
          ],
        },
      ],
      technologies: "Java, Spring, React, AWS – SNS, SQS, S3, CloudFormation, DynamoDB, ECS Fargate, Lambda, IAM, Rekognition",
    },
    {
      title: "Web & Mobile App Developer",
      company: "Adidas – ASU Center for Engagement Science",
      location: "Tempe",
      period: "AUG 2020 - May 2021",
      description: "",
      achievements: [
        {
          heading: "",
          points: [
            "Developed a Python program to analyze emotions & attentiveness of individuals in a meeting.",
            "Devised an online game to quantify the perception of various psycho physical metrics in a simulated dynamic environment.",
            "Used AWS S3 for hosting, AWS Rekognition for image analysis & Firebase for maintaining a real time NoSQL Database.",
          ],
        },
      ],
      technologies: "Python, AWS, OpenCV, HTML, CSS, JavaScript, Firebase",
    },
    {
      title: "Head App Developer",
      company: "Shree Pratishthan NGO",
      location: "Mumbai",
      period: "FEB 2018 - APR 2018",
      description: "",
      achievements: [
        {
          heading: "",
          points: [
            "Crafted an Android app using Android Studio to bolster the NGO’s digital presence & facilitate effective communication with clients.",
            "Implemented a Gallery module & Firebase database for users to enrich user experience.",
          ],
        },
      ],
      technologies: "Android Studio, Java, Firebase",
    },
    {
      title: "Intern",
      company: "SKADA Technology Pvt Ltd",
      location: "Mumbai",
      period: "JULY 2018 - AUG 2018",
      description: "",
      achievements: [
        {
          heading: "",
          points: [
            "Implemented programs on Raspberry Pi & sensors such as DHT11 & PIR using Python.",
            "Low cost home automation alternatives such as Temperature manager & Smart Lighting systems were designed & developed.",
          ],
        },
      ],
      technologies: "Python, C, Raspberry Pi",
    },
  ],
  education: [
    {
      institution: "Arizona State University",
      degree: "Masters in Software Engineering",
      period: "AUG 2019 - MAY 2021",
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Computer Engineering",
      period: "AUG 2015 - MAY 2019",
    },
  ],
  projects: [
    {
      title: "Stress Detection and Mgt using IOT & Machine Learning",
      points: [
        "Detected stress using fundamentals of IOT and Machine learning with an accuracy of over 91%.",
        "Collected the heartbeat of a person using a heartbeat sensor and sent the data over to a server using a NodeMCU chip.",
        "Applied KNN algorithm on this data to detect whether the person could be in stress.",
        "Developed an Android application to show the results of the model, suggest remedies and help book appointments with local doctors.",
      ],
      technologies: "C, Java, Python, Arduino IDE, Android Studio",
    },
    {
      title: "Fyltr",
      points: [
        "Created a website & web extension using React to suggest charities to a user, depending on the nature of the news read by them.",
        "Made API calls to scrape current webpage text, extract keywords & generate suggestions.",
        "Currently developing a cross platform mobile application using React Native to maximize reach.",
        "Accepted into Mozilla’s Incubator Open Lab program for Startups.",
      ],
      technologies: "React, AWS, Python",
    },
    {
      title: "Movie Recommendation System",
      points: [
        "Built a recommendation system using Collaborative Filtering, which suggested movies to a user based on their history.",
        "Determined similarity between each user & the input user through the Pearson Correlation Function.",
      ],
      technologies: "Python, Pandas, Scikit-Learn",
    },
  ],
  certifications: [
    {
      name: "Applied Data Science with Python",
      url: "https://www.youracclaim.com/badges/01c1506d-199c-4b15-bf83-62d156d4810a/public_url",
    },
    {
      name: "Applied Data Science with R",
      url: "https://www.youracclaim.com/badges/cb9bae82-4506-4b8b-8da8-28e5dc1f90b1/public_url",
    },
    {
      name: "Build Your Own Chatbot",
      url: "https://www.youracclaim.com/badges/b6346111-2ef2-4cff-8f1b-50395b44acdf/public_url",
    },
    {
      name: "Deep Learning",
      url: "https://www.youracclaim.com/badges/1ef01d85-a48b-4666-92e6-845bfc25ec36/public_url",
    },
    {
      name: "Data Analysis with Python",
      url: "https://courses.cognitiveclass.ai/certificates/2d86d53d00f741daaf1a2759a58558cd",
    },
    {
      name: "Data Visualization with Python",
      url: "https://courses.cognitiveclass.ai/certificates/5c655e1029bd480bb55f4a96341224a4",
    },
    {
      name: "Machine Learning with Python",
      url: "https://courses.cognitiveclass.ai/certificates/0b58ecf59b83429f83325d77b2cc33ec",
    },
    {
      name: "AWS Concepts",
      url: "https://www.udemy.com/certificate/UC-U4I7J05B/",
    },
    {
      name: "AWS Essentials",
      url: "https://www.udemy.com/certificate/UC-8PQIBYSZ/",
    },
    {
      name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      url: "http://coursera.org/verify/8JSWEUEKV8YR",
    },
    {
      name: "Front-End Web Development with React",
      url: "http://coursera.org/verify/67WCVGH453ZM",
    },
    {
      name: "Multiplatform Mobile App Development with React Native",
      url: "https://coursera.org/share/295039d113d0b2bc6f3efacd1ab3ef7a",
    },
  ],
};
