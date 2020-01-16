import styled from '@emotion/styled';

const FullBleed = styled.figure`
  margin-left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 32px);

  figcaption {
    margin: 8px 0 0 8px;
  }
`;

export { FullBleed };
