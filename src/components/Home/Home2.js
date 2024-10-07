import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey began with a strong foundation in engineering, data analysis, and strategic consulting. 🌱
              <br />
              <br />I am currently pursuing
              <i>
                <b className="purple"> a degree in Generalist Engineering at Ecole Centrale Casablanca </b>
              </i>
              <br />
              <br />
              My fields of interest include &nbsp;
              <i>
                <b className="purple"> Market Strategy Consulting, Data Analytics, Business Intelligence, and Digital Innovation, </b>
                with a keen interest in{" "}
                <b className="purple">
                  AI-driven solutions and data visualization.
                </b>
              </i>
              <br />
              <br />
            I am also passionate about applying data-driven approaches to improve <b className="purple">decision-making</b> and leveraging <i>
              <b className="purple">
                {" "}
                innovative technologies
              </b>
            </i> to solve complex challenges.

              I am also passionate about applying data-driven approaches to improve <b className="purple">decision-making</b> and leveraging <i>
                <b className="purple">
                  {" "}
                  innovative technologies to solve complex challenges.
                </b>
              </i> 

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "300px" }} />

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/badreddinesaadioui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/saadiouibadr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
             <li className="social-icons">
                <a
                  href="https://github.com/ikramehafsi" // Update with her GitHub profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ikrame-hafsi/" // Correct LinkedIn profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
