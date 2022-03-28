import { useApi } from 'hooks/useApi'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { createContext, useEffect, useState } from 'react'
import { GlobalContextTypes, GlobalStorageTypes, ImageType } from './types'

export const GlobalContext = createContext<GlobalContextTypes>(
   {} as GlobalContextTypes
)

export const GlobalStorage = ({ children }: GlobalStorageTypes) => {
   const localStorage = useLocalStorage()
   const api = useApi()
   const [data, setData] = useState<ImageType[] | null>(null)

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

   useEffect(() => {
      fetchImages()
   }, [])

   return (
      <GlobalContext.Provider value={{ data, fetchImages }}>
         {children}
      </GlobalContext.Provider>
   )
}
