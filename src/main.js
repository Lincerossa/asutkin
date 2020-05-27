import React from "react"

import * as Components from "./components"
import {MaybeWithBackground, MaybeWithWrapper, MaybeWithPadder } from './components/Maybe'

const Layout = Components.Layout

export default (props) => {
  const { data } = props.pageContext
  const { components } = data 
  return (
  <Layout {...props}>
  {
    components?.map(({id, ...props}) => {
      const Component = id.split("_")[0]
      const C = Components[Component]
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