/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'theme-ui';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

import theme from 'gatsby-plugin-theme-ui';

import ImageFavicon from 'images/favicon.ico';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={ImageFavicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
