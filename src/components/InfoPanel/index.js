import React from 'react'
import * as Icons from '@ant-design/icons'
import dynamic from 'next/dynamic'
import * as S from './styles'

const DynamicMapNoSSR = dynamic(
  () => import('../Map'),
  { ssr: false, loading: () => <p>...</p> },
)

const InfoPanel = ({ listOfPoints, items }) => (
  <S.InfoPanel>
    <S.ItemsWrapper>
      {
        items.map(({ icon, title, text }) => {
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
      <DynamicMapNoSSR listOfPoints={listOfPoints} />
    </S.MapWrapper>
  </S.InfoPanel>
)

export default InfoPanel
