import { useState, useLayoutEffect } from 'react'

const useActualPosition = () => {
   const [position, setPosition] = useState([0])

   useLayoutEffect(() => {
      function updatePosition() {
         setPosition([window.scrollY])
      }

      window.addEventListener('scroll', updatePosition)

      updatePosition()

      return () => window.removeEventListener('scroll', updatePosition)
   }, [])
   return position
}

export default useActualPosition
