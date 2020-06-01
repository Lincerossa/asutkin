import styled from 'styled-components'

export const ListItem = styled.div`

  @media (min-width: 768px){
    transition: .4s all;

    img {
      &:hover {
        
        cursor: pointer;
        box-shadow: 0 0 9.5px 3px rgba(0,0,0,.2)
      }
    }
  }
  
`
