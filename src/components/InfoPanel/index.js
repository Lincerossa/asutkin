import React from 'react'
import Map from '../Map'

import * as S from './styles'
import * as Icons from '@ant-design/icons';


const InfoPanel = ({ coordinates, items }) => (
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
      <Map coordinates={coordinates} />
    </S.MapWrapper>
  </S.InfoPanel>
)

export default InfoPanel