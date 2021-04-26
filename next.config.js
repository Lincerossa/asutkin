
const data = require("./data.js")

function createPage(route){
  const { slug, routes, componentIds} = route
  
  return [
    {
      ...route,
      slug,
      currentRoute: route,
      components: componentIds.map(id => data.components.find(component => component.id === id)).filter(e => e)
    },
    ...(routes ? routes.flatMap(innerRoute => createPage({...innerRoute, slug: `${route.slug}${innerRoute.slug}` })) : [])
  ]
}

module.exports = {
  exportPathMap: async function () {

    return data.routes.flatMap(createPage).reduce((acc, val) => ({
      ...acc,
      [val.slug]: {page: '/main', query: val}
    }), {})
  },
}