import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal"; 
import pp from "../../images/portfolio1.png"; 
import ac from "../../images/weather.png"; 
import calculator from "../../images/onboarding.png";
import calendar from "../../images/dailynews.png";  
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Personal Portfolio
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/girishmore2004/portfolio-Girish"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Welcome to my personal portfolio. Explore my
                                  work, skills, and achievements in a concise
                                  and visually appealing format. Get a glimpse
                                  of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Weather Website
                                </h5>
                                <img src={ac} alt={ac} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/girishmore2004/Weather"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Our weather app provides users with essential weather data including temperature, pressure, and humidity, alongside features such as wind speed and precipitation forecasts.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  DailyNews Website
                                </h5>
                                <img src={calendar} alt={calendar} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/girishmore2004/DailyNews"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Our daily news website utilizes APIs to offer a diverse range of up-to-date news across multiple sections, from politics to technology. With intuitive navigation and dynamic content, users can effortlessly stay informed on current events, ensuring convenience and relevance in their news consumption experience.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript, React
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                Basic Bank System using Oops - Code
                                </h5>
                                <img src={calculator} alt={calculator} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/girishmore2004/Basic-Bank-System-using-Oops-in-Java"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  This Java project implements a simple basic bank system allowing users to create savings accounts, check balances, deposit and withdraw funds, and apply interest. Utilizing object-oriented programming principles, it provides essential banking functionalities in a straightforward command-line interface.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Java
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

