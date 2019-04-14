import React from 'react';

import styled from '@emotion/styled';

const NavListStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;

  a {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;

    &:not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }

  p {
    margin: 0.5rem 0;
  }

  time {
    display: block;
    font-size: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.25rem;
    }
  }
`;

const NavList = ({ children }) => (
  <NavListStyles>
    <nav>{children}</nav>
  </NavListStyles>
);

export default NavList;
