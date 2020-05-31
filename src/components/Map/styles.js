import styled from 'styled-components'

export const Mark = styled.div`
  position: relative;

` 
export const MarkCircle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
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