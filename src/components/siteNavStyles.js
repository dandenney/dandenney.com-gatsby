import styled from '@emotion/styled';

const Container = styled.nav`
  align-items: center;
  display: flex;
  padding-left: 32px;

  a {
    color: ${props => props.theme.colors.action};
    font-family: ${props => props.theme.fonts.body};
    font-weight: ${props => props.theme.fontWeights.bold};
    text-decoration: none;
    transition: background-position 0.3s, transform 0.3s;
    &:hover {
      background-position: 0 100%, 0 100%;
      transform: scale(1.1);
    }
    ,
    &:not(:first-of-type) {
      margin-left: 1.5rem;
    }
  }
`;

export { Container };
