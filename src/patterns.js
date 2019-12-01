import styled from '@emotion/styled';

const ImgListNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fonts.body};
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background: #ffffff;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 3px;
    margin: 1rem;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    },
  }
`;

const ListNav = styled.ul`
  display: inline-block;
  font-family: ${props => props.theme.fonts.body};
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;

  li {
    background: #ffffff;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 3px;
    padding: 1rem;
  }

  li:not(:first-child) {
    margin-top: 1rem;
  }
`;

export { ImgListNav, ListNav };
