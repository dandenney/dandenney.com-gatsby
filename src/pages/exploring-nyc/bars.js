import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dan Denney | Exploring NYC"
      keywords={[`new york`, `travel`]}
    />
    <h1>Bars</h1>
    <p>Places that I enjoy my popular pasttime.</p>
  </Layout>
);

export default IndexPage;