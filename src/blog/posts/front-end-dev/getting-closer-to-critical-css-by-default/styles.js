import styled from "@emotion/styled"

const CustomTable = styled.div`
  overflow-x: scroll;

  td,
  th {
    border: 1px solid ${props => props.theme.colors.accent};
  }

  th {
    background: rgba(239, 241, 243, 0.5);
  }

  tr:nth-child(even) td {
    background: rgba(239, 241, 243, 0.5);
  }
`

export { CustomTable }
