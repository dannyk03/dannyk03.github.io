import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import { Projects } from './components';
import useHttpClient from '../../common/hooks/http-hook';

const Work = () => {
  const { isLoading, error, sendRequest, show } = useHttpClient();
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
    <Fragment>
      <Helmet>
        <title>Work | dannyk</title>
        <meta name="description" content="Get to know what I do." />
        <meta property="og:title" content="Danny K's Work" />
        <meta property="og:description" content="Get to know what I do." />
      </Helmet>
      <Projects
        projects={projects}
        isLoading={isLoading}
        error={error}
        show={show}
      />
      <BackToTop />
    </Fragment>
  );
};

export default Work;
