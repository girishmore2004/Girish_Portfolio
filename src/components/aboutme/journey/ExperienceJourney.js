// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import PersonIcon from "@mui/icons-material/Person";
// import { Link } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import Flip from "react-reveal/Flip";

// function ExperienceJourney() {
//   return (
//     <div className="mt-5">
//       <div>
//         <Link className="btn btn-primary m-1" to="/educationjourney">
//           Educational Journey
//         </Link>
//         <Link className="btn btn-primary m-1" to="/experiencejourney">
//           Experience Journey
//         </Link>
//         <Link className="btn btn-primary m-1" to="/technicaljourney">
//           Technical Journey
//         </Link>
//         <Link className="btn btn-primary m-1" to="/projectjourney">
//           Project Journey
//         </Link>
//       </div>
//       <div className="mt-5">
//         <Flip top cascade>
//           <h1>Experience Journey</h1>
//         </Flip>
//       </div>
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
//           contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
//           date="2023 - Continuing"
//           iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
//           icon={<PersonIcon />}
//         >
//           <h5 className="vertical-timeline-element-title">
//             Visvesvaraya National Institute of Technology , Nagpur.
//           </h5>
//           <h6 className="vertical-timeline-element-subtitle mt-2">
//             Student
//           </h6>
//           <p>• Learn Fundamentals of materials science: atomic structure, crystallography, phase diagrams, defects in materials.</p>
//           <p>• Learn Mechanical properties of materials: strength, hardness, toughness, elasticity, plasticity, fatigue, creep.</p>
//           <p>• Learn Physical properties: thermal conductivity, electrical conductivity, magnetic properties, optical properties.</p>
//           <p>• Learn Material processing techniques: casting, forging, welding, machining, heat treatment, powder metallurgy.</p>
//           <p>• Learn Materials characterization techniques: microscopy (optical, electron), spectroscopy (X-ray, FTIR, UV-Vis), diffraction (XRD).</p>
//           <p>• Learn Materials selection and design: understanding material properties for specific applications, optimization of material selection for cost, performance, and environmental considerations.</p>
//         </VerticalTimelineElement>
//         {/* <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
//           contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
//           date="2021 - 2022"
//           iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
//           icon={<PersonIcon />}
//         >
//           <h5 className="vertical-timeline-element-title">
//             Next
//           </h5>
//           <h6 className="vertical-timeline-element-subtitle mt-2">
            
//           </h6>
//           <p>• Proficient in developing, deploying and managing computerized systems that gather, retain, evaluate and exhibit 
//             data to facilitate the achievement of organizational aims and objectives.</p>
//           <p>• Proficient in collecting and organizing data from diverse sources, utilizing statistical techniques and software 
//             tools for data analysis and creating comprehensive reports and presentations that showcase significant insights and trends.</p>
//           <p>• Consistently completed assigned tasks in a timely and efficient manner as directed by management, while maintaining 
//             effective communication between the company and employees.</p>
//           <p>• Proficient in monitoring daily business operation costs, verifying and evaluating accounting transactions updates, 
//             and providing corresponding reports to top management.</p>
//           <p>• Skilled in collecting and compiling monthly reports, conducting inventory analysis for month-end, quarterly, 
//             and year-end closing, and submitting reports in accordance with management requirements.</p>
//           <p>• Proficient in developing and maintaining various reporting dashboard, technical support to end-users, 
//             diagnosing hardware and software issues, and collaborating with IT teams to promptly resolve system-related problems.</p>
//         </VerticalTimelineElement> */}

//         <VerticalTimelineElement
//           iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
//           icon={<StarIcon />}
//         />
//       </VerticalTimeline>
//     </div>
//   );
// }

// export default ExperienceJourney;
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Nov 2022 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Visvesvaraya National Institute of Technology, Nagpur
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Student
          </h6>
          <p style={{textAlign:"justify"}}>• Learn Fundamentals of materials science: atomic structure, crystallography, phase diagrams, defects in materials.</p>
          <p style={{textAlign:"justify"}}>• Learn Mechanical properties of materials: strength, hardness, toughness, elasticity, plasticity, fatigue, creep.</p>
          <p style={{textAlign:"justify"}}>• Learn Physical properties: thermal conductivity, electrical conductivity, magnetic properties, optical properties.</p>
          <p style={{textAlign:"justify"}}>• Learn Material processing techniques: casting, forging, welding, machining, heat treatment, powder metallurgy.</p>
          <p style={{textAlign:"justify"}}>• Learn Materials characterization techniques: microscopy (optical, electron), spectroscopy (X-ray, FTIR, UV-Vis), diffraction (XRD).</p>
          <p style={{textAlign:"justify"}}>• Learn Materials selection and design: understanding material properties for specific applications, optimization of material selection for cost, performance, and environmental considerations.</p>
          
          <h6 className="vertical-timeline-element-subtitle mt-4">Technical Skills</h6>
          <p style={{ textAlign: "justify" }}>• Data Structures and Algorithms in C</p>
          <p style={{ textAlign: "justify" }}>• Programming fundamentals and problem-solving techniques.</p>
          <p style={{ textAlign: "justify" }}>• Hands-on experience with various data structures like arrays, linked lists, stacks, queues, trees, and graphs.</p>
          <p style={{ textAlign: "justify" }}>• Implementation and analysis of algorithms for searching, sorting, and optimization.</p>
          <p style={{ textAlign: "justify" }}>• Understanding of time and space complexity, Big O notation, and efficient algorithm design.</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Apr 2024 - May 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Research Internship - Sensors and Actuators Development with Thin Film
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Internship (On-site)
          </h6>
          <p style={{textAlign:"justify"}}>• MATLAB, Project Management</p>
          <p style={{textAlign:"justify"}}>• Developed sensors and actuators using thin film technologies.</p>
          <p style={{textAlign:"justify"}}>• Gained hands-on experience in materials science and engineering principles.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Apr 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            JP Morgan Investment Banking Job Simulation
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Forage (Remote)
          </h6>
          <p style={{textAlign:"justify"}}>• Critical Thinking and Analytical Skills</p>
          <p style={{textAlign:"justify"}}>• Simulated real-world tasks related to investment banking to gain practical experience.</p>
          <p style={{textAlign:"justify"}}>• Enhanced critical thinking and analytical skills through various tasks and challenges.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="May 2024 - Jun 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Web Development Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Nexus Info (Remote)
          </h6>
          <p style={{textAlign:"justify"}}>• React.js, Bootstrap (Framework)</p>
          <p style={{textAlign:"justify"}}>• Developed and maintained web applications using React.js and Bootstrap.</p>
          <p style={{textAlign:"justify"}}>• Collaborated with a remote team to enhance user interfaces and improve user experiences.</p>
        </VerticalTimelineElement>
        
        
        
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
