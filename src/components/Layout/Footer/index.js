import React, { useState} from 'react'
import { Link } from "gatsby"

import theme from '../../../style/theme'

import Wrapper from '../../Wrapper'
import Background from '../../Background'
import Padder from '../../Padder'
import * as S from './styles'
import Logo from '../Logo'

const Footer = ({ routes}) => {

  return (
    <S.Footer>
      <Background color={theme.colors.gray.secondary} >
        <Wrapper size="large">  
          <Padder size="big">
          <Link to="/"><S.LogoWrapper><Logo /></S.LogoWrapper></Link>
          <S.TextWrapper>
            Made with <span>♥</span> by <Link to="/mary">Mary</Link>, <Link to="/mary">Marci</Link> and <Link to="/asutkin">Asutkin</Link> 
          </S.TextWrapper>
          </Padder>
        </Wrapper>
      </Background>
    </S.Footer>
  )
}

export default Footer