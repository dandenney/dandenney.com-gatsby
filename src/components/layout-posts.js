/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Styled, ThemeProvider } from 'theme-ui';

import Footer from './footer';
import Header from './header';

import theme from 'gatsby-plugin-theme-ui';

const PostLayout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query PostsSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = pageContext.frontmatter;

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          backgroundColor: `#fbfcfc`,
        }}
      >
        <article
          style={{
            margin: `0 auto`,
            maxWidth: 700,
            padding: `32px`,
            position: `relative`,
            zIndex: 1,
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          {children}
        </article>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
