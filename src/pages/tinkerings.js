import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NavList from '../components/NavList';

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tinkerings" keywords={[`gatsby`, `application`, `react`]} />

      <NavList>
        <h1>Tinkerings</h1>
        <p>
          Small projects that I get to abandon without guilt because I posted
          them.
        </p>

        {data.allMarkdownRemark.edges.map(({ node }) => {
          const tinkeringPath = node.frontmatter.path.split('/')[1];
          const tinkeringDate = new Date(node.frontmatter.date);

          if (tinkeringPath === 'tinkerings') {
            return (
              <Link key={node.id} to={node.frontmatter.path}>
                <span>{node.frontmatter.title}</span>
                <p>{node.frontmatter.summary}</p>
                <time dateTime={tinkeringDate}>
                  {tinkeringDate.toDateString()}
                </time>
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

export default PostsPage;
