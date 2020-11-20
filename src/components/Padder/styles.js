import styled from 'styled-components'

const SIZES = {
  small: 1,
  regular: 2,
  big: 3,
}

export const Padder = styled.div`
  padding: ${props => `${SIZES[props.size]}rem 0`};
`
