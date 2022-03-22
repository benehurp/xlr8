import { useApi } from 'hooks/useApi'
import useLocalStorage from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'
import { ImageType } from './types'

const SinglePage = () => {
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
      <div>
         {data.map(({ image_id, title, url }) => (
            <div key={image_id}>
               <p>{title}</p>
               <img src={url}></img>
            </div>
         ))}
      </div>
   )
}

export default SinglePage
