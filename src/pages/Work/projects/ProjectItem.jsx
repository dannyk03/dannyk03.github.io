import React, { useEffect, useCallback, useState, Fragment } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DztImageGalleryComponent from "reactjs-image-gallery";

import {
  BackToTop,
  ErrorModal,
  Video
} from '../../../common/components/UIElements';
import { LoadingSpinner } from '../../../common/components/UIElements/loadingAnimations';
import './ProjectItem.scss';
import useHttpClient from '../../../common/hooks/http-hook';

const ProjectItem = () => {
  const { isLoading: apiLoading, error, sendRequest } = useHttpClient();
  const [readme, setReadme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [project, setProject] = useState(null);
  const { repoName } = useParams();

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/project/projects/${repoName}`
      );
      setProject(responseData);
      const data = await axios.get(
        `https://raw.githubusercontent.com/${responseData.readmeUrl}`
      );
      setIsLoading(false);
      setReadme(data.data);
    } catch (error) {
      setIsLoading(false);
    }
  }, [repoName]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const projectTitle = project ? project.title : repoName
  return (
    <Fragment>
      <Helmet>
        <title>{projectTitle} | dannyk03</title>
        <meta name="description" content={`See my ${projectTitle} project`} />
        <meta property="og:title" content={projectTitle} />
        <meta
          property="og:description"
          content={`See my ${projectTitle} project`}
        />
        <meta property="twitter:title" content={projectTitle} />
        <meta
          property="twitter:description"
          content={`See my ${projectTitle} project`}
        />
      </Helmet>
      <ErrorModal
        show={show}
        onHide={() => setShow(false)}
        onClick={() => setShow(false)}
        error={error}
      />
      <Container>
        <div className="project-item">
          <h2>{projectTitle}</h2>
          <div className="project-item__video">
            <Video repoName={repoName} />
          </div>
          {/* <em>
            <span style={{ color: 'red' }}>*</span> This page is the README file
            of{' '}
            <a
              href={`https://github.com/dannyk03/${repoName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repoName}
            </a>{' '}
            Github repository.
          </em> */}
          {isLoading && <LoadingSpinner />}
          {!isLoading && project && (
            <div>
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{ marginBottom: '20px' }}
              />
              <Row>
                <Col>
                  {project.techs && (
                    <div className="project-card__details__tech-stack">
                      {project.techs.map((tech) => (
                        <OverlayTrigger
                          key={tech.title}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-top`}>{tech.title}</Tooltip>
                          }
                        >
                          <img
                            style={{ background: `${tech.bg}` }}
                            src={tech.url}
                            alt={tech.title}
                            loading="lazy"
                          />
                        </OverlayTrigger>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
              <div className="project-item__details">
                {readme && <Markdown children={readme} />}
              </div>
              {project.images.length > 0 && <DztImageGalleryComponent images={project.images} />}
            </div>
          )}
        </div>
        <BackToTop />
      </Container>
    </Fragment>
  );
};

export default ProjectItem;
