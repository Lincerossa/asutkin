import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Image from '../Image'
import TextDistortion from '../TextDistortion'

const Hero = ({ image, supertitle, title, subtitle }) => (
  <S.HeroWrapper>
    <Image image={image} />
    {supertitle && <S.Supertitle><TextDistortion>{supertitle}</TextDistortion></S.Supertitle>}
    <Wrapper>
      <S.MediaHeader>
        {title && <S.Title>{title}</S.Title>}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.MediaHeader>
    </Wrapper>

  </S.HeroWrapper>
)


export default Hero