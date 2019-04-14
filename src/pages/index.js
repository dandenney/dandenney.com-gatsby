import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Dan from '../images/dan.svg';

const HomeStyles = styled.section`
  margin: 0 auto;
  max-width: 880px;
  padding: 2rem;

  @media screen and (min-width: 1200px) {
    align-items: center;
    display: flex;
    max-width: 100%;
  }
`;

const DanStyles = styled.div`
  flex-shrink: 0;
  text-align: center;

  @media screen and (min-width: 1200px) {
    padding-left: 3rem;

    svg {
      height: calc(100vh - 216px);
      width: auto;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeStyles>
      <div>
        <h1>
          Hi! I'm Dan Denney and I'm a front-end developer at{' '}
          <a href="https://www.datacamp.com">DataCamp</a>.
        </h1>

        <p>
          I have been working closely with designers and writing HTML/CSS and JS
          since 2008ish. In 2009,
          <a href="https://twitter.com/cherriedenney">Cherrie</a> and I founded{' '}
          <a href="http://frontenddesignconference.com">Front-End Conf</a>, and
          our friends from{' '}
          <a href="http://unmatchedstyle.com">Unmatched Style</a> are keeping it
          going these days.
        </p>
      </div>

      <DanStyles>
        <Dan />
      </DanStyles>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
