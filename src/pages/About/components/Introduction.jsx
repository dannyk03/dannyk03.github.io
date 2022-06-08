import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaMedium, FaGithub } from 'react-icons/all';

import { CustomButton } from '../../../common/components/UIElements';

import './Introduction.scss';

const Introduction = () => {
  return (
    <div id="introduction">
      <Container>
        <div className="introduction">
          <Row>
            <Col sm>
              <div className="introduction__img">
                <img
                  src="https://i.ibb.co/jLWny7n/1589192142126.jpg"
                  style={{ borderRadius: '50%', padding: '100px' }}
                  alt="dannyk"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col className="introduction__short mt-4" sm>
              <div>
                <h1>Danny K</h1>
                <p>
                  Full Software Engineer and a passionate
                  learner.
                </p>
              </div>
              <div>
                <h6>Email Me</h6>
                <a href="mailto:danny.kaganovitch@gmail.com">
                  <span className="introduction__short__email">
                    danny.kaganovitch@gmail.com
                  </span>
                </a>
              </div>
              <div className="introduction__short__links">
                <Row>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/work">
                      <CustomButton className="work">Work</CustomButton>
                    </Link>
                  </Col>
                  {/* <Col lg={3} md={6} xs={6}>
                    <Link to="/blogs">
                      <CustomButton className="blogs">Blogs</CustomButton>
                    </Link>
                  </Col> */}
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/contact">
                      <CustomButton className="contact">Contact</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/profiles">
                      <CustomButton className="profiles">Profiles</CustomButton>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="introduction__short__social">
                <h6>Follow me on</h6>
                <div>
                  <Link to="/profiles/twitter">
                    <FaTwitter className="social-icon" />
                  </Link>
                  <Link to="/profiles/github">
                    <FaGithub className="social-icon" />
                  </Link>
                  <Link to="/profiles/medium">
                    <FaMedium className="social-icon" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="introduction__brief">
            <p>
              Hi there!
              <br/> 
              Thanks for visiting my portfolio.
              <br /> I'm{' '}
              <a
                href="https://www.linkedin.com/in/dannykg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Danny Kaganovitch.
              </a>
              <br />
              <br />
              I have worked on a wide range of technologies and
              have worked on projects ranging from small to large scale.
              With in-depth knowledge in C/C++, Python, Java, I am specialized in Javascript based languages and frameworks. I am capable of designing complex systems from ground up.
              <br />
              I am committed to
              Drawing use-case diagrams closely connected with actual clients,
              Pulling robust db schema, architecturing whole system,
              Composing tests cases for each use-case,
              Writing high quality code with latest standard,
              Maintaining and extending system module by module.
              <br /> 
              <br /> 
              <p>I am proficient in many technologies but below are the most powerful skills,</p>
              <ul>
                <li>Backend - <b>Express/NestJS</b></li>
                <li>Frontend - <b>VueJs and React, React Native, ElectronJS</b></li>
                <li>DB - <b>MongoDB, MySQL and PostgreSQL</b></li>
                <li>DevOps - <b>AWS, GCP</b></li>
              </ul>
              <br />
              I have worked with different sizes of teams and companies all around the world, and good at collaborating remotely.
              I would be happy to add value to your team, product and company for great success.

              <br />

              <br />I am a self-motivated and self-driven individual who is always looking
              for new challenges and opportunities. I love participating in
              hackathons and engaging in communities.

            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
