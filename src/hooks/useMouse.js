import { useState, useEffect} from 'react'

function useMouse() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [mouseStatus, setMouseStatus] = useState(null)

  function handleMouseDown() {
    setMouseStatus('mousedown')
  }

  function handleMouseUp() {
    setMouseStatus('mouseup')
  }
  function handleMouseOut() {
    setMousePosition({
      x: 0,
      y: 0,
    })
    setMouseStatus('mouseup')
  }


  function handleMouseMove(e) {
    setMousePosition({
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
    })
  }



  useEffect(() => {
    if(typeof window === "undefined" || window.innerWidth <= 768) return
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseout', handleMouseOut)
    
    return () => {
      if(typeof window === "undefined" || window.innerWidth <= 768) return
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return {
    mousePosition: {
      ...mousePosition,
      y: mousePosition.y 
    },
    mouseStatus,
  }
}


export default useMouse