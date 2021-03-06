import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  display: block;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: .4s all;
  &:hover {
    cursor: pointer !important;
    box-shadow: 0 0 9.5px 3px rgba(0,0,0,.25)
  }
`


export const MediaWrapper = styled.div`
  position: relative;
  padding-top: ${props => props.full ? '100%' : '60%'};
  overflow: hidden;

  img {
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  ${props => props.full ?
   `&:before{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
  }`
   : ''};
`

export const Supertitle = styled.div`
  font-family: sans-serif;
  color: ${ props => props.theme.colors.gray.primary};
  font-size: .875rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
`

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
`


export const Content = styled.div`
  color: ${ props => props.theme.colors.gray.primary};
  font-size: .75rem;
  letter-spacing: .04em;
`
export const Description = styled.div`
  padding: 1rem;
  position: ${props => props.full ? 'absolute' : 'inherit'};
  bottom: ${props => props.full ? '1rem' : 'inherit'};
  color: ${props => props.full ? 'white' : 'inherit'};
  z-index: 1;
`


export const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: .5rem;
  font-family: sans-serif;
  letter-spacing: .04em;
`
export const Tag = styled.div`
  border-radius: 4px;
  background: ${props => props.theme.colors.primary};
  color: white;
  font-size: .656rem;
  padding: .25rem .5rem;
  margin-right: .25rem;
`