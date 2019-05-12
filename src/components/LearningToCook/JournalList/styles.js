import styled from '@emotion/styled';

export const JournalListStyles = styled.nav`
  display: grid;
  grid-gap: 0.5rem;

  a {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    &:hover {
      .meta {
        transform: scale(1.1);
      }

      img {
        filter: grayscale(1);
      }
    }
  }

  img {
    transition: filter 0.3s ease-in-out !important;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }

  .meta {
    background: #ffffff;
    color: #a1a1a1;
    padding: 1rem;
    position: absolute;
    transition: transform 0.3s ease-in-out;
  }

  h3 {
    color: #ff7101;
    margin: 0 0 0.25rem 0;
  }

  time {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
`;
