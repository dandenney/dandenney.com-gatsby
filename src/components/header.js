import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import avatar from '../images/avatar-circle.png';

const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  a {
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }

  img {
    display: block;
  }
`;

const Header = () => (
  <HeaderStyles>
    <Link className="link-img" to="/">
      <img alt="Illustrated Dan Denney in a circle" src={avatar} width="40" />
    </Link>
    <div>
      <Link to="/posts">Blog</Link>
      <Link to="/blips">Blips</Link>
      <Link to="/tinkerings">Tinkerings</Link>
    </div>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
