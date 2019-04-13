import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({data}) => {
  return(
    <Layout>
      <SEO title="Tinkerings" keywords={[`gatsby`, `application`, `react`]} />
      
      {data.allMarkdownRemark.edges.map(({ node }) => {
        
        const tinkeringPath = node.frontmatter.path.split('/')[1];
        const tinkeringDate = new Date(node.frontmatter.date);

        if (tinkeringPath === 'tinkerings') {
          return(
            <Link key={node.id} to={node.frontmatter.path}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {tinkeringDate.toDateString()}
                </span>
              </h3>
              <p>{node.summary}</p>
            </Link>
          )
        }

        return null;
      })}

    </Layout>
  )
}

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
`

export default PostsPage
