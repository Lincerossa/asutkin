import { useState, useEffect} from 'react'
import { isDesktop } from '../utility'
const { MOUSEUP, MOUSEDOWN, MOUSEMOVE, MOUSEOUT } = global.constants

function useMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseStatus, setMouseStatus] = useState(null)

  function handleMouseDown() {
    setMouseStatus(MOUSEDOWN)
  }

  function handleMouseUp() {
    setMouseStatus(MOUSEUP)
  }
  function handleMouseOut() {
    setMousePosition({ x: 0, y: 0 })
    setMouseStatus(MOUSEUP)
  }

  function handleMouseMove(e) {
    setMousePosition({
      x: e.clientX || (e?.touches?.[0]?.clientX) || 0,
      y: e.clientY || (e?.touches?.[0]?.clientY) || 0,
    })
  }

  useEffect(() => {
    if(isDesktop){
      window.addEventListener(MOUSEDOWN, handleMouseDown)
      window.addEventListener(MOUSEMOVE, handleMouseMove)
      window.addEventListener(MOUSEUP, handleMouseUp)
      window.addEventListener(MOUSEOUT, handleMouseOut)
    }
    return () => {
      if(isDesktop){
        window.removeEventListener(MOUSEDOWN, handleMouseDown)
        window.removeEventListener(MOUSEUP, handleMouseUp)
        window.removeEventListener(MOUSEMOVE, handleMouseMove)
        window.removeEventListener(MOUSEOUT, handleMouseOut)
      }
    }
  }, [])

  return {
    mousePosition,
    mouseStatus,
  }
}

export default useMouse