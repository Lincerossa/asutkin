export const isDesktop = typeof window !== "undefined" && window.innerWidth > 768


export const getPath = (url, pathPrefix) => (url.indexOf("http") > -1 || url.indexOf("https") > -1)
  ? url // absolute link
  : `${pathPrefix}/${url}` // relative link

