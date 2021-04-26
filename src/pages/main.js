import React from "react"
import * as C from "../components"
import * as M from '../components/Maybe'

const Main = (props) => {
  const { query: { components } } = props

  return components?.map(({id, ...props}) => {
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
  })
}

Main.getInitialProps = async ({ query }) => {
  return {
    query
  }
}

export default Main