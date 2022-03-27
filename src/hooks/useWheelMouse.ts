import { useState, useLayoutEffect } from 'react'

const useWheelMouse = () => {
   const [wheel, setWheel] = useState([0])

   useLayoutEffect(() => {
      const updateWheel = () => {
         window.addEventListener('wheel', function (event) {
            let status = 0
            if (event.deltaY < 0) {
               status = -1
            } else if (event.deltaY > 0) {
               status = 1
            }

            setWheel([status])
         })
      }

      updateWheel()

      return () => window.removeEventListener('wheel', updateWheel)
   }, [])
   return wheel
}

export default useWheelMouse
