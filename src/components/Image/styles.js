import styled from 'styled-components'


export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  transition: all .25s;
  display: block;
  width: 100%;
  ${props => props.loading && `
    filter: blur(5px) grayscale(40%);
  `} 
  ${props => props.success && `
    filter: auto;
  `} 

`
export const Description = styled.div`
  color: ${props => props.theme.colors.thirdary};
  font-style: oblique;
  font-size: .75rem;
  font-weight: 300;
  padding: .5rem 0;
`
