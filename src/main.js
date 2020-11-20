import React from "react"

import './constants'
import * as C from "./components"
import * as M from './components/Maybe'

export default (props) => {
  const { data: { components } } = props.pageContext
  return (
  <C.Layout {...props}>
    {
      components?.map(({id, ...props}) => {
        const Component = C[id.split("_")[0]]
        return (
          <M.WithBackground {...props} key={id}>
            <M.WithWrapper {...props}>
              <M.WithPadder {...props}>
                <Component {...props} />
              </M.WithPadder>
            </M.WithWrapper>
          </M.WithBackground>
        )
      }
      )
    }
  </C.Layout>
)}