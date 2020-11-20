const lang = process.argv.slice(process.argv.length - 1)

module.exports = {
  siteMetadata: {
    title: `Asutkin`,
    lang
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        displayName: false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1836604,
        sv: 6
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },

  ],
}
