import { useApi } from 'hooks/useApi'
import React, { createContext, useEffect, useState } from 'react'
import { GlobalContextTypes, GlobalStorageTypes, ImageType } from './types'

export const GlobalContext = createContext<GlobalContextTypes>(
   {} as GlobalContextTypes
)

export const GlobalStorage = ({ children }: GlobalStorageTypes) => {
   const api = useApi()
   const [data, setData] = useState<ImageType[]>([
      {
         image_id: 0,
         title: 'Loading cats...',
         url: 'https://i.gifer.com/1tJG.gif',
         selected: false
      }
   ])

   const fetchImages = async () => {
      const response = await api.requestImages()
      const add = { selected: false }

      if (response) {
         const newResponse = response.map((item: number) =>
            Object.assign(item, add)
         )
         setTimeout(() => {
            setData(newResponse)
         }, 1500)
      }
   }

   return (
      <GlobalContext.Provider value={{ data, fetchImages }}>
         {children}
      </GlobalContext.Provider>
   )
}
