import React from 'react';
import styled from '@emotion/styled';

import SiteNav from './sitenav';

import gatsbyicon from '../images/gatsby-icon.png';

const FooterStyles = styled.footer`
  border-top: 1px solid var(--color-accent);
  overflow: hidden;
  padding: 1rem 2rem 2.5rem;
  position: relative;
  text-align: center;

  nav {
    justify-content: center;
  }

  p {
    font-size: 0.75rem;
  }

  .gatsby-icon {
    bottom: -20px;
    left: calc(50% - 30px);
    position: absolute;
  }

  @media screen and (min-width: 768px) {
    .footer-content {
      align-items: center;
      display: flex;
      justify-content: space-between;

      p {
        margin: 0;
      }
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="footer-content">
      <SiteNav />
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on{' '}
        <a href="https://netlify.com">Netlify</a>.
      </p>
    </div>
    <img
      alt="Gatsby Icon"
      className="gatsby-icon"
      src={gatsbyicon}
      width="60"
    />
  </FooterStyles>
);

export default Footer;
