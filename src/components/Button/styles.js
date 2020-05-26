import styled from 'styled-components'

export const Button = styled.div`
  ${(props) => props.color
    && `
    button {
      color: white;
      background-color: ${props.color.main || props.color};
      border-color: transparent;
      &:hover,
      &:focus{
        color: white;
        background-color: ${props.color.active || props.color.main || props.color};
        border-color: transparent;
      }
    }      
  `};
`
