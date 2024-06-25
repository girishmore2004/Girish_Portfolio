
import React, { useState } from "react"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import pp from "../../images/gcloud.png";
import matlab from "../../images/matlab.jpg" ;
import morgon from "../../images/morgon.jpg";
import excel from "../../images/excel.jpg";
import wordpress from "../../images/wordpress.png"

const certificates = [
  {
    id: 1,
    title: "Build and Secure Networks in Google Cloud",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5793983?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 2,
    title: "Create and Manage Cloud Resources",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5783886?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 3,
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5501533?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 4,
    title: "Google Cloud Computing Foundations: Data, ML and AI in Google Cloud",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5753575?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 5,
    title: "Google Cloud Computing Foundations: Networking",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5743173?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 6,
    title: "Level 3 Gen AI : Prompt Engineering",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5577592?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 7,
    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5801559?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 8,
    title: "Perform Foundational Infrastructure Tasks in Google Cloud",
    image: pp,
    link: "https://www.cloudskillsboost.google/public_profiles/2a29f203-59f5-4f27-a13e-ae4fd573a31d/badges/5793219?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    isPDF: false
  },
  {
    id: 9,
    title: "Bussiness Analysis & Process Management ",
    image: pp,
    link: "https://www.coursera.org/learn/business-analysis-process-management/home/week/1",
    isPDF: false
  },
  {
    id: 10,
    title: "Create a Website Using Wordpress : Free Hosting & Sub-domain ",
    image: wordpress,
    link: "https://www.coursera.org/learn/create-a-website-using-wordpress-free-hosting-subdomain/home/week/1",
    isPDF: false
  },
  {
    id: 11,
    title: "Introduction to Microsoft Excel",
    image: excel,
    link: "https://www.coursera.org/learn/introduction-microsoft-excel/home/week/1",
    isPDF: false
  },
  {
    id: 12,
    title: "InvestMent Banking job Simulation Virtual Internship Certificate by JP Morgon",
    image: morgon,
    link: "https://raw.githubusercontent.com/girishmore2004/Girish_Portfolio/main/src/assets/InvestMent_BAnking_job_Simulation.pdf",
    isPDF: true
  },
  {
    id: 13,
    title: "MATLAB Foundation Certificate",
    image: matlab,
    link: "https://raw.githubusercontent.com/girishmore2004/Girish_Portfolio/main/src/assets/MATLAB_FoundationCertificate.pdf",
    isPDF: true
  }
];
 
const Certificate = ({ certificate }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    border: "2px solid aqua",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    overflow: "hidden",
    transform: isHovered ? "scale(1.05)" : "",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : ""
  };

  const certificateTitleStyle = {
    color: "#fbd9ad",
    marginBottom: "10px"
  };

  const descriptionStyle = {
    background: "#333",
    color: "#fbd9ad",
    padding: "10px",
    borderRadius: "0 0 10px 10px"
  };

  return (
    <Card
      className="singleProject"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img variant="top" src={certificate.image} alt="Certificate" style={{border:"2px solid aqua"}} />
      <Card.Body>
        <Card.Title style={certificateTitleStyle}>{certificate.title}</Card.Title>
        <div className="project--showcaseBtn mt-2">
          <a href={certificate.link} target="_blank" rel="noreferrer" className="iconBtn" aria-labelledby="code">
            <FaCode id="code" className="icon" aria-label="Code" style={{ fontSize: "1.5rem" }} />
          </a>
        </div>
      </Card.Body>
      <Card.Footer style={descriptionStyle}>
        {certificate.description && <p>{certificate.description}</p>}
        {certificate.language && <div>{certificate.language}</div>}
      </Card.Footer>
    </Card>
  );
};

const CertificatePage = () => {
  return (
    <section className="home-section" style={{ padding: "60px 0" }}>
      <Container fluid id="home1"> 
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#282828", marginBottom: "40px", boxShadow:"0px 0px 10px aqua" }}
          >
          {/* #fbd9ad  rgb(134 61 176) */}
            <Zoom left cascade>
              <h1 style={{ color: "aqua" }}>CERTIFICATES</h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about" style={{ padding: "20px 0", marginBottom: "20px" }}>
            <Row>
              {certificates.map((certificate) => (
                <Col key={certificate.id} md={4} className="col-sm-12 mb-4">
                  <Fade bottom >
                    <Certificate certificate={certificate} />
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
};

export default CertificatePage;