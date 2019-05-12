import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import Intro from 'components/home/intro';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dan Denney | Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Intro />
  </Layout>
);

export default IndexPage;
