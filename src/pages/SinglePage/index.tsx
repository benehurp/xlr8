import { useApi } from 'hooks/useApi'
import React, { useEffect, useState } from 'react'

const SinglePage = () => {
   const api = useApi()
   const [data, setData] = useState([])

   useEffect(() => {
      const fetchImages = async () => {
         const response = await api.requestImages()
         setData(response)
         return null
      }
      fetchImages()
   }, [])

   return <div>Hello World!</div>
}

export default SinglePage
