const path = require('path')

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions

  return graphql(`
    query { 
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              routes {
                slug
                label
                metaTitle
                metaDescription
                hidden
                componentIds
                routes {
                  slug
                  label
                  metaTitle
                  metaDescription
                  metaImage
                  hidden
                  componentIds
                }
              }
              components {
                id
                wrapper
                padder
                background
                title
                date
                text
                image {
                  src
                }

                items {
                  slug
                  supertitle
                  title
                  tags
                  subtitle
                  content
                  image {
                    src
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          pathPrefix
          title
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const siteMetadata = result.data.site.siteMetadata

    const data = result.data.allMarkdownRemark.edges.find(edge => edge.node.fileAbsolutePath.indexOf(`data.md`) > -1)

    const { routes, components} = data.node.frontmatter



    function generateRoute(route){
      const { slug, routes, componentIds} = route
      
      createPage({
        path: slug,
        component: path.resolve("./src/main.js"),
        context: {
          data: {
            ...data.node.frontmatter,
            components: componentIds.map(id => components.find(component => component.id === id)).filter(e => e)
          },
          currentRoute: route,
          siteMetadata
        }
      })

      if(routes && routes.length > 0) routes.map(innerRoute => generateRoute({...innerRoute, slug: `${route.slug}${innerRoute.slug}` }))

    }

    routes.map(generateRoute)


  })
}


