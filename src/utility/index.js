export const isDesktop = typeof window !== "undefined" && window.innerWidth > 768


export const getPath = (url, pathPrefix) => {

  // absolute link
  if (url.indexOf("http") > -1 || url.indexOf("https") > -1) return url

  // relative link
  return `${pathPrefix}/${url}`

}
