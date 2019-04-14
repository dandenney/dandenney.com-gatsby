import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  align-items: center;
  display: flex;

  a {
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;

const SiteNav = () => (
  <Nav>
    <Link to="/posts">Blog</Link>
    <Link to="/blips">Blips</Link>
    <Link to="/tinkerings">Tinkerings</Link>
  </Nav>
);

export default SiteNav;
