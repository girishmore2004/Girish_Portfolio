// import React from "react";
// import Particle from "../../Particle";
// import { Container, Row, Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";
// import { Fade } from "react-reveal"; 
// import pp from "../../images/portfolio1.png"; 
// import ac from "../../images/weather.png"; 
// import calculator from "../../images/onboarding.png";
// import calendar from "../../images/dailynews.png";  
// import { FaCode } from "react-icons/fa";
// export default function ProjectPage() {
//   return (
//     <section className="home-section">
//       <Container fluid id="home">
//         <Particle />
//         <Container className="home-content">
//           <div
//             className="d-flex justify-content-center"
//             width="100%"
//             style={{ backgroundColor: "#fbd9ad" }}
//           >
//             <Zoom left cascade>
//               <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
//             </Zoom>
//           </div>
//           <div>
//             <div>
//               <Container fluid className="certificate-section" id="about">
//                 <Container>
//                   <Row>
//                     <Col md={12} className="mt-5">
//                       <Row className="g-5">
//                         <Col md={3} className="col-sm-12 col-md-4">
//                           <Fade bottom>
//                             <div
//                               key={1}
//                               className="singleProject"
//                               style={{
//                                 backgroundColor: "rgb(142 70 186 / 31%)",
//                                 border: "1px solid",
//                               }}
//                             >
//                               <div className="projectContent">
//                                 <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                                   Personal Portfolio
//                                 </h5>
//                                 <img src={pp} alt={pp} />
//                                 <div className="project--showcaseBtn">
//                                   <a
//                                     href={
//                                       "https://github.com/girishmore2004/portfolio-Girish"
//                                     }
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className={"iconBtn"}
//                                     aria-labelledby={`code`}
//                                   >
//                                     <FaCode
//                                       id={`code`}
//                                       className={"icon"}
//                                       aria-label="Code"
//                                     />
//                                   </a>
//                                 </div>
//                               </div>
//                               <h6>
//                                 <p
//                                   className="project--desc"
//                                   style={{
//                                     background: "#fbd9ad",
//                                     color: "#b061df",
//                                     fontWeight: 600,
//                                   }}
//                                 >
//                                   Welcome to my personal portfolio. Explore my
//                                   work, skills, and achievements in a concise
//                                   and visually appealing format. Get a glimpse
//                                   of my expertise and creativity.
//                                 </p>
//                               </h6>
//                               <div
//                                 className="project--lang"
//                                 style={{
//                                   background: "#fbd9ad",
//                                   color: "#b061df",
//                                   fontWeight: 600,
//                                 }}
//                               >
//                                 HTML, CSS, SCSS, React, JavaScript
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>
//                         <Col md={3} className="col-sm-12 col-md-4">
//                           <Fade bottom>
//                             <div
//                               key={1}
//                               className="singleProject"
//                               style={{
//                                 backgroundColor: "rgb(142 70 186 / 31%)",
//                                 border: "1px solid",
//                               }}
//                             >
//                               <div className="projectContent">
//                                 <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                                   Weather Website
//                                 </h5>
//                                 <img src={ac} alt={ac} />
//                                 <div className="project--showcaseBtn">
//                                   <a
//                                     href={
//                                       "https://github.com/girishmore2004/Weather"
//                                     }
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className={"iconBtn"}
//                                     aria-labelledby={`code`}
//                                   >
//                                     <FaCode
//                                       id={`code`}
//                                       className={"icon"}
//                                       aria-label="Code"
//                                     />
//                                   </a>
//                                 </div>
//                               </div>
//                               <h6>
//                                 <p
//                                   className="project--desc"
//                                   style={{
//                                     background: "#fbd9ad",
//                                     color: "#b061df",
//                                     fontWeight: 600,
//                                   }}
//                                 >
//                                   Our weather app provides users with essential weather data including temperature, pressure, and humidity, alongside features such as wind speed and precipitation forecasts.
//                                 </p>
//                               </h6>
//                               <div
//                                 className="project--lang"
//                                 style={{
//                                   background: "#fbd9ad",
//                                   color: "#b061df",
//                                   fontWeight: 600,
//                                 }}
//                               >
//                                 HTML, CSS
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>
//                         <Col md={3} className="col-sm-12 col-md-4">
//                           <Fade bottom>
//                             <div
//                               key={1}
//                               className="singleProject"
//                               style={{
//                                 backgroundColor: "rgb(142 70 186 / 31%)",
//                                 border: "1px solid",
//                               }}
//                             >
//                               <div className="projectContent">
//                                 <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                                   DailyNews Website
//                                 </h5>
//                                 <img src={calendar} alt={calendar} />
//                                 <div className="project--showcaseBtn">
//                                   <a
//                                     href={
//                                       "https://github.com/girishmore2004/DailyNews"
//                                     }
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className={"iconBtn"}
//                                     aria-labelledby={`code`}
//                                   >
//                                     <FaCode
//                                       id={`code`}
//                                       className={"icon"}
//                                       aria-label="Code"
//                                     />
//                                   </a>
//                                 </div>
//                               </div>
//                               <h6>
//                                 <p
//                                   className="project--desc"
//                                   style={{
//                                     background: "#fbd9ad",
//                                     color: "#b061df",
//                                     fontWeight: 600,
//                                   }}
//                                 >
//                                   Our daily news website utilizes APIs to offer a diverse range of up-to-date news across multiple sections, from politics to technology. With intuitive navigation and dynamic content, users can effortlessly stay informed on current events, ensuring convenience and relevance in their news consumption experience.
//                                 </p>
//                               </h6>
//                               <div
//                                 className="project--lang"
//                                 style={{
//                                   background: "#fbd9ad",
//                                   color: "#b061df",
//                                   fontWeight: 600,
//                                 }}
//                               >
//                                 HTML, CSS, JavaScript, React
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>
//                         <Col md={3} className="col-sm-12 col-md-4">
//                           <Fade bottom>
//                             <div
//                               key={1}
//                               className="singleProject"
//                               style={{
//                                 backgroundColor: "rgb(142 70 186 / 31%)",
//                                 border: "1px solid",
//                               }}
//                             >
//                               <div className="projectContent">
//                                 <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                                 Basic Bank System using Oops - Code
//                                 </h5>
//                                 <img src={calculator} alt={calculator} />
//                                 <div className="project--showcaseBtn">
//                                   <a
//                                     href={
//                                       "https://github.com/girishmore2004/Basic-Bank-System-using-Oops-in-Java"
//                                     }
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className={"iconBtn"}
//                                     aria-labelledby={`code`}
//                                   >
//                                     <FaCode
//                                       id={`code`}
//                                       className={"icon"}
//                                       aria-label="Code"
//                                     />
//                                   </a>
//                                 </div>
//                               </div>
//                               <h6>
//                                 <p
//                                   className="project--desc"
//                                   style={{
//                                     background: "#fbd9ad",
//                                     color: "#b061df",
//                                     fontWeight: 600,
//                                   }}
//                                 >
//                                   This Java project implements a simple basic bank system allowing users to create savings accounts, check balances, deposit and withdraw funds, and apply interest. Utilizing object-oriented programming principles, it provides essential banking functionalities in a straightforward command-line interface.
//                                 </p>
//                               </h6>
//                               <div
//                                 className="project--lang"
//                                 style={{
//                                   background: "#fbd9ad",
//                                   color: "#b061df",
//                                   fontWeight: 600,
//                                 }}
//                               >
//                                 Java
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>
//                       </Row>
//                     </Col>
//                   </Row>
//                 </Container>
//               </Container>
//             </div>
//           </div>
//         </Container>
//       </Container>
//     </section>
//   );
// }

