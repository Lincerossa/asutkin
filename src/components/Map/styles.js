import styled from 'styled-components'

export const Mark = styled.div`

` 
export const MarkCircle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
`
export const MarkLabel = styled.div`

  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translate(0, -50%);
  font-size: .75rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.thirdary};
`