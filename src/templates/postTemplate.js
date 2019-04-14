import React from 'react';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Post = styled.article`
  color: #222222;
  font-family: canada-type-gibson, sans-serif;
  line-height: 1.5;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 0;
  }

  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    margin-bottom: 0;
  }

  h2 + p,
  h3 + p,
  h4 + p {
    margin-top: 0.5rem;
  }

  h2,
  h3 {
    font-size: 1.25rem;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow-x: scroll;
  }

  .date {
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
    margin: 0 auto;
    max-width: 680px;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 1000px) {
    max-width: 800px;

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />

      <Post>
        <h1>{frontmatter.title}</h1>
        <p className="date">{frontmatter.date}</p>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
