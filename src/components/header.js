import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

import SiteNav from './sitenav';

import avatar from '../images/avatar-circle.png';

const HeaderStyles = styled.header`
  align-items: center;
  border-bottom: 1px solid var(--color-accent);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  img {
    display: block;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Link className="link-img" to="/">
      <img alt="Illustrated Dan Denney in a circle" src={avatar} width="40" />
    </Link>
    <SiteNav />
  </HeaderStyles>
);

export default Header;
