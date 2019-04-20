import styled from '@emotion/styled';

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
