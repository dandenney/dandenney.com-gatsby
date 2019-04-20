import styled from '@emotion/styled';

export const Section = styled.section`
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

export const Dan = styled.div`
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

export const SocialLinks = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .socialLinks {
    align-items: center;
    display: flex;
  }

  p {
    margin: 0.5rem 0.5rem 0.5rem 0;
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
