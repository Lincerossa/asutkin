import React from "react"
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from './src/style/theme'
import GlobalStyle from './src/style/global'

export const wrapRootElement = (props) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    {props.element}
    </ThemeProvider>
  </>
)


