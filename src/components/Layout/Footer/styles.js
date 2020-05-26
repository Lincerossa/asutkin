import styled from "styled-components"

export const Footer = styled.div`
  color: white;
  padding: 2rem 0;
`

export const LogoWrapper = styled.div`
  margin-bottom: 2rem;
  img {
    width: 150px;
    display: block;
  }
`

export const Column = styled.div`
  margin-bottom: 1rem;
  @media (min-width:768px){
    margin: 0;
    ${props => props.right && `text-align: left`};
  }
`

export const ColumnTitle = styled.div`
  font-size: 1.25rem;
  white-space: pre;
  letter-spacing: .04rem;
  font-weight: 300;
  color: ${props => props.theme.colors.primary};
  margin-bottom: .25rem;
`


export const ColumnText = styled.div`
  margin-bottom: .5rem;
  color: ${props => props.theme.colors.black.primary} !important;
  img {
    display: block;
    width: 150px;
  }
  a{
    margin-bottom: .5rem;
    display: block;
    color: ${props => props.theme.colors.black.primary} !important;
    &:hover{
      color:  ${props => props.theme.colors.primary} !important;
    }
  }
`