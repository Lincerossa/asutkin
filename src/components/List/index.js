import React from 'react'
import * as S from './styles'

export default ({ columns = 1, children }) => (
  <S.List columns={columns}>
    {React.Children.map(children, (child, index) => {
      return <S.ListItem>{child}</S.ListItem>
    })}
  </S.List>
)
