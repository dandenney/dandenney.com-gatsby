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

import { Box, Flex } from '@theme-ui/components';

import Footer from './footer';
import Header from './header';

import SpotifyEmbed from 'components/spotify-embed';

import theme from 'gatsby-plugin-theme-ui';

const PostLayout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SongsSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const {
    artist,
    title,
    source,
    spotifyUrl,
    thought,
  } = pageContext.frontmatter;

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Flex
          as="section"
          sx={{
            flexDirection: ['column', null, null, 'row'],
            justifyContent: 'center',
            margin: `0 auto`,
            padding: `32px 16px`,
            position: `relative`,
            zIndex: 1,
          }}
        >
          <SpotifyEmbed url={spotifyUrl} />
          <Box
            as="article"
            sx={{
              pl: [null, null, null, 24],
            }}
          >
            <Styled.h1
              style={{
                marginBottom: 0,
              }}
            >
              {title}
            </Styled.h1>
            <Styled.h4
              style={{
                marginTop: '8px',
              }}
            >
              {artist}
            </Styled.h4>
            <Styled.blockquote
              style={{
                fontSize: '20px',
                maxWidth: '700px',
              }}
            >
              {thought}
            </Styled.blockquote>
            {children}
            <p>
              <Styled.a href={source}>Lyric source</Styled.a>
            </p>
          </Box>
        </Flex>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
