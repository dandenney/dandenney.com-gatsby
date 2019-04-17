import React from 'react';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Post = styled.article`
  padding: 2rem;

  pre {
    margin-left: 50%;
    margin-right: 0;
    padding: 1rem;
    transform: translateX(-50%);
    width: 99vw;
  }

  p > code,
  li > code {
    background: #f7f8f8;
    border: 1px solid #eef0f1;
    border-radius: 2px;
    padding: 2px 4px;
  }

  .date {
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 680px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 800px;
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
