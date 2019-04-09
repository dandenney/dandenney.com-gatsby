import { Link, graphql } from "gatsby"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({data}) => {
  console.log(data);

  return(
    <Layout>
      <SEO title="Posts" keywords={[`gatsby`, `application`, `react`]} />
      
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.frontmatter.path}>
          <h3>
            {node.frontmatter.title}{" "}
            <span
              css={css`
                  color: #bbb;
                `}
            >
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.summary}</p>
        </Link>
      ))}

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
