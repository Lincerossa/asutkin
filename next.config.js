

// function generateRoute(route){
//   const { slug, routes, componentIds} = route
  
//   createPage({
//     path: slug,
//     component: path.resolve("./src/main.js"),
//     context: {
//       data: {
//         ...data.node.frontmatter,
//         components: componentIds.map(id => components.find(component => component.id === id)).filter(e => e)
//       },
//       currentRoute: route,
//       siteMetadata
//     }
//   })

//   if(routes && routes.length > 0) routes.map(innerRoute => generateRoute({...innerRoute, slug: `${route.slug}${innerRoute.slug}` }))

// }

// routes.map(generateRoute)


module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/main' },
      '/about': { page: '/main', query: {title: "prova", data: "qui dati incredibili"}},
    }
  },
}