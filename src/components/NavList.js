import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const NavList = ({ bgcolor, children }) => {
  return (
    <NavListStyles bgcolor={bgcolor}>
      <nav>{children}</nav>
    </NavListStyles>
  );
};

const NavListStyles = styled.section`
  background: ${props => props.bgcolor};
  display: flex;
  justify-content: center;
  padding: 2rem;

  a {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: block;
    font-weight: 600;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;

    span {
      transition: background-color 0.3s ease-in-out;
    }

    &:hover {
      transform: translateY(-1px);

      span {
        background-color: #fef7f7;
      }
    }
  }

  p {
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0 0 0;
  }

  time {
    color: var(--color-text);
    font-weight: 400;
    display: block;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }
`;

NavListStyles.PropTypes = {
  bgcolor: PropTypes.string,
};

NavListStyles.defaultProps = {
  bgcolor: 'var(--color-bg)',
};

export default NavList;
