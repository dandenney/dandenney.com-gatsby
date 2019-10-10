import React from 'react';
import { Link } from "gatsby"

import Layout from 'components/layout';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dan Denney | Exploring NYC"
      keywords={[`new york`, `travel`]}
    />
    <h1>Exploring NYC</h1>
    <p>As a new "New Yorker", I'm eager to explore and to share.</p>

    <Link to="/exploring-nyc/bars">Bars</Link>
  </Layout>
);

export default IndexPage;