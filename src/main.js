import React from "react"


import * as Components from "./components"

const Layout = Components.Layout

const Background = Components.Background
const Wrapper = Components.Wrapper
const Padder = Components.Padder


const MaybeWithBackground = ({background, children}) => {

 if( background){
   return <Background color={background}>{children} </Background>
 } 
 return children
}

const MaybeWithWrapper = ({wrapper, children}) => {

 if( wrapper){
   return <Wrapper size={wrapper}>{children} </Wrapper>
 } 
 return children
}

const MaybeWithPadder = ({padder, children}) => {

 if(padder){
   return <Padder size={padder}>{children} </Padder>
 } 
 return children
}


export default (props) => {

  const { data, siteMetadata } = props.pageContext
  const { pathPrefix} = siteMetadata
  const { components } = data 

  return (
  <Layout {...props}>
  {
    components && components.length > 0 &&
    components.map(({id, ...props}) => {

      const Component = id.split("_")[0]

      const C = Components[Component]

      console.log({Component, C, props})
      return (
          <MaybeWithBackground {...props}>
            <MaybeWithWrapper {...props}>
              <MaybeWithPadder {...props}>
                <C {...props} />
              </MaybeWithPadder>
            </MaybeWithWrapper>
          </MaybeWithBackground>
      )
    }
    )
  }
  </Layout>
)}






