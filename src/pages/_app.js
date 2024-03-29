import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import theme from '../style/theme'
import GlobalStyle from '../style/global'
import { Footer, Header, MagicMouse } from '../components'
import { routes } from '../data'

function App({ Component, pageProps }) {
  const {
    currentRoute, inverted, metaTitle, metaDescription,
  } = pageProps

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="title" content={metaTitle} />
        <meta property="description" content={metaDescription} />
        <meta property="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Header currentRoute={currentRoute} routes={routes} inverted={!!inverted} />
          <Component {...pageProps} />
          <Footer />
          <MagicMouse />
        </Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${(props) => (props.hasTitle ? '6rem' : '0')};
  ${(props) => props.status === 'loading' && 'opacity: 0'};
`

export default App
