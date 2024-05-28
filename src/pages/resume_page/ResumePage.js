import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai"; 
import pdf from "../../assets/Girish_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";
import React, { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

 const resumeLink ="https://raw.githubusercontent.com/girishmore2004/Girish_Portfolio/main/src/assets/Girish_CV.pdf";  
function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container id="home"> 
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#282828",boxShadow:"0px 0px 10px aqua" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "aqua" }}>RESUME</h1>
              </Zoom>
            </div>
            <div className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
              <div className="resume d-flex justify-content-center" >
                <Document file={resumeLink} style={{border:"2px solid aqua" , boxShadow:"0px 0px 40pxx aqua"}}>
                  <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4}  />
                </Document>
              </div>
              <div className="resume d-flex justify-content-center" >
                <Document file={resumeLink} >
                  <Page pageNumber={2} scale={width > 786 ? 1.6 : 0.4}  />
                </Document>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
