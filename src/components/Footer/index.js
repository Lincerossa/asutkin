import React, { useState} from 'react'
import Link from 'next/link'

import theme from '../../style/theme'

import Wrapper from '../Wrapper'
import Background from '../Background'
import Padder from '../Padder'
import * as S from './styles'
import Logo from '../Logo'

const Footer = () => {
  return (
    <S.Footer>
      <Background color={theme.colors.gray.secondary} >
        <Wrapper size="large">  
          <Padder size="big">
          <Link href="/"><a><S.LogoWrapper><Logo /></S.LogoWrapper></a></Link>
          <S.TextWrapper>
            Made with <span>♥</span> by <Link href="/mary">Mary</Link>, <Link href="/mary">Marci</Link> and <Link href="/asutkin">Asutkin</Link> 
          </S.TextWrapper>
          </Padder>
        </Wrapper>
      </Background>
    </S.Footer>
  )
}

export default Footer