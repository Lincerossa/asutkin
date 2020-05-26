import styled from 'styled-components'

export const List = styled.div.attrs({
  className: 'List',
})`
  width: 100%;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
  }
  
`

export const ListItem = styled.div`

`
