import React from 'react'

import Background from '../Background'
import Wrapper from '../Wrapper'
import Padder from '../Padder'

export const MaybeWithBackground = ({background, children}) => {

 if( background){
   return <Background color={background}>{children} </Background>
 } 
 return children
}

export const MaybeWithWrapper = ({wrapper, children}) => {

 if( wrapper){
   return <Wrapper size={wrapper}>{children} </Wrapper>
 } 
 return children
}

export const MaybeWithPadder = ({padder, children}) => {

 if(padder){
   return <Padder size={padder}>{children} </Padder>
 } 
 return children
}
