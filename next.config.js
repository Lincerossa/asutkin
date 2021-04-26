
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
    ...(routes ? routes.map(innerRoute => createPage({...innerRoute, slug: `${route.slug}${innerRoute.slug}` })) : [])
  ]
}

module.exports = {
  exportPathMap: async function () {

    return data.routes.map(createPage).flat(3).reduce((acc, val) => ({
      ...acc,
      [val.slug]: {page: '/main', query: val}
    }), {})
  },
}