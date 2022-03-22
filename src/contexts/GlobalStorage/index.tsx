import { useApi } from 'hooks/useApi'
import React, { createContext, useEffect, useState } from 'react'
import { GlobalContextTypes, GlobalStorageTypes, ImageType } from './types'

export const GlobalContext = createContext<GlobalContextTypes>(
   {} as GlobalContextTypes
)

export const GlobalStorage = ({ children }: GlobalStorageTypes) => {
   const api = useApi()
   const [data, setData] = useState<ImageType[]>([])

   useEffect(() => {
      const fetchImages = async () => {
         const response = await api.requestImages()
         setData(response)
      }
      fetchImages()
   }, [])

   return (
      <GlobalContext.Provider value={{ data }}>
         {children}
      </GlobalContext.Provider>
   )
}
