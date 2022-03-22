import React, { useContext } from 'react'
import { GlobalContext } from '.'

export const useGlobalStorage = () => {
   const context = useContext(GlobalContext)

   return context
}
