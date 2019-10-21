import styled from "@emotion/styled"

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

  a {
    background-image: linear-gradient(
        to right,
        #b51f24,
        #b51f24 50%,
        transparent 50%,
        transparent 10%
      ),
      linear-gradient(
        to right,
        #b51f24,
        #b51f24 50%,
        transparent 50%,
        transparent 100%
      );
    background-position: 0 100%, 100% 100%;
    background-repeat: repeat-x;
    background-size: 4px 0.055555556em, 200% 0.055555556em;
    color: ${props => props.theme.colors.action};
    display: inline-block;
    text-decoration: none;
    transition: background-position 0.3s;

    &:hover {
      background-position: 0 100%, 0 100%;
    }
  }
`

export { ListNav }
