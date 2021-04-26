
const data = require("./data.js")

function createPage(route){
  const { slug, routes, componentIds} = route
  
  const current = {
    ...route,
    slug,
    currentRoute: route,
    components: componentIds.map(id => data.components.find(component => component.id === id)).filter(e => e)
  }
  if(!routes) return current

  return [
    current,
    ...routes.map(innerRoute => createPage({...innerRoute, slug: `${route.slug}${innerRoute.slug}` }))
  ]
}

module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {

    const result = data.routes.map(createPage).flat(3).reduce((acc, val) => ({
      ...acc,
      [val.slug]: {page: '/main', query: val}
    }), {})

    return result
  },
}