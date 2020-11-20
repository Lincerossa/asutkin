import  { useState, useEffect} from 'react'
import usePrevious from './usePrevious'

const { DOWN, UP } = global.constants

export default () => {

  const [scrollPosition, setScrollPosition] = useState(null)
  const prevScrollPosition = usePrevious(scrollPosition)
  
  function handleGetDirection(){
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    if(typeof window === "undefined") return
    window.addEventListener('scroll', handleGetDirection, false)
    return () => {
      window.removeEventListener('scroll', handleGetDirection, false)
    }
  }, [])


  return ({
    scrollDirection: (scrollPosition > prevScrollPosition) && (scrollPosition > 100) ? DOWN : UP,
    scrollPosition
  })
}

