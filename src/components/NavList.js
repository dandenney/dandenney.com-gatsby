import React from 'react';

import styled from '@emotion/styled';

const NavListStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;

  a {
    background-color: transparent;
    border-bottom: 2px solid var(--color-link);
    border-radius: 2px;
    color: var(--color-link);
    display: inline-block;
    font-weight: 600;
    margin-bottom: 1px;
    padding: 1px 0 0 0;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #fef7f7;
    }

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
    margin-top: 0.5rem;
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
