import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../components/icon';

import Dan from '../images/dan.svg';
import IconCodepen from '../images/icons/logo-codepen.svg';
import IconGithub from '../images/icons/logo-github.svg';
import IconTwitter from '../images/icons/logo-twitter.svg';
import IconInstagram from '../images/icons/logo-instagram.svg';
import IconPinterest from '../images/icons/logo-pinterest.svg';
import IconSpotify from '../images/icons/logo-spotify.svg';

const HomeStyles = styled.section`
  background: var(--color-bg);
  margin: 0 auto;
  min-height: calc(100vh - 132px);
  padding: 2rem;

  @media screen and (min-width: 768px) {
    max-width: 100%;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1000px) {
    align-items: center;
    display: flex;
    padding-bottom: 0;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 1400px) {
    max-width: 1440px;

    h1 {
      font-size: 4.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const DanStyles = styled.div`
  flex-shrink: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    svg {
      height: calc(40vh);
      width: auto;
    }
  }

  @media screen and (min-width: 1000px) {
    padding-left: 3rem;

    svg {
      height: calc(100vh - 170px);
      width: auto;
    }
  }
`;

const SocialLinks = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .socialLinks {
    align-items: center;
    display: flex;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    align-items: center;
    border: 2px solid #f2e9ff;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    height: 48px;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
    width: 48px;

    &:active,
    &:focus,
    &:hover {
      background: none;
      box-shadow: none;
      transform: scale(1.2);
    }

    &:not(:first-of-type) {
      margin-left: 0.25rem;
    }

    @media screen and (min-width: 480px) {
      &:not(:first-of-type) {
        margin-left: 0.5rem;
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dan Denney | Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
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

        <SocialLinks>
          <p>On the socials:</p>

          <div className="socialLinks">
            <a href="https://codepen.io/dandenney">
              <Icon size={24} color="#131417" svg={<IconCodepen />} />
            </a>
            <a href="https://github.com/dandenney">
              <Icon size={24} color="#171515" svg={<IconGithub />} />
            </a>
            <a href="https://twitter.com/dandenney">
              <Icon size={24} color="#1ca1f2" svg={<IconTwitter />} />
            </a>
            <a href="https://www.pinterest.com/dandenney">
              <Icon size={24} color="#e60022" svg={<IconPinterest />} />
            </a>
            <a href="https://www.instagram.com/dandenney">
              <Icon size={24} color="#df4856" svg={<IconInstagram />} />
            </a>
            <a href="https://open.spotify.com/user/dndnny?si=67GhhUvBSO-zRzvbIimEgA">
              <Icon size={24} color="#1dd761" svg={<IconSpotify />} />
            </a>
          </div>
        </SocialLinks>
      </div>

      <DanStyles>
        <Dan />
      </DanStyles>
    </HomeStyles>
  </Layout>
);

export default IndexPage;
