import styled from 'styled-components'



export const MediaWrapper = styled.div`
  position: relative;
  &:before{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
  }
`



export const MediaHeader = styled.div`
  position: absolute;
  bottom: 3rem;
`


export const Supertitle = styled.div`
  font-family: sans-serif;
  color: ${ props => props.theme.colors.orange};
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
`

export const Subtitle = styled.div`
  text-transform: uppercase;
  color: white;
`