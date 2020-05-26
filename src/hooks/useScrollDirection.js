import  {useState, useEffect} from 'react'


import usePrevious from './usePrevious'


export default () => {

  const [scrollPosition, setScrollPosition] = useState(null)
  const prevScrollPosition = usePrevious(scrollPosition)
  const [scrollDirection, setDirection] = useState(null)

  useEffect((e) => {

    if(scrollPosition > prevScrollPosition && scrollPosition > 100) {
      setDirection("down")
    }
    if(scrollPosition < prevScrollPosition){
      setDirection("up")
    }
  },[scrollPosition, prevScrollPosition])


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


  return ({scrollDirection, scrollPosition})
}

