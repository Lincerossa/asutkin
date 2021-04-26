import React from "react"
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '../style/theme'
import GlobalStyle from '../style/global'
import {Footer, Header, MagicMouse } from '../../src/components'

export default function App({ Component, pageProps }) {
  const { currentRoute, routes, inverted} = pageProps
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Header currentRoute={currentRoute} routes={routes} inverted={inverted ? true : false} />
          <Component {...pageProps} />
          <Footer />
          <MagicMouse />
        </Main>
      </ThemeProvider>
    </>
  )
}


const Title = styled.div`
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  letter-spacing: 0.04rem;
  margin-bottom: 2rem;

  @media (min-width:768px){
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${props => props.hasTitle ? '6rem' : '0'};
  ${props => props.status === "loading" && 'opacity: 0'};
`