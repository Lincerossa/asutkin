import styled from "styled-components";




export const Star = styled.div.attrs(props => ({
  style: {
    left: props.left,
    top: props.top,
    width: props.dimension,
    height: props.dimension,
  },
}))`
  border-radius: 50%;
  background-color: ${props => props.color};
  position: absolute;
`