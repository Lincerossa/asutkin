import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Image from '../Image'

const Hero = ({ image, supertitle, title, subtitle }) => (
  <S.MediaWrapper>
    <Image image={image} />
    <Wrapper>
      <S.MediaHeader>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.MediaHeader>
    </Wrapper>

  </S.MediaWrapper>
)


export default Hero