import styled from '@emotion/styled';

import MeatImg from 'images/learning-to-cook/bg-meat.jpg';
import SpicesImg from 'images/learning-to-cook/bg-spices.jpg';

export const Header = styled.header`
  h1 {
    font-size: 3rem;
    line-height: 1;
    margin: 1rem auto;
    text-align: center;
  }

  p {
    margin: 1.5rem auto;
    max-width: 600px;
  }

  @media screen and (min-width: 480px) {
    h1 br {
      display: none;
    }
  }

  @media screen and (min-width: 760px) {
    h1 {
      font-size: 6rem;
      margin: 2rem auto 2rem;
      max-width: 600px;

      br {
        display: block;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    position: relative;

    h1 {
      font-size: 8rem;
      margin: 3rem auto 2rem;
      max-width: 600px;

      br {
        display: block;
      }
    }

    p {
      font-size: 1.25rem;
    }

    &::before {
      background-image: url(${MeatImg});
      background-position: left top;
      background-repeat: no-repeat;
      background-size: 100% auto;
      bottom: 0;
      content: '';
      position: absolute;
      left: -1rem;
      top: 0;
      width: 280px;
    }

    &::after {
      background-image: url(${SpicesImg});
      background-position: right top;
      background-repeat: no-repeat;
      background-size: auto 100%;
      bottom: 0;
      content: '';
      position: absolute;
      right: -1rem;
      top: 0;
      width: 280px;
    }
  }

  @media screen and (min-width: 1400px) {
    &::before {
      width: 380px;
    }

    &::after {
      width: 380px;
    }
  }
`;
