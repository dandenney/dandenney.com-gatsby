import styled from '@emotion/styled';

export const LearningToCook = styled.section`
  color: #652d16;
  padding: 0 1rem 2rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #5c7210;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;
