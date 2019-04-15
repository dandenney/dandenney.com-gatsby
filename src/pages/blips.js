import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NavList from '../components/NavList';

const BlipsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blips" keywords={[`gatsby`, `application`, `react`]} />

      <NavList>
        <h1>Blips</h1>
        <p>Short, journal-type posts. Kinda like a personal Twitter.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const blipPath = node.frontmatter.path.split('/')[1];
          const blipDate = new Date(node.frontmatter.date);

          if (blipPath === 'blips') {
            return (
              <Link key={node.id} to={node.frontmatter.path}>
                <span>{node.frontmatter.title}</span>
                <time dateTime={blipDate}>{blipDate.toDateString()}</time>
              </Link>
            );
          }

          return null;
        })}
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

export default BlipsPage;
