import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from './Header'
import Wrapper from '../Wrapper'
import Background from '../Background'
import { useMouse } from '../../hooks'

import * as S from './styles'
import theme from "../../style/theme";

const Layout = ({ children, pageContext, hasMagicMouse = true, inverted = true,  }) => {
  const { data, currentRoute, siteMetadata } = pageContext
  const { routes } = data
  const mouseStatus = useMouse()


  const {
    metaTitle,
    metaDescription,
    metaAuthor,
    metaMeta = []
  } = currentRoute

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: siteMetadata.lang,
        }}
        title={siteMetadata.title}
        titleTemplate={`%s | ${metaTitle}`}
        meta={[
          {
            name: `viewport`,
            content: "width=device-width,minimum-scale=1,initial-scale=1",
          },
          {
            name: `google`,
            content: "notranslate",
          },
          {
            property: `title`,
            content: metaTitle,
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: metaAuthor,
          },
          {
            name: `twitter:title`,
            content: metaTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(metaMeta || [])}
      >
        <link defer async href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500&display=swap" rel="stylesheet" />
        <link defer async rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link defer async rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>

      <S.Main>
        {children}
      </S.Main>
    
      <Header routes={routes} pathPrefix={siteMetadata.pathPrefix} inverted={inverted ? true : false} />

      {hasMagicMouse && <S.MagicMouseWrapper>
        <S.MagicMouse  {...mouseStatus} />
      </S.MagicMouseWrapper>}
    </>
  )
}


Layout.propTypes = {
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  hasMagicMouse: PropTypes.bool,
  inverted: PropTypes.bool
}

export default Layout