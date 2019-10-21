/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main
      sx={{
        bg: `background`,
        minHeight: `calc(100vh - 250px)`,
        px: 16,
      }}
    >
      <h1
        sx={{
          color: `heading`,
          fontFamily: `body`,
          fontSize: `calc(3vw + 3vh + 2.5vmin)`,
          fontWeight: `heading`,
          margin: `4rem auto 2rem`,
          maxWidth: `1200px`,
        }}
      >
        Hi! I'm Dan Denney and I'm a front-end developer at{' '}
        <Styled.a href="https://www.datacamp.com">DataCamp</Styled.a>.
      </h1>
      <Styled.p
        sx={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `700px`,
        }}
      >
        I have been working closely with designers and writing HTML/CSS and JS
        since 2008ish. In 2009,{' '}
        <Styled.a href="https://twitter.com/cherriedenney">Cherrie</Styled.a>{' '}
        and I founded{' '}
        <Styled.a href="http://frontenddesignconference.com">
          Front-End Conf
        </Styled.a>
        , and our friends from{' '}
        <Styled.a href="http://unmatchedstyle.com">Unmatched Style</Styled.a>{' '}
        are keeping it going these days.
      </Styled.p>
    </main>
  </Layout>
);

export default IndexPage;
