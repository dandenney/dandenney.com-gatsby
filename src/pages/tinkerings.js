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
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const tinkeringPath = node.frontmatter.path.split('/')[1];
          const tinkeringDate = new Date(node.frontmatter.date);

          if (tinkeringPath === 'tinkerings') {
            return (
              <>
                <Link key={node.id} to={node.frontmatter.path}>
                  {node.frontmatter.title}
                </Link>
                <p>{node.frontmatter.summary}</p>
                <time dateTime={tinkeringDate}>
                  {tinkeringDate.toDateString()}
                </time>
              </>
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
