import React from 'react';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({data}) => {
  console.log(data);

  return(
    <Layout>
      <SEO title="Posts" keywords={[`gatsby`, `application`, `react`]} />
      
      {data.allMarkdownRemark.edges.map(({ node }) => {
        
        const postPath = node.frontmatter.path.split('/')[1];

        if (postPath === 'posts') {
          return(
            <Link key={node.id} to={node.frontmatter.path}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
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
