import React from "react"
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '../style/theme'
import GlobalStyle from '../style/global'
import {Footer, Header, MagicMouse } from '../../src/components'
import { routes } from '../../data'

function App({ Component, pageProps = {} }) {
  const { query } = pageProps
  const { currentRoute, inverted, metaTitle, metaDescription } = query || {}

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta property="og:type" content="website" />
        
        <link defer async href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500&display=swap" rel="stylesheet" />
        <link defer async rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link defer async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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

export default App