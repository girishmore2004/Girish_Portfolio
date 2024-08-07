 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contactus = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const API_URL="http://172.25.69.14"
          const response = await fetch(`${API_URL}/api/contact/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          const data = await response.json();
          if (response.ok) {
              alert('Message sent successfully');
              setFormData({ name: '', email: '', message: '' });
          } else {
              alert('Error sending message: ' + data.message);
          }
      } catch (error) {
          alert('Error: ' + error.message);
      }
    };

    return (
      <div>
        <Container fluid className="certificate-section" id="about">
          <Container>
            <Row>
              <Col
                md={12}
                className="certificate-description d-flex justify-content-start"
              >
                <Zoom left cascade>
                  <h1 className="aboutme-heading">Contact me</h1>
                </Zoom>
              </Col>
              <Col md={12} id="contact" className="mt-3">
                <Row>
                  <Col md={4}>
                    <div className="contacts-form" data-aos="fade-up">
                      <form>
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="username" className="label-class">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-input input-class"
                            id="username"
                            name="name"
                            aria-describedby="emailHelp"
                            placeholder="Enter your name"
                            value={formData.name || ""}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="email" className="label-class">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-input input-class"
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={formData.email || ""}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="userMessage" className="label-class">
                            Message
                          </label>
                          <textarea
                            className="form-message input-class"
                            id="userMessage"
                            name="message"
                            rows="3"
                            placeholder="Enter message"
                            value={formData.message || ""}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="submit-btn">
                          <button
                            type="submit"
                            className="submitBtn"
                            onClick={handleSubmit}
                          >
                            Submit
                            <AiOutlineSend className="send-icon" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="contacts-details">
                      <a
                        href={`mailto:girishmore097@gmail.com`}
                        className="personal-details"
                      >
                        <div className="detailsIcon">
                          <FiAtSign />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          girishmore097@gmail.com
                        </p>
                      </a>
                      <a
                        href={`tel:+91-9890564620`}
                        className="personal-details"
                      >
                        <div className="detailsIcon">
                          <FiPhone />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>+91-9890564620</p>
                      </a>
                      <a
                       href="https://www.google.com/maps/place/%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A4%AF%E0%A5%8D%E0%A4%AF%E0%A4%BE+%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF+%E0%A4%A4%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8+%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE/@21.1232417,79.0515125,15z/data=!4m14!1m7!3m6!1s0x3bd4c070e8004c25:0xdcfcc32c89158bc3!2z4KS14KS_4KS24KWN4KS14KWH4KS24KWN4KS14KSw4KSv4KWN4KSv4KS-IOCksOCkvuCkt-CljeCkn-CljeCksOClgOCkryDgpKTgpILgpKTgpY3gpLDgpJzgpY3gpJ7gpL7gpKgg4KS44KSC4KS44KWN4KSl4KS-!8m2!3d21.1232417!4d79.0515125!16zL20vMDRseXA5!3m5!1s0x3bd4c070e8004c25:0xdcfcc32c89158bc3!8m2!3d21.1232417!4d79.0515125!16zL20vMDRseXA5?entry=ttu"
                                             className="personal-details"
                                           >
                                             <div className="personal-details">
                                               <div className="detailsIcon">
                                                 <HiOutlineLocationMarker />
                                               </div>
                                               <p style={{ color: "#fbd9ad" }}>
                                                 VNIT , Nagpur , India.
                                               </p>
                                             </div>
                                           </a>
                                         </div>
                                         {/* <div className="contact-map">
                                           <iframe
                                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.833618785371!2d90.41265112695315!3d24.036931700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db9832166e63%3A0x96050e560e6dc4fa!2sBOF%20Central%20Mosque!5e0!3m2!1sen!2sbd!4v1695023265917!5m2!1sen!2sbd"
                                             frameBorder="0"
                                             allowFullScreen=""
                                             aria-hidden="false"
                                             title="Contact Me"
                                             tabIndex="0"
                                             loading="lazy"
                                             className=""
                                           ></iframe>
                                         </div> */}
                                       </Col>
                                     </Row>
                                   </Col>
                                 </Row>
                               </Container>
                             </Container>
                           </div>
                         );
                       }
                       export default Contactus














                       