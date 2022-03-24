import { useApi } from 'hooks/useApi'
import React, { createContext, useEffect, useState } from 'react'
import { GlobalContextTypes, GlobalStorageTypes, ImageType } from './types'

export const GlobalContext = createContext<GlobalContextTypes>(
   {} as GlobalContextTypes
)

export const GlobalStorage = ({ children }: GlobalStorageTypes) => {
   const api = useApi()
   const [data, setData] = useState<ImageType | null>(null)
   console.log(data)

   const fetchImages = async () => {
      const response = await api.requestImages()
      const source = { selected: false }

      if (response) {
         const newResponse = response.map((item: number) =>
            Object.assign(item, source)
         )
         setData(newResponse)
      }
   }

   return (
      <GlobalContext.Provider value={{ data, fetchImages }}>
         {children}
      </GlobalContext.Provider>
   )
}
