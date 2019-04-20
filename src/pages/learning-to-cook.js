import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NavList from '../components/NavList';

const LearningToCookPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blips" keywords={[`gatsby`, `application`, `react`]} />

      <NavList bgcolor="#ffffff">
        <h1>Learning to Cook</h1>
        <p>Here's what I've been learning as I strive to be a culinarian.</p>
      </NavList>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            summary
          }
        }
      }
    }
  }
`;

NavList.PropTypes = {
  bgcolor: PropTypes.string,
};

NavList.defaultProps = {
  bgcolor: 'var(--color-bg)',
};

export default LearningToCookPage;
