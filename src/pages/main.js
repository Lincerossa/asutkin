import React from "react"
import { useRouter } from 'next/router'
import * as C from "../components"
import * as M from '../components/Maybe'



const Main = (props) => {
  const { data } = props

  const components = [{
    id: "RichText_0",
    text:"<h1>bellissimo titolo</h2>"
  }]
  
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


Main.getInitialProps = async ({query}) => {
  return {
    data: query.data
  }
}

export default Main