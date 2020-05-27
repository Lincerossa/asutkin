import styled from 'styled-components'


export const InfoPanel = styled.div`
   @media (min-width: 768px){
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2,1fr);
   }
`
export const ItemsWrapper = styled.div`

`
export const Item = styled.div`
  margin-bottom: 1rem;
 
`

export const ItemTitle = styled.div`
  color:${props => props.theme.colors.primary};
  margin-bottom: .5rem;
`

export const ItemInner   = styled.div`
   display: flex;
 
`

export const ItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.gray.secondary};
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
  color:${props => props.theme.colors.black.primary};
`



export const ItemText = styled.div`
  display: flex;
  align-items: center;
`




export const MapWrapper = styled.div`

   .mapboxgl-map{
     height: 100%;
     min-height: 400px;
   }
`