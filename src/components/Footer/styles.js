import styled from 'styled-components'

export const Footer = styled.div`
`
export const TextWrapper = styled.div`
  color: ${props => props.theme.colors.black.primary};
  font-size: 1.5rem;
  font-weight: 300;
  span {
    color: ${props => props.theme.colors.red.primary}
  }
`
export const LogoWrapper = styled.div`
  width: 45px;
  display: inline-block;

  svg {
    fill: ${props => props.theme.colors.black.primary};
  }
 
`
