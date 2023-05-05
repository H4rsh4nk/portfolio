import HonorCard from "./HonorCard.js";

import hr from "../assets/curve-hr.svg";

export default function Honors() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects & Experience</h1>
      <p className="font-light text-gray-400">
        Here are some of my projects and experience
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <HonorCard
          name="Assistant System Engineer"
          issued="Tata Consultancy Services - 10 months"
          desc="Worked on the front end for a major retail company using React, NodeJS, and PostgreSQL. I created a custom promotion algorithm using XML and AWS, and worked with Agile methodologies using JIRA, including unit testing and preparing sprint release documents. Additionally, I was responsible for technical testing, defect triage, and maintaining the Kanban board and Sprint Backlog. I also helped the Automation Testing team generate scripts using BDD Cucumber."
        />
        <HonorCard
          name="Web Developer Internship"
          issued="Red Raven Infoways - 1 year"
          desc="I developed and maintained e-commerce websites with HTML, CSS, JavaScript, and ReactJS, created an inventory management system with MySQL and RESTful API, performed cross-browser compatibility testing, and optimized website performance with techniques like lazy loading and caching, using Git for version control and collaboration."
        />
        <HonorCard
          name="Real Time Sign Language Translator"
          issued="Final year project"
          desc="Worked on a machine learning algorithm to detect and predict sign language using YOLO mark. To display the results in real-time, I used OpenCV and Flask. I collected and filtered a dataset of sign language images and used a dimension reduction algorithm to reduce the image area of the live feed."
        />
        <HonorCard
          name="IoT Based Saline Level Monitoring System"
          issued="Smart India Hackathon"
          desc="Designed a saline level monitoring system for hospitals that can alert users about the saline bottle levels of patients. The system is built using a portable, wireless Arduino-based IoT device that detects saline levels in real-time. I created a RESTful API to send the data to a centralized server directly from each individual Arduino. Additionally, I built a website with a front-end in HTML/CSS and a back-end in PHP that can read and display the readings from the IoT hardware."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
