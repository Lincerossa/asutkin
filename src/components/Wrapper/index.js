import React from 'react'
import * as S from './styles'

export default ({ children, size, hasPadding = true }) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>{children}</S.Wrapper>
)
