import React from 'react'
import * as S from './styles'
import * as Icons from '@ant-design/icons';
  
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
            <S.Item>
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
      {typeof window !== "undefined" && (
        <React.Suspense fallback={<div />}>
          <Map listOfPoints={listOfPoints} />
        </React.Suspense>
      )}
    </S.MapWrapper>
  </S.InfoPanel>
)

export default InfoPanel