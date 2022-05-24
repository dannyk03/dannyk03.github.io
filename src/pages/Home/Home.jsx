import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Content, CTA } from './components';
import { BackToTop } from '../../common/components/UIElements';
import useHttpClient from '../../common/hooks/http-hook';

const Home = () => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/project/projects`
        );
        setProjects(responseData);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <Helmet>
        <title>DannyK</title>
        <meta
          name="description"
          content="Hi! I'm Danny - a software engineer and a passionate learner. I love participating in hackathons, contributing to open source projects and find pleasure in helping folks around me."
        />
        <meta property="og:title" content="Danny K" />
      </Helmet>
      <Hero />
      <Content projects={projects} isLoading={isLoading} error={error} />
      <CTA />
      <BackToTop />
    </React.Fragment>
  );
};

export default Home;
