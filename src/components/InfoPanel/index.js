import React from 'react'
import * as S from './styles'
import * as Icons from '@ant-design/icons';

import { isDesktop } from '../../utility'

const Map = React.lazy(() =>
  import("../Map")
)



const InfoPanel = ({ listOfPoints, items }) => (
  <S.InfoPanel>
    <S.ItemsWrapper>
      {
        items.map(({icon, title, text}) => {
          
          const Icon = Icons[icon]
          
          return (
            <S.Item key={title}>
              <S.ItemTitle>{title}</S.ItemTitle>
              <S.ItemInner>
                <S.ItemIconWrapper><Icon /></S.ItemIconWrapper>
                <S.ItemText>{text}</S.ItemText>
              </S.ItemInner>
            </S.Item>
          )
        })
      }
    </S.ItemsWrapper>
    <S.MapWrapper>
      {isDesktop && (
        <React.Suspense fallback={<div />}>
          <Map listOfPoints={listOfPoints} />
        </React.Suspense>
      )}
    </S.MapWrapper>
  </S.InfoPanel>
)

export default InfoPanel