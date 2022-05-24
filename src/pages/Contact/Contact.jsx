import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import { ContactForm } from './components';

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | DannyK</title>
        <meta
          name="description"
          content="Leave a message or schedule a google meet."
        />
        <meta property="og:title" content="Get in touch with Danny" />
      </Helmet>
      <ContactForm />
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