import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import pp from "../../images/portfolio1.png";
import ac from "../../images/weather.png";
import calculator from "../../images/onboarding.png";
import calendar from "../../images/dailynews.png";
import res from "../../images/res.png"
import { FaCode } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    image: pp,
    link: "https://github.com/girishmore2004/portfolio-Girish",
    description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
    languages: "HTML, CSS, SCSS, React, JavaScript"
  },
  {
    id: 2,
    title: "Weather Website",
    image: ac,
    link: "https://github.com/girishmore2004/Weather",
    description: "Our weather app provides users with essential weather data including temperature, pressure, and humidity, alongside features such as wind speed and precipitation forecasts.",
    languages: "HTML, CSS"
  },
  {
    id: 3,
    title: "DailyNews Website",
    image: calendar,
    link: "https://github.com/girishmore2004/DailyNews",
    description: "Our daily news website utilizes APIs to offer a diverse range of up-to-date news across multiple sections, from politics to technology. With intuitive navigation and dynamic content, users can effortlessly stay informed on current events, ensuring convenience and relevance in their news consumption experience.",
    languages: "HTML, CSS, JavaScript, React"
  },
  {
    id: 4,
    title: "Basic Bank System using Oops - Code",
    image: calculator,
    link: "https://github.com/girishmore2004/Basic-Bank-System-using-Oops-in-Java",
    description: "This Java project implements a simple basic bank system allowing users to create savings accounts, check balances, deposit and withdraw funds, and apply interest. Utilizing object-oriented programming principles, it provides essential banking functionalities in a straightforward command-line interface.",
    languages: "Java"
  },
  {
    id: 5,
    title: "Restaurent Website",
    image: res,
    link: "https://github.com/girishmore2004/restaurent",
    description: "Developed a fully responsive restaurant website using the MERN stack with robust authentication features for secure user interactions.",
    languages: "MERN Stack"
  }
];

const Project = ({ project }) => {
  return (
    <Col md={4} className="col-sm-12 mb-4">
      <Fade bottom>
        <div
          className="singleProject"
          style={{
            backgroundColor: "#1a1a1a",
            border: "2px solid aqua",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div className="projectContent">
            <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
            <img src={project.image} alt={project.title} style={{ border: "2px solid aqua" }} />
            <div className="project--showcaseBtn mt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="iconBtn"
                aria-labelledby="code"
              >
                <FaCode id="code" className="icon" aria-label="Code" style={{ fontSize: "1.5rem" }} />
              </a>
            </div>
          </div>
          <div
            className="project--desc"
            style={{
              background: "#333",
              color: "#fbd9ad",
              padding: "10px",
              fontWeight: 600
            }}
          >
            <p>{project.description}</p>
            <div style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600, padding: "5px" }}>
              {project.languages}
            </div>
          </div>
        </div>
      </Fade>
    </Col>
  );
};

export default function ProjectPage() {
  return (
    <section className="home-section" style={{ padding: "60px 0" }}>
      <Container fluid id="home"> 
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#282828", marginBottom: "40px", boxShadow: "0px 0px 10px aqua" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "aqua" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about" style={{ padding: "20px 0", marginBottom: "20px" }}>
            <Row>
              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
}