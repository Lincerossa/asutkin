import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Image from '../Image'
import TextDistortion from '../TextDistortion'

const Hero = ({ image, maintitle, title, subtitle, supertitle }) => (
  <S.HeroWrapper>
    <Image image={image} />
    {maintitle && <S.Maintitle><TextDistortion>{maintitle}</TextDistortion></S.Maintitle>}
    <Wrapper size="large">
      <S.MediaHeader>
        {supertitle && <S.Supertitle>{supertitle}</S.Supertitle>}
        {title && <S.Title>{title}</S.Title>}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.MediaHeader>
    </Wrapper>

  </S.HeroWrapper>
)


export default Hero