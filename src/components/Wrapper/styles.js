import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  ${(props) => props.hasPadding && 'padding: 0 1rem'};
  margin: 0 auto;
  ${(props) => props.size === 'small' && 'max-width: 200px'};
  ${(props) => props.size === 'regular' && 'max-width: 500px'};
  ${(props) => props.size === 'big' && 'max-width: 900px'};
  ${(props) => props.size === 'large' && 'max-width: 1220px'};
`
